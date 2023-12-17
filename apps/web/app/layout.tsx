import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

import './globals.css'
import React from "react";



const inter = Inter({ subsets: ['latin'] })

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flash Cards',
  description: 'Uma nova forma de aprender',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-rust-50`}>{children}</body>
    </html>
  )
}
