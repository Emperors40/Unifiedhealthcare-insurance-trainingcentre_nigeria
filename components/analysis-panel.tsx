import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Box, CircleDot, Maximize2, MinusCircle, PlusCircle, Ruler, Scale3D } from "lucide-react"

export function AnalysisPanel() {
  return (
    <div className="absolute bottom-4 left-4 right-4 bg-muted/90 backdrop-blur-sm rounded-lg p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Box className="h-4 w-4" />
            <Label>Volume Analysis</Label>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Total Volume</span>
              <span>1234.56 mm³</span>
            </div>
            <Progress value={66} />
          </div>
        </Card>

        <Card className="p-4 space-y-2">
          <div className="flex items-center gap-2">
            <CircleDot className="h-4 w-4" />
            <Label>Surface Analysis</Label>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Surface Area</span>
              <span>789.12 mm²</span>
            </div>
            <Progress value={45} className="bg-blue-950" />
          </div>
        </Card>

        <Card className="p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Scale3D className="h-4 w-4" />
            <Label>Stress Analysis</Label>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Max Stress</span>
              <span>123.45 MPa</span>
            </div>
            <Progress value={88} className="bg-red-950" />
          </div>
        </Card>
      </div>
    </div>
  )
}

