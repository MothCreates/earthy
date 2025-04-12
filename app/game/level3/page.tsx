'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Level3() {
  const router = useRouter();
  const [BadQuestionAnswered, setBadQuestionAnswered] = useState(false);
  const [GoodQuestionAnswered, setGoodQuestionAnswered] = useState(false);

  return (
    <main className="relative min-h-screen w-full bg-[#f3e0c0]">
      <div className="absolute inset-0 flex justify-center items-center w-full h-full">
        <svg viewBox="0 0 600 400" className="w-full h-full">
          {/* Earthy character (thinking Earth) */}
          <circle cx="300" cy="200" r="80" fill="#60aefc" />

          {/* Landmasses */}
          <path d="M280 160 Q260 140 290 130 Q320 140 310 160 Z" fill="#5fa94d" />
          <path d="M320 210 Q340 230 310 240 Q290 230 300 210 Z" fill="#5fa94d" />
          <path d="M260 190 Q250 180 260 170 Q270 180 265 190 Z" fill="#5fa94d" />
          <path d="M330 170 Q345 160 340 150 Q325 155 328 170 Z" fill="#5fa94d" />

          {/* Thoughtful face */}
          <circle cx="280" cy="195" r="6" fill="#000" />
          <circle cx="320" cy="195" r="6" fill="#000" />
          <path d="M285 220 Q300 210 315 220" fill="none" stroke="#000" strokeWidth="3" />

          {/* Thought bubble */}
          <circle cx="360" cy="120" r="6" fill="#fff" />
          <circle cx="380" cy="100" r="12" fill="#fff" />
          <ellipse cx="430" cy="70" rx="60" ry="30" fill="#fff" stroke="#ccc" strokeWidth="1.5" />
          <text x="392" y="75" fontSize="12" fill="#333" fontFamily="Arial">Drive or Ride?</text>

          {/* Car (left) */}
          <rect x="80" y="270" width="100" height="40" rx="4" fill="#ff6961" />
          <circle cx="95" cy="310" r="10" fill="#333" />
          <circle cx="165" cy="310" r="10" fill="#333" />
          <text x="110" y="330" fontSize="14" fill="#444" fontFamily="Arial">Car</text>

          {/* Bike (right) */}
          <circle cx="460" cy="310" r="12" fill="#333" />
          <circle cx="510" cy="310" r="12" fill="#333" />
          <line x1="460" y1="310" x2="485" y2="270" stroke="#333" strokeWidth="3" />
          <line x1="510" y1="310" x2="485" y2="270" stroke="#333" strokeWidth="3" />
          <line x1="485" y1="270" x2="485" y2="290" stroke="#333" strokeWidth="3" />
          <text x="490" y="330" fontSize="14" fill="#444" fontFamily="Arial">Bike</text>
        </svg>
      </div>

      {/* Game Content */}
      <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-4 z-20">
        <div className="text-black text-xl font-bold w-3/4 max-w-md text-center bg-white/80 p-4 rounded-lg">
        Earthy is hungry after a long morning and is headed to the grocery store. Should he…
        </div>
        
        <div className="flex flex-row gap-4">
          <button 
            className={`bg-[#2D8B84] hover:bg-[#1e5f5b] text-white text-lg font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${BadQuestionAnswered ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => setBadQuestionAnswered(true)}
          >
            take his bike
          </button>
          <button 
            className={`bg-[#2D8B84] hover:bg-[#1e5f5b] text-white text-lg font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${GoodQuestionAnswered ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => setGoodQuestionAnswered(true)}
          >
            take his car
          </button>
        </div>

        {/* Prompts */}
        <div className="flex flex-row gap-4">
          <div className={`text-black text-xl ${BadQuestionAnswered ? 'opacity-100' : 'opacity-0'} font-bold w-1/2 bg-white/80 p-4 rounded-lg`}>
          Good answer: Cycling lowers your carbon footprint and is one of the best ways you can reduce your impact on the environment
          </div>
          <div className={`text-black text-xl ${GoodQuestionAnswered ? 'opacity-100' : 'opacity-0'} font-bold w-1/2 bg-white/80 p-4 rounded-lg`}>
          Bad answer: The transport sector burns most of the world's petroleum and is one of the largest sources of global greenhouse gas emissions.
          </div>
        </div>

        {/* Fun Fact */}
        <div className={`flex flex-row gap-4 ${BadQuestionAnswered || GoodQuestionAnswered ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-black text-xl font-bold bg-white/80 p-4 rounded-lg'>
            Fun fact: If just 10% of Americans biked to work one day a week, it would reduce carbon emissions by about 4 million tons per year.
          </div>
        </div>

        {/* Next Button */}
        <button 
          className={`bg-[#2D8B84] hover:bg-[#1e5f5b] text-white text-lg font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${BadQuestionAnswered || GoodQuestionAnswered ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => router.push('/game/level4')}
        >
          Next
        </button>
      </div>
    </main>
  );
}
