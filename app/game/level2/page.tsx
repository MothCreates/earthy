'use client';

import { useRouter } from 'next/navigation';

export default function Level2() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen bg-[#2C3E50] overflow-hidden">
      {/* Scene Container */}
      <div className="absolute inset-0 mx-auto max-w-4xl h-full bg-[#34495E]">

        {/* Tiled Background */}
        <div className="absolute inset-0 opacity-10 grid grid-rows-20">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="grid grid-cols-20">
              {[...Array(20)].map((_, j) => (
                <div key={j} className="w-10 h-10 border border-white/10"></div>
              ))}
            </div>
          ))}
        </div>

        {/* Mirror & Sink */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
          <div className="relative w-64 h-80">
            {/* Mirror */}
            <div className="absolute inset-0 bg-[#B3B3B3] rounded-lg p-2">
              <div className="w-full h-full bg-[#E0E0E0] rounded-lg shadow-inner">
                <div className="absolute inset-2 border-4 border-[#95A5A6] rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Sink */}
          <div className="relative w-80 h-24 mt-4">
            <div className="absolute inset-0 bg-[#ECF0F1] rounded-t-lg">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-40 h-16 bg-white rounded-lg shadow-inner">
                {/* Faucet */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-8 bg-[#95A5A6] rounded-lg"></div>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-[#95A5A6]" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 left-4 right-4 h-8 bg-[#BDC3C7] rounded-b-lg"></div>
          </div>
        </div>

        {/* Earthy Character */}
        <div className="absolute top-56 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          {/* Head */}
          <div className="relative w-32 h-32 bg-[#5BC0DE] rounded-full border-2 border-black">
            <div className="absolute top-4 left-6 w-10 h-8 bg-[#4CAF50] rounded-full rotate-12"></div>
            <div className="absolute top-10 right-4 w-12 h-10 bg-[#4CAF50] rounded-full"></div>
            <div className="absolute bottom-6 left-8 w-14 h-8 bg-[#4CAF50] rounded-full -rotate-6"></div>
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-16 h-10">
              <div className="absolute top-0 left-2 w-2 h-3 bg-black rounded-full"></div>
              <div className="absolute top-0 right-2 w-2 h-3 bg-black rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-[#E74C3C] rounded-full"></div>
            </div>

            {/* Toothbrush on Mouth */}
            <div className="absolute top-16 right-0 transform rotate-45">
              <div className="w-20 h-3 bg-[#3498DB] rounded-full"></div>
              <div className="absolute -top-1 right-1 w-6 h-4 bg-white rounded-sm"></div>
              <div className="absolute -top-2 right-0 w-8 h-3 bg-[#ECF0F1] rounded-full"></div>
            </div>
          </div>

          {/* Body */}
          <div className="relative mt-4 w-40 h-32 bg-[#2D8B84] rounded-2xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-[#247870] rounded-t-lg"></div>
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-[#247870] rounded-lg"></div>
          </div>
        </div>

        {/* Prompt & Buttons */}
        <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center gap-4 z-20">
          <div className="text-white text-xl font-bold w-3/4 max-w-md text-center bg-black/50 p-4 rounded-lg">
            Time to brush your teeth! How long should you brush them for?
          </div>
          <div className="flex flex-row gap-4">
            <button className="px-6 py-3 bg-[#2D8B84] text-white rounded-lg hover:bg-[#1e5f5b] transition-colors">
              30 seconds
            </button>
            <button className="px-6 py-3 bg-[#2D8B84] text-white rounded-lg hover:bg-[#1e5f5b] transition-colors">
              2 minutes
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}