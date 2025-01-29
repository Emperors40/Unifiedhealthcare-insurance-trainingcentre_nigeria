import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export function PropertiesPanel() {
  return (
    <div className="w-80 bg-muted border-l border-muted p-4 space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Properties</h3>
        <p className="text-sm text-muted-foreground">Configure object properties</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Dimensions</Label>
          <div className="grid grid-cols-3 gap-2">
            <div className="space-y-1">
              <Label className="text-xs">Width</Label>
              <Input type="number" defaultValue="1.0" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Height</Label>
              <Input type="number" defaultValue="1.0" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Depth</Label>
              <Input type="number" defaultValue="1.0" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Resolution</Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>

        <div className="flex items-center justify-between">
          <Label>Wireframe</Label>
          <Switch />
        </div>
      </div>
    </div>
  )
}

