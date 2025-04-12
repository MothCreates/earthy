'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Level1() {
  const router = useRouter();
  const [BadQuestionAnswered, setBadQuestionAnswered] = useState(false);
  const [GoodQuestionAnswered, setGoodQuestionAnswered] = useState(false);
  const [levelCompleted, setLevelCompleted] = useState(true);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#2C3E50] to-[#34495E] flex items-center justify-center overflow-hidden">
      {/* Bedroom Wall Background */}
      <div className="absolute inset-0 bg-[#3d566e]">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-[#2C3E50]" />
        <div className="absolute top-1/3 left-0 w-full h-1 bg-[#ffffff66]" />
        <div className="absolute top-1/3 left-0 w-full h-2/3 bg-[#34495E]" />
      </div>

      {/* Floor */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-[#2F4F4F]" />

      {/* Bedroom Scene */}
      <div className="absolute inset-0">
        {/* Bed */}
        <div className="absolute bottom-32 left-32">
          <div className="relative w-80 h-48 bg-[#8B4513] rounded-lg">
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-[#ECF0F1] rounded">
              <div className="absolute top-2 left-4 w-24 h-14 bg-white rounded-lg transform -rotate-2"></div>
              <div className="absolute top-10 left-0 right-0 bottom-0 bg-[#2D8B84] rounded">
                <div className="absolute top-0 left-0 right-0 h-8 bg-[#247870] rounded"></div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 left-4 w-4 h-4 bg-[#6D4C41] rounded"></div>
          <div className="absolute -bottom-4 right-4 w-4 h-4 bg-[#6D4C41] rounded"></div>
        </div>

        {/* Nightstand */}
        <div className="absolute bottom-32 left-16">
          <div className="relative w-16 h-24 bg-[#8B4513] rounded-lg">
            <div className="absolute top-2 left-2 right-2 bottom-2 bg-[#ECF0F1] rounded">
              <div className="absolute top-1 left-1 right-1 h-2 bg-[#2D8B84] rounded"></div>
            </div>
          </div>
          <div className="absolute -bottom-4 left-4 w-4 h-4 bg-[#6D4C41] rounded"></div>
          <div className="absolute -bottom-4 right-4 w-4 h-4 bg-[#6D4C41] rounded"></div>
        </div>

        {/* Lamp */}
        <div className="absolute bottom-52 left-20 w-6 h-16 bg-[#8B4513] rounded-t-md">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-yellow-300 rounded-full shadow-lg"></div>
        </div>

        {/* Earthy in Bed */}
        <div className="absolute bottom-52 left-56">
          <div className="relative w-24 h-24 bg-[#5BC0DE] rounded-full border-2 border-black">
            <div className="absolute top-3 left-4 w-8 h-6 bg-[#4CAF50] rounded-full rotate-12"></div>
            <div className="absolute top-8 right-3 w-10 h-8 bg-[#4CAF50] rounded-full"></div>
            <div className="absolute bottom-4 left-6 w-12 h-6 bg-[#4CAF50] rounded-full -rotate-6"></div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-8">
              <div className="absolute top-2 left-1 w-2 h-0.5 bg-black rounded-full"></div>
              <div className="absolute top-2 right-1 w-2 h-0.5 bg-black rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-2">
                <div className="w-full h-full border-b-2 border-black rounded-b-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Window */}
        <div className="absolute top-12 right-12 w-80 h-64">
          <div className="absolute inset-0 bg-[#95A5A6] rounded-lg p-3">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
              <div className="bg-[#87CEEB] rounded-lg shadow-inner"></div>
              <div className="bg-[#87CEEB] rounded-lg shadow-inner"></div>
              <div className="bg-[#87CEEB] rounded-lg shadow-inner"></div>
              <div className="bg-[#87CEEB] rounded-lg shadow-inner"></div>
            </div>
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-[#95A5A6] transform -translate-y-1/2"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-[#95A5A6] transform -translate-x-1/2"></div>
          </div>
          <div className="absolute -left-2 -right-2 -top-2 h-2 bg-[#7F8C8D] rounded-t-lg"></div>
        </div>

        {/* TV and Stand */}
        <div className="absolute bottom-32 right-32">
          {/* TV Stand */}
          <div className="relative w-64 h-40 bg-[#8B4513] rounded-lg">
            <div className="absolute top-2 left-2 right-2 bottom-2 bg-[#ECF0F1] rounded">
              <div className="absolute top-1 left-1 right-1 h-2 bg-[#2D8B84] rounded"></div>
            </div>
          </div>
          <div className="absolute -bottom-4 left-4 w-4 h-4 bg-[#6D4C41] rounded"></div>
          <div className="absolute -bottom-4 right-4 w-4 h-4 bg-[#6D4C41] rounded"></div>

          {/* TV */}
          <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-[#222] rounded-lg">
            <div className="absolute inset-1 bg-[#1a1a1a] rounded">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-[#333] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Posters */}
        <div className="absolute top-32 left-1/4 transform -translate-x-1/2 w-32 h-24 bg-[#222] border-4 border-white rounded-lg flex items-center justify-center text-white font-bold text-sm">
          RECYCLE
        </div>
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-40 h-24 bg-[#222] border-4 border-white rounded-lg flex items-center justify-center text-white font-bold text-sm">
          SAVE ENERGY
        </div>
        <div className="absolute top-32 left-3/4 transform -translate-x-1/2 w-32 h-24 bg-[#222] border-4 border-white rounded-lg flex items-center justify-center text-white font-bold text-sm">
          GO GREEN
        </div>
      </div>

      {/* Game Content */}
      <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-4 z-20">
        <div className="text-white text-xl font-bold w-3/4 max-w-md text-center bg-black/60 p-4 rounded-lg">
          Your name is Earthy, and you are over 4.54 billion years old. You just woke up out of your bed in Dallas, Texas. Your room is really dark and you need to wake up. Do you...
        </div>

        <div className="flex flex-row gap-4">
          <button
            className={`bg-[#2D8B84] hover:bg-[#1e5f5b] text-white text-lg font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${BadQuestionAnswered ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => setBadQuestionAnswered(true)}
          >
            Turn on your incandescent light bulb
          </button>
          <button
            className={`bg-[#2D8B84] hover:bg-[#1e5f5b] text-white text-lg font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${GoodQuestionAnswered ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => setGoodQuestionAnswered(true)}
          >
            Open your window and let the sunlight in
          </button>
        </div>

        <div className="flex flex-row gap-4">
          <div className={`text-white text-xl ${BadQuestionAnswered ? 'opacity-100' : 'opacity-0'} font-bold w-1/2 bg-black/60 p-4 rounded-lg`}>
          Good answer: Using natural light in buildings and homes significantly reduces energy consumption and lowers carbon emissions, benefiting the environment.
          </div>
          <div className={`text-white text-xl ${GoodQuestionAnswered ? 'opacity-100' : 'opacity-0'} font-bold w-1/2 bg-black/60 p-4 rounded-lg`}>
          Bad answer: Excess light pollution increases carbon dioxide emissions which contributes to climate change and disrupts ecosystems.
          </div>
        </div>

        <div className={`flex flex-row gap-4 ${BadQuestionAnswered || GoodQuestionAnswered ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-white text-xl font-bold bg-black/60 p-4 rounded-lg'>
          Fun fact: 6.5 million people admit to leaving the lights on when they aren't in the room
          </div>
        </div>

        <button
          className={`bg-[#2D8B84] hover:bg-[#1e5f5b] text-white text-lg font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${BadQuestionAnswered || GoodQuestionAnswered ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => router.push('/game/level2')}
        >
          Next
        </button>
      </div>
    </main>
  );
}