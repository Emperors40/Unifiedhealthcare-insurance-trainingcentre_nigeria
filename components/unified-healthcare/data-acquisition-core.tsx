import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface DataAcquisitionCoreProps {
  isActive: boolean
}

export function DataAcquisitionCore({ isActive }: DataAcquisitionCoreProps) {
  const [progress, setProgress] = useState({ intake: 0, segmentation: 0, security: 0 })

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setProgress((prev) => ({
          intake: Math.min(prev.intake + 10, 100),
          segmentation: Math.min(prev.segmentation + 8, 100),
          security: Math.min(prev.security + 12, 100),
        }))
      }, 500)
      return () => clearInterval(interval)
    }
  }, [isActive])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Multi-Modal Intake & Secure Gateway</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Manages multi-modal data intake and implements federated learning protocols.</p>
          <Progress value={progress.intake} className="mt-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Adaptive Data Segmentation</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Segments multi-modal data into bricks and prepares for federated learning.</p>
          <Progress value={progress.segmentation} className="mt-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Adaptive Data Security & Compliance</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Enforces privacy protocols and ensures regulatory compliance.</p>
          <Progress value={progress.security} className="mt-2" />
        </CardContent>
      </Card>
    </div>
  )
}

