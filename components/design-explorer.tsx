import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Play, RotateCw } from "lucide-react"

export function DesignExplorer() {
  const [isRunning, setIsRunning] = useState(false)
  const [progress, setProgress] = useState(0)

  const runModel = () => {
    setIsRunning(true)
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsRunning(false)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  return (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-medium">Design Explorer</h3>
      <Button onClick={runModel} disabled={isRunning}>
        {isRunning ? <RotateCw className="h-4 w-4 mr-2 animate-spin" /> : <Play className="h-4 w-4 mr-2" />}
        {isRunning ? "Running..." : "Run Model"}
      </Button>
      <Progress value={progress} className="w-full" />
      {progress === 100 && <div className="text-green-500">Model run complete!</div>}
    </div>
  )
}

