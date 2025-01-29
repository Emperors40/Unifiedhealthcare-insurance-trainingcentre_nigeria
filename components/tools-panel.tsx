import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Box, Cylinder, SpaceIcon as Sphere, Move, RotateCcw, Scale, Grid3X3, Eye, Settings } from "lucide-react"

export function ToolsPanel() {
  return (
    <div className="w-16 bg-muted border-r border-muted flex flex-col items-center py-4 gap-4">
      <Button variant="ghost" size="icon" title="Box">
        <Box className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" title="Cylinder">
        <Cylinder className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" title="Sphere">
        <Sphere className="h-4 w-4" />
      </Button>

      <Separator className="my-2" />

      <Button variant="ghost" size="icon" title="Move">
        <Move className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" title="Rotate">
        <RotateCcw className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" title="Scale">
        <Scale className="h-4 w-4" />
      </Button>

      <Separator className="my-2" />

      <Button variant="ghost" size="icon" title="Grid">
        <Grid3X3 className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" title="View">
        <Eye className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" title="Settings">
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  )
}

