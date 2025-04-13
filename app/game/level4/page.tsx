'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Level4() {
    const router = useRouter();
    const [BadQuestionAnswered, setBadQuestionAnswered] = useState(false);
    const [GoodQuestionAnswered, setGoodQuestionAnswered] = useState(false);

    return (
        <main className="relative min-h-screen bg-gradient-to-b from-[#D6EAF8] to-[#AED6F1] flex items-center justify-center overflow-hidden">
            {/* Grocery Store Background */}
            <div className="absolute inset-0">
                
                {/* Aisles */}
                <div className="absolute top-28 left-20 w-28 h-80 bg-[#f9f9f9] border border-gray-400 rounded-md shadow-md flex flex-col items-center gap-2 p-2">
                    <div className="w-8 h-8 bg-red-400 rounded-full"></div>
                    <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>
                </div>
                <div className="absolute top-28 left-56 w-28 h-80 bg-[#f9f9f9] border border-gray-400 rounded-md shadow-md flex flex-col items-center gap-2 p-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <div className="absolute top-28 right-56 w-28 h-80 bg-[#f9f9f9] border border-gray-400 rounded-md shadow-md flex flex-col items-center gap-2 p-2">
                    <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                </div>
                <div className="absolute top-28 right-20 w-28 h-80 bg-[#f9f9f9] border border-gray-400 rounded-md shadow-md flex flex-col items-center gap-2 p-2">
                    <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                </div>


                {/* Checkout Sign */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-96 h-24 bg-[#e1e1e1] border-b-4 border-[#b0b0b0] text-center flex items-center justify-center text-2xl font-bold text-gray-700 shadow">
                    Grocery Checkout
                </div>

                {/* Earthy at Checkout */}
                <div className="absolute bottom-32 left-[45%]">
                    <div className="relative w-24 h-24 bg-[#5BC0DE] rounded-full border-2 border-black">
                        <div className="absolute top-3 left-4 w-8 h-6 bg-[#4CAF50] rounded-full rotate-12"></div>
                        <div className="absolute top-8 right-3 w-10 h-8 bg-[#4CAF50] rounded-full"></div>
                        <div className="absolute bottom-4 left-6 w-12 h-6 bg-[#4CAF50] rounded-full -rotate-6"></div>
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-8">
                            <div className="absolute top-2 left-1 w-2 h-2 bg-black rounded-full"></div>
                            <div className="absolute top-2 right-1 w-2 h-2 bg-black rounded-full"></div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-2">
                                <div className="w-full h-full border-b-2 border-black rounded-b-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cashier */}
                <div className="absolute bottom-35 left-[65%]">
                    {/* Head */}
                    <div className="w-20 h-20 bg-[#f5cba7] rounded-full border-2 border-black"></div>
                    {/* Body */}
                    <div className="w-24 h-36 bg-[#34495E] rounded-xl mt-2"></div>
                </div>
            </div>

            {/* Game Content */}
            <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-4 z-20">
                <div className="text-white text-xl font-bold w-3/4 max-w-md text-center bg-black/60 p-4 rounded-lg">
                    Earthy is finishing up his grocery shopping. Should he
                </div>

                <div className="flex flex-row gap-4">
                    <button
                        className={`bg-[#2D8B84] hover:bg-[#1e5f5b] text-white text-lg font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${BadQuestionAnswered ? 'opacity-0' : 'opacity-100'}`}
                        onClick={() => setBadQuestionAnswered(true)}
                    >
                        Bag his groceries in plastic bags
                    </button>
                    <button
                        className={`bg-[#2D8B84] hover:bg-[#1e5f5b] text-white text-lg font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${GoodQuestionAnswered ? 'opacity-0' : 'opacity-100'}`}
                        onClick={() => setGoodQuestionAnswered(true)}
                    >
                        Use his reusable bags
                    </button>
                </div>

                <div className="flex flex-row gap-4">
                    <div className={`text-white text-xl ${BadQuestionAnswered ? 'opacity-100' : 'opacity-0'} font-bold w-1/2 bg-black/60 p-4 rounded-lg`}>
                        Plastic bags take hundreds of years to break down and often end up polluting oceans and harming wildlife.
                    </div>
                    <div className={`text-white text-xl ${GoodQuestionAnswered ? 'opacity-100' : 'opacity-0'} font-bold w-1/2 bg-black/60 p-4 rounded-lg`}>
                        Using reusable bags significantly benefits the environment by reducing plastic waste, minimizing litter, and conserving resources!

                    </div>
                </div>

                <div className={`flex flex-row gap-4 ${BadQuestionAnswered || GoodQuestionAnswered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='text-white text-xl font-bold bg-black/60 p-4 rounded-lg'>
                        Fun fact: Over 100,000 marine animals die every year from plastic bag pollution.
                    </div>
                </div>

                <button
                    className={`bg-[#2D8B84] hover:bg-[#1e5f5b] text-white text-lg font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${BadQuestionAnswered || GoodQuestionAnswered ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => router.push('/game/decision')}
                >
                    Next
                </button>
            </div>
        </main>
    );
}