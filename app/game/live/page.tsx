'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function LivePage() {
  const router = useRouter();

  useEffect(() => {
    const audio = new Audio('/sounds/live.mp3');
    audio.play();
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#2C3E50] to-[#34495E]">
      <div className="absolute inset-0 flex justify-center items-center w-full h-full">
        <svg viewBox="0 0 600 400" className="w-full h-full">
          {/* Background */}
          <rect width="600" height="400" fill="#000" />
          
          {/* Stars */}
          <g>
            {Array.from({ length: 50 }).map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 600}
                cy={Math.random() * 400}
                r={Math.random() * 1.5}
                fill="#fff"
              />
            ))}
          </g>

          {/* Dancing Planets */}
          {/* Sun */}
          <g>
            <circle cx="100" cy="100" r="30" fill="#ffd700" />
            <g fill="#000">
              <circle cx="85" cy="95" r="4" />
              <circle cx="115" cy="95" r="4" />
              <path d="M90 115 Q100 125 110 115" fill="none" stroke="#000" strokeWidth="2" />
            </g>
          </g>

          {/* Moon */}
          <g>
            <circle cx="500" cy="100" r="20" fill="#d3d3d3" />
            <g fill="#000">
              <circle cx="490" cy="95" r="3" />
              <circle cx="510" cy="95" r="3" />
              <path d="M495 110 Q500 115 505 110" fill="none" stroke="#000" strokeWidth="2" />
            </g>
          </g>

          {/* Mars */}
          <g>
            <circle cx="150" cy="300" r="25" fill="#ff4500" />
            <g fill="#000">
              <circle cx="140" cy="295" r="3" />
              <circle cx="160" cy="295" r="3" />
              <path d="M145 310 Q150 315 155 310" fill="none" stroke="#000" strokeWidth="2" />
            </g>
          </g>

          {/* Saturn */}
          <g>
            <circle cx="450" cy="300" r="25" fill="#ffa500" />
            <ellipse cx="450" cy="300" rx="35" ry="10" fill="none" stroke="#ffa500" strokeWidth="3" />
            <g fill="#000">
              <circle cx="440" cy="295" r="3" />
              <circle cx="460" cy="295" r="3" />
              <path d="M445 310 Q450 315 455 310" fill="none" stroke="#000" strokeWidth="2" />
            </g>
          </g>

          {/* Earthy (happy and healthy) */}
          <circle cx="300" cy="200" r="80" fill="#5BC0DE" />
          
          {/* Landmasses (healthy) */}
          <path d="M280 160 Q260 140 290 130 Q320 140 310 160 Z" fill="#4CAF50" />
          <path d="M320 210 Q340 230 310 240 Q290 230 300 210 Z" fill="#4CAF50" />
          <path d="M260 190 Q250 180 260 170 Q270 180 265 190 Z" fill="#4CAF50" />
          <path d="M330 170 Q345 160 340 150 Q325 155 328 170 Z" fill="#4CAF50" />

          {/* Normal happy eyes */}
          <g fill="#000">
            <circle cx="270" cy="190" r="6" />
            <circle cx="330" cy="190" r="6" />
          </g>

          {/* Big smile */}
          <path d="M285 220 Q300 240 315 220" fill="none" stroke="#000" strokeWidth="3" />

          {/* Celebration Text */}
          <text x="300" y="50" fontSize="24" fill="#fff" fontFamily="Arial" textAnchor="middle" fontWeight="bold">
            CONGRATULATIONS!
          </text>
          <text x="300" y="80" fontSize="16" fill="#fff" fontFamily="Arial" textAnchor="middle">
            You helped Earthy survive the climate crisis!
          </text>

          {/* Play Again Button */}
          <g className="cursor-pointer hover:opacity-80" onClick={() => router.push('/game/level1')}>
            <rect x="250" y="350" width="100" height="40" rx="5" fill="#2D8B84" />
            <text x="300" y="375" fontSize="16" fill="#fff" fontFamily="Arial" textAnchor="middle">
              Play Again
            </text>
          </g>
        </svg>
      </div>
    </main>
  );
}
