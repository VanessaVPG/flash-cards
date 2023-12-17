import { ElementType, ReactNode } from "react"
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href: string;
}


export function Button({children, href}: ButtonProps) {
  return (
    <Link href={href} className="bg-rust-700 rounded-lg text-rust-50 font-bold p-3 transition-all hover:bg-rust-900">
      <div className="flex gap-3 items-center">
        {children}
      </div>
    </Link>
  )
}

export function ButtonText({ children }: { children: ReactNode }) {
  return (
    <span className="leading-base">
      {children}
    </span>
  )
}

export function ButtonIcon({icon: Icon}: {icon: ElementType}) {
  return (
    <Icon className="w-5 h-5" />

  )
}