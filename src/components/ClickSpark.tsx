"use client";

import React, { useRef, useEffect } from "react";

interface Spark {
  x: number;
  y: number;
  angle: number;
  start: number;
}

interface Props {
  color?: string;
  count?: number;
  size?: number;
  radius?: number;
  duration?: number;
  children?: React.ReactNode;
}

const ClickSpark = ({
  color = "#fff",
  count = 10,
  size = 12,
  radius = 20,
  duration = 450,
  children,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparks = useRef<Spark[]>([]);

  // Resize canvas to match parent size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;

    const resize = () => {
      const { width, height } = canvas.parentElement!.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  // Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let frame: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = performance.now();

      sparks.current = sparks.current.filter((s) => {
        const t = (now - s.start) / duration;
        if (t >= 1) return false;

        const ease = 1 - (1 - t) * (1 - t);

        const dist = ease * radius;
        const x1 = s.x + dist * Math.cos(s.angle);
        const y1 = s.y + dist * Math.sin(s.angle);

        const x2 = x1 + size * (1 - ease) * Math.cos(s.angle);
        const y2 = y1 + size * (1 - ease) * Math.sin(s.angle);

        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      frame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frame);
  }, [color, count, size, radius, duration]);

  // Click Handler
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSparks = Array.from({ length: count }, (_, i) => ({
      x,
      y,
      angle: (Math.PI * 2 * i) / count,
      start: performance.now(),
    }));

    sparks.current.push(...newSparks);
  };

  return (
    <div className="relative w-full h-full" onClick={onClick}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-9999" />
      {children}
    </div>
  );
};

export default ClickSpark;
