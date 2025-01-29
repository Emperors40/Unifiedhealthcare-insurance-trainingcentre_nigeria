import { Progress } from "@/components/ui/progress"

interface SystemStatusProps {
  isProcessing: boolean
  currentStep: number
}

export function SystemStatus({ isProcessing, currentStep }: SystemStatusProps) {
  const steps = ["Data Acquisition", "Reconstruction", "Medical Analysis", "Output & Coordination"]

  return (
    <div className="w-64">
      <Progress value={(currentStep + 1) * 25} className="w-full" />
      <div className="text-sm mt-2">{isProcessing ? `Processing: ${steps[currentStep]}` : "Ready"}</div>
    </div>
  )
}

