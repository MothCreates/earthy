'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const StartButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/game/level1")} className="bg-[#F4A460] hover:bg-[#E8945A] text-white text-2xl font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
      Get Started
    </button>
  );
};

export default StartButton;