'use client';

import { useRouter } from 'next/navigation';

export default function Level2() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen bg-[#f3e0c0] flex justify-center items-center">
      <div className="absolute inset-0 flex justify-center items-center">
        <svg viewBox="0 0 300 200" width="350" height="300">
          {/* Earthy character */}
          <circle cx="150" cy="100" r="25" fill="#60aefc" />
          <path d="M145 95 Q140 85 150 80 Q160 85 155 95 Z" fill="#5fa94d" />
          <circle cx="142" cy="98" r="2" fill="#000" />
          <circle cx="158" cy="98" r="2" fill="#000" />
          <path d="M142 105 Q150 110 158 105" fill="none" stroke="#000" strokeWidth="1" />

          {/* Work bag */}
          <rect x="140" y="125" width="20" height="10" rx="2" fill="#333" />
          <line x1="140" y1="125" x2="150" y2="120" stroke="#333" strokeWidth="1" />
          <line x1="160" y1="125" x2="150" y2="120" stroke="#333" strokeWidth="1" />

          {/* Car (left) */}
          <rect x="50" y="130" width="40" height="15" rx="2" fill="#ff6961" />
          <circle cx="55" cy="145" r="4" fill="#333" />
          <circle cx="85" cy="145" r="4" fill="#333" />

          {/* Bike (right) */}
          <circle cx="235" cy="145" r="5" fill="#333" />
          <circle cx="255" cy="145" r="5" fill="#333" />
          <line x1="235" y1="145" x2="245" y2="135" stroke="#333" strokeWidth="1" />
          <line x1="255" y1="145" x2="245" y2="135" stroke="#333" strokeWidth="1" />
          <line x1="245" y1="135" x2="245" y2="140" stroke="#333" strokeWidth="1" />

          {/* Labels and decision text */}
          <text x="110" y="60" fontSize="10" fill="#444" fontFamily="Arial">Drive or Ride?</text>
          <text x="70" y="160" fontSize="8" fill="#444" fontFamily="Arial">Car</text>
          <text x="240" y="160" fontSize="8" fill="#444" fontFamily="Arial">Bike</text>
        </svg>
      </div>
    </main>
  );
}
