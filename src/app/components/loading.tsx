"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

export function LoadingProgress() {
  const [progress, setProgress] = useState(0)
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const visited = sessionStorage.getItem("visited")
    if (visited) {
      setIsFirstVisit(false)
      return
    }

    setProgress(10)

    const timer1 = setTimeout(() => {
      setProgress(70) 
    }, 100)

    const timer2 = setTimeout(() => {
      setProgress(100)
    }, 500)

    const timer3 = setTimeout(() => {
      setIsVisible(false)
      sessionStorage.setItem("visited", "true")
    }, 800) // Wait for animation to complete

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  if (!isFirstVisit || !isVisible) return null

  return (
    <div className="fixed top-0 left-0 w-full z-[100] transition-opacity duration-300" 
        style={{ opacity: progress === 100 ? 0 : 1 }}>
      <Progress 
        value={progress} 
        className="rounded-none transition-all duration-500"
      />
    </div>
  )
}