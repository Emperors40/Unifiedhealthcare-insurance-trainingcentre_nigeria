import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Layers, Plus, Trash2 } from "lucide-react"

interface Layer {
  id: string
  name: string
  visible: boolean
}

export function LayerManagement() {
  const [layers, setLayers] = useState<Layer[]>([
    { id: "1", name: "Base", visible: true },
    { id: "2", name: "Details", visible: true },
  ])

  const addLayer = () => {
    const newLayer: Layer = {
      id: Date.now().toString(),
      name: `Layer ${layers.length + 1}`,
      visible: true,
    }
    setLayers([...layers, newLayer])
  }

  const toggleLayerVisibility = (id: string) => {
    setLayers(layers.map((layer) => (layer.id === id ? { ...layer, visible: !layer.visible } : layer)))
  }

  const removeLayer = (id: string) => {
    setLayers(layers.filter((layer) => layer.id !== id))
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <Layers className="h-5 w-5" />
          Layers
        </h3>
        <Button size="sm" onClick={addLayer}>
          <Plus className="h-4 w-4 mr-2" />
          Add Layer
        </Button>
      </div>
      <div className="space-y-2">
        {layers.map((layer) => (
          <div key={layer.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Switch checked={layer.visible} onCheckedChange={() => toggleLayerVisibility(layer.id)} />
              <Label>{layer.name}</Label>
            </div>
            <Button variant="ghost" size="sm" onClick={() => removeLayer(layer.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

