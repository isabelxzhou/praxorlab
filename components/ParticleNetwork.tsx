"use client";

import { useEffect, useRef, useCallback, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  connections: number;
}

// sRGB approximations of the design tokens
// --ink ≈ oklch(0.970 0.005 80) ≈ warm near-white
const INK = "230, 225, 215";
// --signal ≈ oklch(0.840 0.150 78) ≈ sodium amber
const SIGNAL = "240, 184, 80";

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dimensionsRef = useRef({ w: 0, h: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mqTouch = window.matchMedia("(hover: none), (pointer: coarse)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqNarrow = window.matchMedia("(max-width: 767px)");

    const decide = () => {
      // No hover / touch-primary / reduced-motion / narrow viewport → skip.
      setEnabled(!(mqTouch.matches || mqReduced.matches || mqNarrow.matches));
    };
    decide();

    const add = (m: MediaQueryList) => m.addEventListener("change", decide);
    const remove = (m: MediaQueryList) => m.removeEventListener("change", decide);
    [mqTouch, mqReduced, mqNarrow].forEach(add);
    return () => {
      [mqTouch, mqReduced, mqNarrow].forEach(remove);
    };
  }, []);

  const initParticles = useCallback((w: number, h: number) => {
    const count = Math.min(Math.floor((w * h) / 9000), 160);
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.4 + 0.4,
        opacity: Math.random() * 0.35 + 0.1,
        connections: 0,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const parent = canvas.parentElement;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = parent
        ? parent.getBoundingClientRect()
        : { width: window.innerWidth, height: window.innerHeight };
      const w = rect.width;
      const h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimensionsRef.current = { w, h };
      if (particlesRef.current.length === 0) initParticles(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const CONNECTION_DISTANCE = 180;
    const MOUSE_DISTANCE = 260;

    const animate = () => {
      const { w, h } = dimensionsRef.current;
      ctx.clearRect(0, 0, w, h);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (const p of particles) p.connections = 0;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > w) { p.x = w; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > h) { p.y = h; p.vy *= -1; }

        // Gentle pull toward cursor
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DISTANCE && dist > 40) {
          const force = ((MOUSE_DISTANCE - dist) / MOUSE_DISTANCE) * 0.007;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.vx *= 0.998;
        p.vy *= 0.998;

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 0.75) {
          p.vx = (p.vx / speed) * 0.75;
          p.vy = (p.vy / speed) * 0.75;
        }
      }

      ctx.lineCap = "round";
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
            const dist = Math.sqrt(distSq);
            const baseAlpha = (1 - dist / CONNECTION_DISTANCE) * 0.16;

            // How close is this line to the cursor?
            const midX = (particles[i].x + particles[j].x) / 2;
            const midY = (particles[i].y + particles[j].y) / 2;
            const mdx = midX - mouse.x;
            const mdy = midY - mouse.y;
            const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
            const warmth =
              mouseDist < MOUSE_DISTANCE
                ? 1 - mouseDist / MOUSE_DISTANCE
                : 0;

            // Two-pass draw: a cool ink base, then warm amber where cursor is near
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${INK}, ${baseAlpha})`;
            ctx.lineWidth = 0.55;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            if (warmth > 0.05) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${SIGNAL}, ${warmth * 0.45})`;
              ctx.lineWidth = 0.9;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }

            particles[i].connections++;
            particles[j].connections++;
          }
        }

        // Line from particle to cursor
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DISTANCE) {
          const warmth = 1 - dist / MOUSE_DISTANCE;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${SIGNAL}, ${warmth * 0.55})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Particles
      for (const p of particles) {
        // Cursor proximity warms the dot from ink → signal
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const warmth = d < MOUSE_DISTANCE ? 1 - d / MOUSE_DISTANCE : 0;

        const connBoost = Math.min(p.connections * 0.06, 0.35);
        const baseOpacity = p.opacity + connBoost;

        if (warmth > 0.05) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius + warmth * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${SIGNAL}, ${Math.min(0.95, baseOpacity + warmth * 0.5)})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${INK}, ${baseOpacity})`;
          ctx.fill();
        }
      }

      // Cursor mark — crosshair, not a glow blob
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.strokeStyle = `rgba(${SIGNAL}, 0.65)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(mouse.x - 6, mouse.y);
        ctx.lineTo(mouse.x - 2, mouse.y);
        ctx.moveTo(mouse.x + 2, mouse.y);
        ctx.lineTo(mouse.x + 6, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 6);
        ctx.lineTo(mouse.x, mouse.y - 2);
        ctx.moveTo(mouse.x, mouse.y + 2);
        ctx.lineTo(mouse.x, mouse.y + 6);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${SIGNAL}, 0.9)`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enabled, initParticles]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
