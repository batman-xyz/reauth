"use client";

import { useEffect, useRef, useState } from "react";

export default function Matrix() {
  const ctx = useRef<CanvasRenderingContext2D>();
  const canvas = useRef<HTMLCanvasElement>();
  let letters: string | string[] =
    "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
  letters = letters.split("");
  let drops: number[] = [];
  const fontSize = 10;

  useEffect(() => {
    canvas.current = document.getElementById("matrix") as HTMLCanvasElement;
    ctx.current = canvas!.current!.getContext("2d")!;
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
    const columns = canvas.current.width / fontSize;
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }
  }, []);

  function draw() {
    if (!ctx.current) return;
    ctx.current.fillStyle = "rgba(0, 0, 0, .1)";
    ctx.current.fillRect(0, 0, canvas.current!.width, canvas.current!.height);
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];
      ctx.current.fillStyle = "#121212";
      ctx.current.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.current!.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
    }
  }

  useEffect(() => {
    setInterval(draw, 33);
  }, []);

  return <canvas id="matrix" className="absolute -z-10 left-0 m-0 block p-0" />;
}
