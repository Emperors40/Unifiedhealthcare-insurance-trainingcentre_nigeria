import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { DataAcquisitionCore } from "./data-acquisition-core"
import { ReconstructionCore } from "./reconstruction-core"
import { MedicalAnalysisCore } from "./medical-analysis-core"
import { OutputCoordinationCore } from "./output-coordination-core"
import { SystemStatus } from "./system-status"
import { VisualizationPanel } from "./visualization-panel"

export function UnifiedHealthcare() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const startProcessing = () => {
    setIsProcessing(true)
    setCurrentStep(0)
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= 3) {
          clearInterval(interval)
          setIsProcessing(false)
          return 3
        }
        return prev + 1
      })
    }, 5000) // Move to next step every 5 seconds
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Unified Healthcare AI System</h2>
      <div className="flex justify-between items-center">
        <Button onClick={startProcessing} disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Start Processing"}
        </Button>
        <SystemStatus isProcessing={isProcessing} currentStep={currentStep} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <Tabs value={`step-${currentStep}`}>
            <TabsList>
              <TabsTrigger value="step-0">Data Acquisition</TabsTrigger>
              <TabsTrigger value="step-1">Reconstruction</TabsTrigger>
              <TabsTrigger value="step-2">Medical Analysis</TabsTrigger>
              <TabsTrigger value="step-3">Output & Coordination</TabsTrigger>
            </TabsList>
            <TabsContent value="step-0">
              <DataAcquisitionCore isActive={currentStep === 0} />
            </TabsContent>
            <TabsContent value="step-1">
              <ReconstructionCore isActive={currentStep === 1} />
            </TabsContent>
            <TabsContent value="step-2">
              <MedicalAnalysisCore isActive={currentStep === 2} />
            </TabsContent>
            <TabsContent value="step-3">
              <OutputCoordinationCore isActive={currentStep === 3} />
            </TabsContent>
          </Tabs>
        </div>
        <VisualizationPanel currentStep={currentStep} />
      </div>
    </div>
  )
}

