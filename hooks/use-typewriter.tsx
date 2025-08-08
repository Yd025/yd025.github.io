"use client"

import { useState, useEffect, useCallback } from "react"

interface UseTypewriterProps {
  text: string
  typingSpeed?: number
  delayAfterComplete?: number
  loop?: boolean
}

export function useTypewriter({
  text,
  typingSpeed = 100,
  delayAfterComplete = 2000,
  loop = false,
}: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const resetTypewriter = useCallback(() => {
    setDisplayText("")
    setCurrentIndex(0)
    setIsTyping(true)
    setIsPaused(false)
  }, [])

  useEffect(() => {
    if (!isTyping || isPaused) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    } else {
      setIsTyping(false)

      if (loop) {
        const timeout = setTimeout(() => {
          resetTypewriter()
        }, delayAfterComplete)

        return () => clearTimeout(timeout)
      }
    }
  }, [currentIndex, delayAfterComplete, isTyping, isPaused, loop, resetTypewriter, text, typingSpeed])

  return {
    displayText,
    isTyping,
    isDone: currentIndex >= text.length,
    reset: resetTypewriter,
  }
}
