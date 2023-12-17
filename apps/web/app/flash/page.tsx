'use client'
import { ChevronLeftIcon, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const flashCardsTotal = 30;
export default function Flash() {
  const [flashCardsCount, setFlashCardsCount] = useState(0);
  return (
    <div className="h-screen bg-gradient-to-t from-rust-950 to-rust-700 text-rust-50 relative">
      <div className="sm:none md:w-1/2 md:mx-auto md:rounded-lg">

        <div className="p-6 flex flex-col items-center gap-6">
          <div className="flex w-full justify-between items-center font-bold">
            <ChevronLeftIcon size={40} />
            <Image src={'./avatar.svg'} width={64} height={64} alt="avatar" />
          </div>
          <h1 className="text-xl font-bold leading-heading">Fundamentos do Javascript</h1>
          <div className="flex items-center w-full px-8 gap-3">
            <div className="relative w-full flex h-3 bg-rust-950 rounded-full overflow-hidden">
              <div className="absolute font-mono transition-all bg-rust-50 h-3 rounded-full left-0" style={{ width: `${Math.round(flashCardsCount * 100 / flashCardsTotal)}%` }}>

              </div>
            </div>
            <span>{String(flashCardsCount).padStart(2, '0')}/{flashCardsTotal}</span>
          </div>
          <div className="relative flex w-full">

            <div className="z-50 bg-rust-50 text-rust-700 text-center flex items-center justify-center min-h-[438px] w-full rounded-lg">
              <p className="px-4 z-50">Método utilizado para percorrer um Array e criar um novo Array a partir do original com possíveis modificações.</p>
            </div>

            <div className="z-10 absolute bg-rust-50/60 min-h-[438px] rounded-lg -bottom-4 left-4 right-4"></div>
          </div>
        </div>
      </div>

      <button onClick={() => setFlashCardsCount((state) => state + 1)} className="bg-rust-50  flex items-center justify-center gap-2 w-full text-rust-700 font-bold text-xl py-8 absolute bottom-0 md:w-2/3 md:left-1/2 md:-translate-x-1/2 md:rounded-lg md:animate-[pulse_4s_ease-in-out_infinite] md:bottom-4 ">
        <Eye size={32} />
        <span>Resposta</span>
      </button>

    </div>
  );
}