import type React from "react"
import type { Metadata } from "next"
import { Lato, Rammetto_One } from "next/font/google"
import "./globals.css"

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
})

const rammettoOne = Rammetto_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rammetto-one",
})

export const metadata: Metadata = {
  title: "Adelin Ma - Portfolio",
  description: "Personal portfolio website for Adelin Ma",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${rammettoOne.variable} font-lato`}>{children}</body>
    </html>
  )
}


import './globals.css'