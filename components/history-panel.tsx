import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { History, RotateCcw, RotateCw } from "lucide-react"

interface HistoryItem {
  id: string
  action: string
  timestamp: Date
}

export function HistoryPanel() {
  const [history, setHistory] = useState<HistoryItem[]>([
    { id: "1", action: "Create Cube", timestamp: new Date() },
    { id: "2", action: "Scale Object", timestamp: new Date() },
    { id: "3", action: "Boolean Union", timestamp: new Date() },
  ])

  const undoLastAction = () => {
    if (history.length > 0) {
      const newHistory = [...history]
      newHistory.pop()
      setHistory(newHistory)
    }
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <History className="h-5 w-5" />
          History
        </h3>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={undoLastAction}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Undo
          </Button>
          <Button size="sm" variant="outline" disabled>
            <RotateCw className="h-4 w-4 mr-2" />
            Redo
          </Button>
        </div>
      </div>
      <ScrollArea className="h-[200px]">
        {history.map((item, index) => (
          <div key={item.id} className="flex items-center justify-between py-2">
            <span>{item.action}</span>
            <span className="text-sm text-muted-foreground">{item.timestamp.toLocaleTimeString()}</span>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

