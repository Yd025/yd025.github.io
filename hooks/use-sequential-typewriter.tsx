"use client"

import { useState, useEffect, useCallback } from "react"

interface UseSequentialTypewriterProps {
  texts: string[]
  typingSpeed?: number
  delayBetweenTexts?: number
}

export function useSequentialTypewriter({
  texts,
  typingSpeed = 100,
  delayBetweenTexts = 500,
}: UseSequentialTypewriterProps) {
  const [displayedTexts, setDisplayedTexts] = useState<string[]>(Array(texts.length).fill(""))
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isDone, setIsDone] = useState(false)

  const resetTypewriter = useCallback(() => {
    setDisplayedTexts(Array(texts.length).fill(""))
    setCurrentTextIndex(0)
    setCurrentCharIndex(0)
    setIsTyping(true)
    setIsDone(false)
  }, [texts.length])

  useEffect(() => {
    if (!isTyping) return

    // If we've completed all texts
    if (currentTextIndex >= texts.length) {
      setIsTyping(false)
      setIsDone(true)
      return
    }

    const currentText = texts[currentTextIndex]

    if (currentCharIndex < currentText.length) {
      // Still typing the current text
      const timeout = setTimeout(() => {
        setDisplayedTexts((prev) => {
          const newTexts = [...prev]
          newTexts[currentTextIndex] = currentText.substring(0, currentCharIndex + 1)
          return newTexts
        })
        setCurrentCharIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    } else {
      // Finished typing the current text, move to the next one
      const timeout = setTimeout(() => {
        setCurrentTextIndex((prev) => prev + 1)
        setCurrentCharIndex(0)
      }, delayBetweenTexts)

      return () => clearTimeout(timeout)
    }
  }, [currentCharIndex, currentTextIndex, delayBetweenTexts, isTyping, texts, typingSpeed])

  return {
    displayedTexts,
    currentTextIndex,
    isTyping,
    isDone,
    reset: resetTypewriter,
  }
}
