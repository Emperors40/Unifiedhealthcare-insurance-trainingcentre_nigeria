import { MainNav } from "@/components/main-nav"
import { ModelViewer } from "@/components/model-viewer"
import { ToolsPanel } from "@/components/tools-panel"
import { PropertiesPanel } from "@/components/properties-panel"
import { BooleanOperations } from "@/components/boolean-operations"
import { AnalysisPanel } from "@/components/analysis-panel"
import { ExportDialog } from "@/components/export-dialog"
import { Collaboration } from "@/components/collaboration"
import { LayerManagement } from "@/components/layer-management"
import { HistoryPanel } from "@/components/history-panel"
import { ComputationalModelBuilder } from "@/components/computational-model-builder"
import { DesignExplorer } from "@/components/design-explorer"
import { DownstreamIntegration } from "@/components/downstream-integration"
import { UnifiedHealthcare } from "@/components/unified-healthcare/unified-healthcare"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNav />
      <Tabs defaultValue="ntop" className="w-full">
        <TabsList className="justify-center w-full">
          <TabsTrigger value="ntop">nTop Capabilities</TabsTrigger>
          <TabsTrigger value="healthcare">Unified Healthcare</TabsTrigger>
        </TabsList>
        <TabsContent value="ntop">
          <main className="flex h-[calc(100vh-120px)]">
            <ToolsPanel />
            <div className="flex-1 relative">
              <ModelViewer />
              <BooleanOperations />
              <AnalysisPanel />
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <ExportDialog />
                <Collaboration />
              </div>
            </div>
            <div className="w-96 bg-muted border-l border-muted flex flex-col">
              <Tabs defaultValue="properties" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="properties">Properties</TabsTrigger>
                  <TabsTrigger value="computational">Computational</TabsTrigger>
                  <TabsTrigger value="integration">Integration</TabsTrigger>
                </TabsList>
                <TabsContent value="properties">
                  <PropertiesPanel />
                  <LayerManagement />
                  <HistoryPanel />
                </TabsContent>
                <TabsContent value="computational">
                  <ComputationalModelBuilder />
                  <DesignExplorer />
                </TabsContent>
                <TabsContent value="integration">
                  <DownstreamIntegration />
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </TabsContent>
        <TabsContent value="healthcare" className="h-[calc(100vh-120px)] overflow-auto">
          <UnifiedHealthcare />
        </TabsContent>
      </Tabs>
    </div>
  )
}

