"use client";

import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";

export function ConfettiSideCannons() {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="relative">
      <Button onClick={handleClick}>Trigger Side Cannons</Button>
    </div>
  );
}

// Enhanced confetti function for popup use
export const triggerSideCannonConfetti = () => {
  const colors = ["#ff6b6b", "#fbbf24", "#10b981", "#3b82f6", "#8b5cf6"];
  
  // Initial center burst when popup opens
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: colors,
    startVelocity: 45,
  });

  // Continuous side cannons for 3 seconds
  const end = Date.now() + 3 * 1000;
  const frame = () => {
    if (Date.now() > end) return;

    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });

    requestAnimationFrame(frame);
  }
  frame();

  // Additional celebration bursts at intervals
  setTimeout(() => {
    confetti({
      particleCount: 60,
      angle: 90,
      spread: 45,
      origin: { x: 0.5, y: 0.3 },
      colors: colors,
    });
  }, 800);

  setTimeout(() => {
    confetti({
      particleCount: 40,
      angle: 45,
      spread: 35,
      origin: { x: 0.2, y: 0.7 },
      colors: colors,
    });
    confetti({
      particleCount: 40,
      angle: 135,
      spread: 35,
      origin: { x: 0.8, y: 0.7 },
      colors: colors,
    });
  }, 1500);
};
