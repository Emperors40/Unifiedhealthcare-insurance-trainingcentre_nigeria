import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Save } from "lucide-react"

interface Parameter {
  name: string
  value: string
}

export function ComputationalModelBuilder() {
  const [parameters, setParameters] = useState<Parameter[]>([
    { name: "Length", value: "100" },
    { name: "Width", value: "50" },
  ])
  const [algorithm, setAlgorithm] = useState("")

  const addParameter = () => {
    setParameters([...parameters, { name: "", value: "" }])
  }

  const updateParameter = (index: number, field: "name" | "value", value: string) => {
    const newParameters = [...parameters]
    newParameters[index][field] = value
    setParameters(newParameters)
  }

  const saveModel = () => {
    console.log("Saving model:", { parameters, algorithm })
    // Here you would typically save the model to a backend or state management system
  }

  return (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-medium">Computational Model Builder</h3>
      <div className="space-y-2">
        <Label>Parameters</Label>
        {parameters.map((param, index) => (
          <div key={index} className="flex gap-2">
            <Input
              placeholder="Name"
              value={param.name}
              onChange={(e) => updateParameter(index, "name", e.target.value)}
            />
            <Input
              placeholder="Value"
              value={param.value}
              onChange={(e) => updateParameter(index, "value", e.target.value)}
            />
          </div>
        ))}
        <Button size="sm" onClick={addParameter}>
          <Plus className="h-4 w-4 mr-2" />
          Add Parameter
        </Button>
      </div>
      <div className="space-y-2">
        <Label>Algorithm</Label>
        <Textarea
          placeholder="Enter your algorithm here..."
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          rows={10}
        />
      </div>
      <Button onClick={saveModel}>
        <Save className="h-4 w-4 mr-2" />
        Save Model
      </Button>
    </div>
  )
}

