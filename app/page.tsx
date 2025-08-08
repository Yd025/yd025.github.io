"use client"

import { useSequentialTypewriter } from "@/hooks/use-sequential-typewriter"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  const { displayedTexts, currentTextIndex, isTyping, isDone } = useSequentialTypewriter({
    texts: ["Hello,", "I am Adelin"],
    typingSpeed: 120,
    delayBetweenTexts: 300,
  })

  // Determine cursor position
  const showCursorOnFirstLine = currentTextIndex === 0 && !isDone
  const showCursorOnSecondLine = currentTextIndex === 1 || isDone

  return (
    <main className="min-h-screen bg-[#e8f5e9] flex flex-col">
      <Header />

      <section className="container mx-auto px-4 flex-grow flex flex-col md:flex-row items-center justify-center gap-8 py-12">
        <div className="md:w-1/2 space-y-6">
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold">
            <div>
              {displayedTexts[0]}
              {showCursorOnFirstLine && (
                <span className="inline-block w-[3px] h-[1em] bg-black ml-1 animate-pulse"></span>
              )}
            </div>
            <div className="mt-2">
              {displayedTexts[1]}
              {showCursorOnSecondLine && (
                <span className="inline-block w-[3px] h-[1em] bg-black ml-1 animate-blink"></span>
              )}
            </div>
          </div>
          <p className="text-lg mt-8">
            Based in Singapore and Seattle, I'm passionate about creating innovative solutions that make a difference.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-gray-300 w-full max-w-md aspect-square"></div>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 font-rammetto-one">about me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
            Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
