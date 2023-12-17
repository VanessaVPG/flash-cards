'use client'
import { ChevronLeftIcon, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { ProgressContainer, ProgressBar, ProgressIndicator } from "@repo/ui/progress-bar";
const flashCardsTotal = 30;
export default function Flash() {
  const [flashCardsCount, setFlashCardsCount] = useState(0);
  const [shouldShowAnswer, setShouldShowAnswer] = useState(false);
  function handleShowAnswer() {
    setShouldShowAnswer(true);
    setFlashCardsCount((state) => state + 1);
  }


  return (
    <div className="h-screen bg-gradient-to-t from-rust-950 to-rust-700 text-rust-50 relative">
      <div className="sm:none md:w-1/2 md:mx-auto md:rounded-lg">

        <div className="p-6 flex flex-col items-center gap-6">
          <div className="flex w-full justify-between items-center font-bold">
            <Link href="/">
              <ChevronLeftIcon size={40} />
            </Link>
            <Image src={'./avatar.svg'} width={64} height={64} alt="avatar" />
          </div>
          <h1 className="text-xl font-bold leading-heading">Fundamentos do Javascript</h1>
          <ProgressContainer max={flashCardsTotal} now={flashCardsCount}>
            <ProgressBar />
            <ProgressIndicator />
          </ProgressContainer>
          <div className="relative flex w-full">

            <motion.div transition={{ duration: 0.8 }} animate={shouldShowAnswer ? {
              rotateY: 180,
            } : {
            }
            } className="z-50 bg-rust-50 text-rust-700 text-center flex items-center justify-center min-h-[438px] w-full rounded-lg">
              <AnimatePresence>
                {shouldShowAnswer ? (
                  <motion.p
                    key="card-result"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, rotateY: -180 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-3xl font-bold px-4 z-50">.map</motion.p>
                )
                  :
                  (
                    <motion.p
                      key="card-question"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-3xl font-bold px-4 z-50">Método utilizado para percorrer um Array e criar um novo Array a partir do original com possíveis modificações.</motion.p>
                  )
                }
              </AnimatePresence>
            </motion.div>

            <div className="z-10 absolute bg-rust-50/60 min-h-[438px] rounded-lg -bottom-4 left-4 right-4"></div>
          </div>
        </div>
      </div>

      <button disabled={flashCardsCount >= 30} onClick={() => handleShowAnswer()} className="bg-rust-50  flex items-center justify-center gap-2 w-full text-rust-700 font-bold text-xl py-8 absolute bottom-0 md:w-2/3 md:left-1/2 md:-translate-x-1/2 md:rounded-lg md:animate-[pulse_4s_ease-in-out_infinite] md:bottom-4 disabled:text-gray-400 disabled:bg-gray-200 disabled:animate-[none] disabled:cursor-not-allowed">
        <Eye size={32} />
        <span>Resposta</span>
      </button>

    </div>
  );
}