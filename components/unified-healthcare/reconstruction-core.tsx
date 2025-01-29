import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ReconstructionCore() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Noise Reduction & Super-Resolution</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Employs advanced noise suppression and super-resolution techniques.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Adaptive Contrast & Multi-Modal Fusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Adjusts contrast dynamically and fuses multi-modal data.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Spatial Reconstruction & Artifact Removal</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Reconstructs 3D spatial relationships and removes complex artifacts.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Advanced Quality Control & Anomaly Detection</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Implements comprehensive data quality control and anomaly detection.</p>
        </CardContent>
      </Card>
    </div>
  )
}

