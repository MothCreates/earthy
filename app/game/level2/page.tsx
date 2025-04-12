'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Level2() {
  const router = useRouter();
  const [BadQuestionAnswered, setBadQuestionAnswered] = useState(false);
  const [GoodQuestionAnswered, setGoodQuestionAnswered] = useState(false);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#2C3E50] to-[#34495E] flex items-center justify-center overflow-hidden">
      {/* Tiled Bathroom Background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-px bg-[#2C3E50] opacity-20">
        {[...Array(96)].map((_, i) => (
          <div key={i} className="bg-[#95A5A6] border border-white/10"></div>
        ))}
      </div>

      {/* Sink and Mirror Area */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        {/* Mirror */}
        <div className="relative w-64 h-80 bg-[#B3B3B3] rounded-lg shadow-inner mb-4">
          <div className="absolute inset-2 bg-[#E0E0E0] rounded-lg border-4 border-[#95A5A6]"></div>
        </div>

        {/* Sink */}
        <div className="relative w-80 h-24 bg-[#ECF0F1] rounded-t-lg shadow-md">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-40 h-16 bg-white rounded-lg shadow-inner"></div>
          {/* Faucet */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-[#95A5A6] rounded-lg"></div>
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-[#95A5A6] rounded-sm"></div>
        </div>

        {/* Sink Support */}
        <div className="w-72 h-8 bg-[#BDC3C7] rounded-b-lg mt-1"></div>
      </div>

      {/* Earthy Character Standing */}
      <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        {/* Head */}
        <div className="relative w-32 h-32 bg-[#5BC0DE] rounded-full border-4 border-black shadow-lg">
          {/* Continents */}
          <div className="absolute top-4 left-5 w-10 h-8 bg-[#4CAF50] rounded-full"></div>
          <div className="absolute top-12 right-6 w-14 h-10 bg-[#4CAF50] rounded-full"></div>

          {/* Eyes (open) */}
          <div className="absolute top-10 left-1/3 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-10 right-1/3 w-2 h-2 bg-black rounded-full"></div>

          {/* Smile */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-black rounded-full"></div>
        </div>

        {/* Body (T-Shirt Style) */}
        <div className="relative mt-1 w-28 h-36 bg-[#2D8B84] rounded-xl shadow-md flex flex-col items-center">
          {/* Neckline */}
          <div className="absolute top-0 w-12 h-4 bg-[#247870] rounded-b-full"></div>
          {/* Arms */}
          <div className="absolute left-0 top-8 w-4 h-16 bg-[#2D8B84] rounded-l-md"></div>
          <div className="absolute right-0 top-8 w-4 h-16 bg-[#2D8B84] rounded-r-md"></div>
          {/* Legs */}
          <div className="absolute bottom-0 left-1/4 w-5 h-12 bg-[#34495E] rounded-md"></div>
          <div className="absolute bottom-0 right-1/4 w-5 h-12 bg-[#34495E] rounded-md"></div>
        </div>
      </div>

      {/* Game Content */}
      <div className="absolute top-1/4 left-0 right-0 flex flex-col items-center gap-4 z-20">
        <div className="text-white text-xl font-bold w-3/4 max-w-md text-center bg-black/60 p-4 rounded-lg">
          After a long night's rest, it's time for Earthy to brush his teeth. Should he...
        </div>
        
        <div className="flex flex-row gap-4">
          <button 
            className={`bg-[#2D8B84] hover:bg-[#1e5f5b] text-white text-lg font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${BadQuestionAnswered ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => setBadQuestionAnswered(true)}
          >
            leave the water running while brushing his teeth?
          </button>
          <button 
            className={`bg-[#2D8B84] hover:bg-[#1e5f5b] text-white text-lg font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${GoodQuestionAnswered ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => setGoodQuestionAnswered(true)}
          >
             turn off the faucet until it’s time to rinse?
          </button>
        </div>

        {/* Prompts */}
        <div className="flex flex-row gap-4">
          <div className={`text-white text-xl ${BadQuestionAnswered ? 'opacity-100' : 'opacity-0'} font-bold w-1/2 bg-black/60 p-4 rounded-lg`}>
          Good answer: Just by turning off the faucet while you brush your teeth in the morning and before bedtime, you can save up to 8 gallons of water </div>
          <div className={`text-white text-xl ${GoodQuestionAnswered ? 'opacity-100' : 'opacity-0'} font-bold w-1/2 bg-black/60 p-4 rounded-lg`}>
          Bad answer: excess water use depletes the water in rivers, bays, lakes, estuaries, and reservoirs causing increased levels of pollutants and creating dead zones that reduce plant and animal diversity</div>
        </div>

        {/* Fun Fact */}
        <div className={`flex flex-row gap-4 ${BadQuestionAnswered || GoodQuestionAnswered ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-white text-xl font-bold bg-black/60 p-4 rounded-lg'>
          Fun fact: You use about 8 gallons of water if you leave the water running while brushing your teeth.</div>
        </div>

        {/* Next Button */}
        <button 
          className={`bg-[#2D8B84] hover:bg-[#1e5f5b] text-white text-lg font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${BadQuestionAnswered || GoodQuestionAnswered ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => router.push('/game/level3')}
        >
          Next
        </button>
      </div>
    </main>
  );
}