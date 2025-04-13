'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function EndPage() {
  const router = useRouter();

  useEffect(() => {
    let audio: HTMLAudioElement | null = null;
    
   audio = new Audio('../public/end.mp3');
   audio.volume = 0.5;
   audio.play();

    // Cleanup function
   
    
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#2C3E50] to-[#34495E]">
      <div className="absolute inset-0 flex justify-center items-center w-full h-full">
        <svg viewBox="0 0 600 400" className="w-full h-full">
          {/* Background */}
          <rect width="600" height="400" fill="#2C3E50" />
          
          {/* Smoke */}
          <g className="animate-pulse">
            <ellipse cx="300" cy="100" rx="50" ry="30" fill="#666" opacity="0.3" />
            <ellipse cx="300" cy="80" rx="40" ry="20" fill="#666" opacity="0.2" />
            <ellipse cx="300" cy="60" rx="30" ry="15" fill="#666" opacity="0.1" />
          </g>

          {/* Flames */}
          <g className="animate-pulse">
            <path d="M280 200 Q300 150 320 200 Q340 250 320 300 Q300 350 280 300 Z" fill="#ff4500" />
            <path d="M260 220 Q280 170 300 220 Q320 270 300 320 Q280 370 260 320 Z" fill="#ff8c00" />
            <path d="M300 220 Q320 170 340 220 Q360 270 340 320 Q320 370 300 320 Z" fill="#ff8c00" />
          </g>

          {/* Earthy (burning/dead) */}
          <circle cx="300" cy="200" r="80" fill="#333" />
          
          {/* Landmasses (charred) */}
          <path d="M280 160 Q260 140 290 130 Q320 140 310 160 Z" fill="#222" />
          <path d="M320 210 Q340 230 310 240 Q290 230 300 210 Z" fill="#222" />
          <path d="M260 190 Q250 180 260 170 Q270 180 265 190 Z" fill="#222" />
          <path d="M330 170 Q345 160 340 150 Q325 155 328 170 Z" fill="#222" />

          {/* Dead face with X eyes and frown */}
          <g stroke="#666" strokeWidth="3">
            {/* X eyes */}
            <line x1="265" y1="185" x2="275" y2="195" />
            <line x1="275" y1="185" x2="265" y2="195" />
            <line x1="305" y1="185" x2="315" y2="195" />
            <line x1="315" y1="185" x2="305" y2="195" />
            {/* Frown */}
            <path d="M285 220 Q300 200 315 220" fill="none" />
          </g>

          {/* Game Over Text */}
          <text x="300" y="50" fontSize="24" fill="#fff" fontFamily="Arial" textAnchor="middle" fontWeight="bold">
            GAME OVER
          </text>
          <text x="300" y="80" fontSize="16" fill="#fff" fontFamily="Arial" textAnchor="middle">
            Earthy couldn't survive the climate crisis
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