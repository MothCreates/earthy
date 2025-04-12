'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DecisionPage() {
  const router = useRouter();
  const [answerSelected, setAnswerSelected] = useState(false);
  const [yesSelected, setYesSelected] = useState(false);
  const [noSelected, setNoSelected] = useState(false);

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#2C3E50] to-[#34495E]">
      <div className="absolute inset-0 flex justify-center items-center w-full h-full">
        <svg viewBox="0 0 600 400" className="w-full h-full">
          {/* Space Background */}
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
                className="animate-pulse"
                style={{ animationDelay: `${Math.random() * 2}s` }}
              />
            ))}
          </g>

          {/* Earthy (happy in space) */}
          <circle cx="300" cy="200" r="80" fill="#5BC0DE" />
          
          {/* Landmasses (healthy) */}
          <path d="M280 160 Q260 140 290 130 Q320 140 310 160 Z" fill="#4CAF50" />
          <path d="M320 210 Q340 230 310 240 Q290 230 300 210 Z" fill="#4CAF50" />
          <path d="M260 190 Q250 180 260 170 Q270 180 265 190 Z" fill="#4CAF50" />
          <path d="M330 170 Q345 160 340 150 Q325 155 328 170 Z" fill="#4CAF50" />

          {/* Happy face */}
          <circle cx="280" cy="195" r="6" fill="#000" />
          <circle cx="320" cy="195" r="6" fill="#000" />
          <path d="M285 220 Q300 240 315 220" fill="none" stroke="#000" strokeWidth="3" />

          {/* Question Text */}
          <text x="300" y="50" fontSize="24" fill="#fff" fontFamily="Arial" textAnchor="middle" fontWeight="bold">
            Are you going to start making sustainable choices?
          </text>

          {/* Yes Button */}
          <g className="cursor-pointer hover:opacity-80" onClick={() => {
            setAnswerSelected(true);
            setYesSelected(true);
            router.push('/game/live');
          }}>
            <rect x="150" y="350" width="100" height="40" rx="5" fill="#2D8B84" />
            <text x="200" y="375" fontSize="16" fill="#fff" fontFamily="Arial" textAnchor="middle">
              Yes
            </text>
          </g>

          {/* No Button */}
          <g className="cursor-pointer hover:opacity-80" onClick={() => {
            setAnswerSelected(true);
            setNoSelected(true);
            router.push('/game/end');
          }}>
            <rect x="350" y="350" width="100" height="40" rx="5" fill="#2D8B84" />
            <text x="400" y="375" fontSize="16" fill="#fff" fontFamily="Arial" textAnchor="middle">
              No
            </text>
          </g>

          {/* Response Text */}
          <text 
            x="300" 
            y="320" 
            fontSize="16" 
            fill="#fff" 
            fontFamily="Arial" 
            textAnchor="middle"
            className={`transition-opacity duration-500 ${answerSelected ? 'opacity-100' : 'opacity-0'}`}
          >
            {answerSelected ? "Great choice! Let's begin your journey." : ''}
          </text>
        </svg>
      </div>
    </main>
  );
}
