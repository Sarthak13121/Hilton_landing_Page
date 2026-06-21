"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  depth: number; // 3D depth layer (0.5 = far, 2.0 = near)
  color: string;
}

export default function LiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(35, Math.floor((width * height) / 30000));

    const colors = [
      "rgba(0, 74, 198, 0.08)", // Primary blue
      "rgba(0, 108, 73, 0.06)",  // Secondary green
      "rgba(120, 75, 0, 0.04)",  // Accent amber
    ];

    // Initialize particles with random position, speed, and 3D depth scaling
    for (let i = 0; i < particleCount; i++) {
      const depth = 0.5 + Math.random() * 1.5; // Depth range: 0.5 to 2.0
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25 / depth, // Far particles drift slower
        vy: (Math.random() - 0.5) * 0.25 / depth,
        radius: (3.5 + Math.random() * 7.5) * depth, // Closer particles are larger
        depth,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Mouse coordinates relative to the center of the canvas
      mouseRef.current.targetX = e.clientX - rect.left - rect.width / 2;
      mouseRef.current.targetY = e.clientY - rect.top - rect.height / 2;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    // Listen on window to catch movements outside the hero container too
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation for fluid inertia
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      const mouseXOffset = mouseRef.current.x;
      const mouseYOffset = mouseRef.current.y;

      // Draw connection lines between particles of similar depths to reinforce the 3D layer illusion
      ctx.lineWidth = 0.55;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        const p1VisualX = p1.x + (mouseXOffset * 0.04 * p1.depth);
        const p1VisualY = p1.y + (mouseYOffset * 0.04 * p1.depth);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          if (Math.abs(p1.depth - p2.depth) > 0.45) continue; // Skip connections across deep spatial distances

          const p2VisualX = p2.x + (mouseXOffset * 0.04 * p2.depth);
          const p2VisualY = p2.y + (mouseYOffset * 0.04 * p2.depth);

          const dx = p1VisualX - p2VisualX;
          const dy = p1VisualY - p2VisualY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 130 * ((p1.depth + p2.depth) / 2);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.06 * ((p1.depth + p2.depth) / 2);
            ctx.strokeStyle = `rgba(0, 74, 198, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1VisualX, p1VisualY);
            ctx.lineTo(p2VisualX, p2VisualY);
            ctx.stroke();
          }
        }
      }

      // Draw particles (3D spheres)
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;
        if (p.y < -30) p.y = height + 30;
        if (p.y > height + 30) p.y = -30;

        // Apply depth-dependent parallax offset
        const visualX = p.x + (mouseXOffset * 0.04 * p.depth);
        const visualY = p.y + (mouseYOffset * 0.04 * p.depth);

        ctx.beginPath();
        ctx.arc(visualX, visualY, p.radius, 0, Math.PI * 2);

        // Volumetric 3D gradient shading for closer, larger particles
        if (p.depth > 1.25) {
          const gradient = ctx.createRadialGradient(
            visualX - p.radius * 0.22,
            visualY - p.radius * 0.22,
            p.radius * 0.05,
            visualX,
            visualY,
            p.radius
          );
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.22)");
          gradient.addColorStop(0.35, p.color);
          gradient.addColorStop(1, "rgba(0, 0, 0, 0.02)");
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = p.color;
        }

        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}
