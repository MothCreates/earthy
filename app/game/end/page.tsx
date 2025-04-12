'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function EndPage() {
  const router = useRouter();

  useEffect(() => {
    const audio = new Audio('/sounds/end.mp3');
    audio.play();
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-black to-[#2C3E50]">
      <div className="absolute inset-0 flex justify-center items-center w-full h-full">
        <svg viewBox="0 0 600 400" className="w-full h-full">
          {/* Background */}
          <rect width="600" height="400" fill="#1B1B1B" />

          {/* Intense Smoke */}
          <g className="animate-pulse">
            <ellipse cx="300" cy="100" rx="60" ry="30" fill="#444" opacity="0.5" />
            <ellipse cx="300" cy="80" rx="50" ry="20" fill="#222" opacity="0.3" />
            <ellipse cx="300" cy="60" rx="40" ry="15" fill="#111" opacity="0.2" />
          </g>

          {/* Darker Flames */}
          <g className="animate-pulse">
            <path d="M280 200 Q300 140 320 200 Q340 260 320 310 Q300 360 280 310 Z" fill="#b30000" />
            <path d="M260 220 Q280 160 300 220 Q320 280 300 330 Q280 380 260 330 Z" fill="#e60000" />
            <path d="M300 220 Q320 160 340 220 Q360 280 340 330 Q320 380 300 330 Z" fill="#ff1a1a" />
          </g>

          {/* Earthy (burnt and cracked) */}
          <circle cx="300" cy="200" r="80" fill="#222" stroke="#ff0000" strokeWidth="4" />

          {/* Cracks */}
          <g stroke="#660000" strokeWidth="3">
            <line x1="280" y1="140" x2="320" y2="260" />
            <line x1="300" y1="130" x2="300" y2="270" />
            <line x1="260" y1="180" x2="340" y2="220" />
          </g>

          {/* Blood-like Lava */}
          <path d="M295 240 Q300 250 305 240 Q310 230 312 260 Q310 270 295 265 Q290 250 295 240 Z" fill="#8B0000" />
          <path d="M280 260 Q285 275 290 260 Q295 245 295 280 Q285 290 280 275 Z" fill="#B22222" />

          {/* Dead face */}
          <g stroke="#cc0000" strokeWidth="3">
            <line x1="265" y1="185" x2="275" y2="195" />
            <line x1="275" y1="185" x2="265" y2="195" />
            <line x1="305" y1="185" x2="315" y2="195" />
            <line x1="315" y1="185" x2="305" y2="195" />
            <path d="M285 220 Q300 200 315 220" fill="none" />
          </g>

          {/* Blood drops */}
          <circle cx="290" cy="310" r="5" fill="#8B0000" />
          <circle cx="310" cy="320" r="4" fill="#8B0000" />
          <circle cx="300" cy="330" r="6" fill="#8B0000" />

          {/* Game Over Text */}
          <text x="300" y="50" fontSize="28" fill="#ff4d4d" fontFamily="Arial" textAnchor="middle" fontWeight="bold">
            GAME OVER
          </text>
          <text x="300" y="80" fontSize="16" fill="#ffb3b3" fontFamily="Arial" textAnchor="middle">
            Earthy bled out and burned in the climate catastrophe
          </text>

          {/* Restart Button */}
          <g className="cursor-pointer hover:opacity-80" onClick={() => router.push('/game/level1')}>
            <rect x="250" y="350" width="100" height="40" rx="5" fill="#2D8B84" />
            <text x="300" y="375" fontSize="16" fill="#fff" fontFamily="Arial" textAnchor="middle">
              Try Again
            </text>
          </g>
        </svg>
      </div>
    </main>
  );
}