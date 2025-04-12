'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Level1() {
  const router = useRouter();
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [levelCompleted, setLevelCompleted] = useState(true);


  return (
    <main className="relative min-h-screen bg-[#75808b]  overflow-hidden">
      {/* Room Background */}
      {/* Game Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <div className="flex flex-col items-center gap-4">
          <div className="text-white text-xl font-bold w-1/2">Your name is Earthy, and you are over 4.54 billion years old. You just woke up out of your bed in Dallas, Texas. Your room is really dark and you need to wake up. Do you...</div>
          <div className="flex flex-row gap-4">
            <div className="text-white border border-black text-xl font-bold w-1/2">Turn on your incandecent light bulb</div>
            <div className="text-white border border-black text-xl font-bold w-1/2">Open your window and let the sunlight in</div>

          </div>

       
        <div className={`flex flex-row ${questionAnswered ? '' : 'hidden'} gap-4`}>
          <div className="text-white border border-black text-xl font-bold w-1/2">Turn on your incandecent light bulb</div>
          <div className="text-white border border-black text-xl font-bold w-1/2">Open your window and let the sunlight in</div>
        </div>
        <button className={`flex flex-row    gap-4`} onClick={() => router.push('/game/level2')}>Next</button>
        </div>
      </div>
      

      <div className="absolute inset-0 bg-[#34495E] mx-auto max-w-4xl h-full z-10">
        {/* Window */}
        <div className="absolute top-12 right-12 w-80 h-64">
          {/* Window Frame */}
          <div className="absolute inset-0 bg-[#95A5A6] rounded-lg p-3">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
              {/* Window Panes */}
              <div className="bg-[#87CEEB] rounded-lg shadow-inner"></div>
              <div className="bg-[#87CEEB] rounded-lg shadow-inner"></div>
              <div className="bg-[#87CEEB] rounded-lg shadow-inner"></div>
              <div className="bg-[#87CEEB] rounded-lg shadow-inner"></div>
            </div>
            {/* Window Cross Frames */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-[#95A5A6] transform -translate-y-1/2"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-[#95A5A6] transform -translate-x-1/2"></div>
          </div>
          {/* Window Frame Border */}
          <div className="absolute -left-2 -right-2 -top-2 h-2 bg-[#7F8C8D] rounded-t-lg"></div>
        </div>

        {/* Bed */}
        <div className="absolute bottom-32 left-32">
          {/* Bed Frame */}
          <div className="relative w-64 h-40 bg-[#8B4513] rounded-lg">
            {/* Mattress */}
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-[#ECF0F1] rounded">
              {/* Pillow */}
              <div className="absolute top-2 left-4 w-20 h-12 bg-white rounded-lg transform -rotate-2"></div>
              {/* Blanket */}
              <div className="absolute top-8 left-0 right-0 bottom-0 bg-[#2D8B84] rounded">
                {/* Blanket Fold */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-[#247870] rounded"></div>
              </div>
            </div>
          </div>
          {/* Bed Legs */}
          <div className="absolute -bottom-4 left-4 w-4 h-4 bg-[#6D4C41] rounded"></div>
          <div className="absolute -bottom-4 right-4 w-4 h-4 bg-[#6D4C41] rounded"></div>
        </div>

        {/* Earthy in Bed */}
        <div className="absolute bottom-52 left-48">
          {/* Head (Earth) */}
          <div className="relative w-24 h-24 bg-[#5BC0DE] rounded-full border-2 border-black">
            {/* Continents */}
            <div className="absolute top-3 left-4 w-8 h-6 bg-[#4CAF50] rounded-full transform rotate-12"></div>
            <div className="absolute top-8 right-3 w-10 h-8 bg-[#4CAF50] rounded-full"></div>
            <div className="absolute bottom-4 left-6 w-12 h-6 bg-[#4CAF50] rounded-full transform -rotate-6"></div>
            {/* Sleepy Face */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-8">
              {/* Closed Eyes */}
              <div className="absolute top-2 left-1 w-2 h-0.5 bg-black rounded-full"></div>
              <div className="absolute top-2 right-1 w-2 h-0.5 bg-black rounded-full"></div>
              {/* Sleepy Smile */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-2">
                <div className="w-full h-full border-b-2 border-black rounded-b-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bedside Table */}
        <div className="absolute bottom-32 left-[22rem]">
          {/* Table Top */}
          <div className="relative w-24 h-24 bg-[#8B4513] rounded-t-lg">
            {/* Alarm Clock */}
            <div className="absolute top-2 left-4 w-16 h-12 bg-[#E74C3C] rounded">
              <div className="absolute top-2 left-2 right-2 bottom-2 bg-[#ECF0F1] rounded">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold">
                  7:00
                </div>
              </div>
            </div>
          </div>
          {/* Table Leg */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-36 bg-[#6D4C41] rounded"></div>
        </div>

        {/* Rug */}
        <div className="absolute bottom-16 left-24 w-80 h-32 bg-[#E67E22] rounded-full opacity-50"></div>
      </div>
    </main>
  );
} 