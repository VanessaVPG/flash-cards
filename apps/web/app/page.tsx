import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProgressCircle } from "./components/progress-circle";

export default function Home() {
  return (
    <div>

      <div className="bg-gradient-to-t from-rust-950 to-rust-700 p-6 gap-1 flex flex-col rounded-b-lg">
        <div className="flex items-center justify-end">

          <Image src={'./avatar.svg'} width={64} height={64} alt="avatar" />
        </div>
        <span className="text-2xl font-bold text-rust-50">Dashboard</span>
      </div>
      <main className="flex flex-col p-6 gap-4">
        <span className="text-rust-950 text-xl font-bold leading-heading">Coleções</span>
        <div className="w-full p-4 flex flex-col gap-4 border border-rust-100 shadow-lg rounded-lg">
          <h2 className="text-sm font-bold text-rust-700 leading-heading">JAVASCRIPT</h2>
          <h3 className="text-rust-950 font-bold text-sm leading-heading">Fundamentos do Javascript</h3>
          <p className="text-sm text-rust-800 font-normal leading-base">Treine seus fundamentos de JavaScript como: variáveis, testes, Arrays, condicionais loops  estruturas de dados </p>
          <div className="flex items-center justify-between">
            <Link href={'/colecao'} className="bg-rust-700 rounded-lg text-rust-50 font-bold p-3">
              <div className="flex gap-3 items-center">
                <span className="leading-base">
                  Acessar coleção
                </span>
                <MoveRight size={20} />
              </div>
            </Link>
            <div className="flex items-center gap-1 text-sm font-normal text-rust-700">
              <ProgressCircle progress={40} />
              <span>
                8/10
              </span> </div>
          </div>
        </div>
        <div className="w-full p-4 flex flex-col gap-4 border border-rust-100 shadow-lg rounded-lg">
          <h2 className="text-sm font-bold text-rust-700 leading-heading">JAVASCRIPT</h2>
          <h3 className="text-rust-950 font-bold text-sm leading-heading">Fundamentos do Javascript</h3>
          <p className="text-sm text-rust-800 font-normal leading-base">Treine seus fundamentos de JavaScript como: variáveis, testes, Arrays, condicionais loops  estruturas de dados </p>
          <div className="flex items-center justify-between">
            <Link href={'/colecao'} className="bg-rust-700 rounded-lg text-rust-50 font-bold p-3">
              <div className="flex gap-3 items-center">
                <span className="leading-base">
                  Acessar coleção
                </span>
                <MoveRight size={20} />
              </div>
            </Link>
            <div className="flex items-center gap-1 text-sm font-normal text-rust-700">
              <ProgressCircle progress={40} />
              <span>
                8/10
              </span> </div>
          </div>
        </div>
      </main>
    </div>

  )
}
