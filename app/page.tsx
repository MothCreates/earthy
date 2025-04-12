import Image from "next/image";
import Title from "./components/title";
import StartButton from "./components/button/startButton";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#5BC0DE] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Clouds */}
        <div className="absolute top-10 left-20 w-24 h-12 bg-white/30 rounded-full"></div>
        <div className="absolute top-16 right-32 w-32 h-16 bg-white/30 rounded-full"></div>
        <div className="absolute top-24 left-1/2 w-28 h-14 bg-white/20 rounded-full"></div>

        {/* Hills */}
        <div className="absolute bottom-0 w-full">
          <div className="relative w-full h-[40vh]">
            {/* Back Mountains */}
            <div className="absolute bottom-0 w-full h-48 bg-[#2D692F] rounded-[100%] transform scale-x-150 translate-y-16 opacity-80"></div>
            {/* Middle Hill */}
            <div className="absolute bottom-0 w-full h-48 bg-[#3D8B40] rounded-[100%] transform scale-x-150 translate-y-8 shadow-inner"></div>
            {/* Front Hill */}
            <div className="absolute bottom-0 w-full h-64 bg-[#4CAF50] rounded-[100%] transform scale-x-150 translate-y-12 shadow-lg"></div>

            {/* Wooden Fences */}
            <div className="absolute bottom-20 left-48 right-48">
              {/* Fence Posts */}
              <div className="relative h-12 flex items-end justify-between">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-2 h-10 bg-[#8B4513] rounded-sm"></div>
                ))}
                {/* Horizontal Beams */}
                <div className="absolute left-0 right-0 h-1.5 bg-[#8B4513] rounded-full top-2"></div>
                <div className="absolute left-0 right-0 h-1.5 bg-[#8B4513] rounded-full top-6"></div>
              </div>
            </div>

            {/* House */}
            <div className="absolute bottom-32 left-32">
              {/* House Body */}
              <div className="relative w-24 h-20 bg-[#FFF5E1] rounded-sm shadow-md">
                {/* Door */}
                <div className="absolute bottom-0 left-4 w-6 h-10 bg-[#8B4513] rounded-t-lg"></div>
                {/* Window */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-[#87CEEB] rounded-sm">
                  <div className="absolute inset-0 border-2 border-white"></div>
                </div>
              </div>
              {/* Roof */}
              <div className="absolute -top-8 -left-2 w-28 h-12 bg-[#D35400] transform rotate-[-4deg]" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
            </div>

            {/* Barn Stable */}
            <div className="absolute bottom-28 left-72">
              {/* Barn Body */}
              <div className="relative w-32 h-24 bg-[#8B4513] rounded-sm shadow-lg">
                {/* Barn Door */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-[#6B3410] rounded-t-lg flex flex-col items-center">
                  {/* Door Details */}
                  <div className="absolute top-1/2 w-10 h-0.5 bg-[#8B4513]"></div>
                  <div className="absolute right-2 top-8 w-1.5 h-1.5 bg-[#FFD700] rounded-full"></div>
                </div>
                {/* Hay Window */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-[#6B3410] rounded-t-lg overflow-hidden">
                  {/* Hay */}
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#FFD700]"></div>
                </div>
              </div>
              {/* Barn Roof */}
              <div className="absolute -top-6 -left-2 w-36 h-14 bg-[#A0522D]" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
            </div>

            {/* Cow Family */}
            {/* Parent Cow 1 */}
            <div className="absolute bottom-24 right-48">
              <div className="relative">
                {/* Main Body */}
                <div className="w-16 h-10 bg-white rounded-full shadow-sm">
                  {/* Spots */}
                  <div className="absolute top-1 left-2 w-4 h-4 bg-black rounded-full"></div>
                  <div className="absolute bottom-2 right-3 w-3 h-3 bg-black rounded-full"></div>
                </div>
                {/* Head */}
                <div className="absolute -left-4 top-1 w-8 h-7 bg-white rounded-lg">
                  {/* Eyes */}
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-black rounded-full"></div>
                  {/* Nose */}
                  <div className="absolute bottom-1 left-1 w-3 h-2 bg-pink-300 rounded-sm"></div>
                </div>
                {/* Legs */}
                <div className="absolute bottom-0 left-2 w-2 h-4 bg-white rounded-sm"></div>
                <div className="absolute bottom-0 left-6 w-2 h-4 bg-white rounded-sm"></div>
                <div className="absolute bottom-0 right-6 w-2 h-4 bg-white rounded-sm"></div>
                <div className="absolute bottom-0 right-2 w-2 h-4 bg-white rounded-sm"></div>
              </div>
            </div>

            {/* Parent Cow 2 */}
            <div className="absolute bottom-24 right-28">
              <div className="relative">
                {/* Main Body */}
                <div className="w-16 h-10 bg-white rounded-full shadow-sm">
                  {/* Spots */}
                  <div className="absolute top-2 right-2 w-4 h-4 bg-black rounded-full"></div>
                  <div className="absolute bottom-1 left-3 w-3 h-3 bg-black rounded-full"></div>
                </div>
                {/* Head */}
                <div className="absolute -left-4 top-1 w-8 h-7 bg-white rounded-lg">
                  {/* Eyes */}
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-black rounded-full"></div>
                  {/* Nose */}
                  <div className="absolute bottom-1 left-1 w-3 h-2 bg-pink-300 rounded-sm"></div>
                </div>
                {/* Legs */}
                <div className="absolute bottom-0 left-2 w-2 h-4 bg-white rounded-sm"></div>
                <div className="absolute bottom-0 left-6 w-2 h-4 bg-white rounded-sm"></div>
                <div className="absolute bottom-0 right-6 w-2 h-4 bg-white rounded-sm"></div>
                <div className="absolute bottom-0 right-2 w-2 h-4 bg-white rounded-sm"></div>
              </div>
            </div>

            {/* Baby Cow */}
            <div className="absolute bottom-12 right-38">
              <div className="relative scale-75">
                {/* Main Body */}
                <div className="w-12 h-8 bg-white rounded-full shadow-sm">
                  {/* Spots */}
                  <div className="absolute top-1 left-2 w-3 h-3 bg-black rounded-full"></div>
                  <div className="absolute bottom-1 right-2 w-2 h-2 bg-black rounded-full"></div>
                </div>
                {/* Head */}
                <div className="absolute -left-3 top-1 w-6 h-5 bg-white rounded-lg">
                  {/* Eyes */}
                  <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
                  {/* Nose */}
                  <div className="absolute bottom-1 left-1 w-2 h-1.5 bg-pink-300 rounded-sm"></div>
                </div>
                {/* Legs */}
                <div className="absolute bottom-0 left-2 w-1.5 h-3 bg-white rounded-sm"></div>
                <div className="absolute bottom-0 left-4 w-1.5 h-3 bg-white rounded-sm"></div>
                <div className="absolute bottom-0 right-4 w-1.5 h-3 bg-white rounded-sm"></div>
                <div className="absolute bottom-0 right-2 w-1.5 h-3 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen space-y-12 px-4">
        <Title />
        <StartButton />
      </div>
    </main>
  );
}
