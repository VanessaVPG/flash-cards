import { MoveRight } from "lucide-react";
import Image from "next/image";
import { ProgressCircle } from "./components/progress-circle";
import { Button, ButtonIcon, ButtonText } from "@repo/ui/button";

export default function Home() {
  return (
    <div>

      <div className="bg-gradient-to-t from-rust-950 to-rust-700 p-6 gap-1 flex flex-col md:justify-between md:items-center md:flex-row-reverse md:gap-6 rounded-b-lg">
        <div className="flex items-center justify-end">

          <Image src={'./avatar.svg'} width={64} height={64} alt="avatar" />
        </div>
        <span className="text-2xl font-bold text-rust-50">Dashboard</span>
      </div>
      <main className="flex flex-col p-6 gap-4">
        <span className="text-rust-950 text-xl font-bold leading-heading">Coleções</span>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 ">

          {Array.from({ length: 12 }).map((_, index) => {
            return (
              <div key={index} className="w-full p-4 flex flex-col gap-4 border border-rust-100 transition-transform duration-300 shadow-lg rounded-lg hover:scale-[102.5%]">
                <h2 className="text-sm font-bold text-rust-700 leading-heading">JAVASCRIPT</h2>
                <h3 className="text-rust-950 font-bold text-sm leading-heading">Fundamentos do Javascript</h3>
                <p className="text-sm text-rust-800 font-normal leading-base">Treine seus fundamentos de JavaScript como: variáveis, testes, Arrays, condicionais loops  estruturas de dados </p>
                <div className="flex items-center justify-between">
                  <Button href="/flash" >
                    <div className="flex gap-3 items-center">
                      <ButtonText>
                        Acessar coleção
                      </ButtonText>
                      <ButtonIcon icon={MoveRight} />
                    </div>
                  </Button>
                  <div className="flex items-center gap-1 text-sm font-normal text-rust-700">
                    <ProgressCircle progress={40} />
                    <span>
                      8/10
                    </span> </div>
                </div>
              </div>

            )
          })}
        </div>

      </main>
    </div>

  )
}
