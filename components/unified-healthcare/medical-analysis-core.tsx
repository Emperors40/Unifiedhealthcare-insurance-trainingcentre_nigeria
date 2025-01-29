import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MedicalAnalysisCore() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Anatomical Segmentation & Boundary Mapping</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Performs accurate segmentation and creates detailed boundary maps.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Structure Labeling & Relationship Mining</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Labels structures and mines spatial and semantic relationships.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Multi-Modal Volume Reconstruction</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Reconstructs 3D volumetric models using multi-modal data.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Diagnostic Insight & Explainability</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Performs diagnostic analysis and provides explainable AI insights.</p>
        </CardContent>
      </Card>
    </div>
  )
}

