"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Eye, EyeOff, ZoomIn, ZoomOut, Maximize2, Minimize2 } from "lucide-react"

interface ViewerState {
  showWireframe: boolean
  showAnalysis: boolean
  zoom: number
}

export function ModelViewer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [viewState, setViewState] = useState<ViewerState>({
    showWireframe: true,
    showAnalysis: false,
    zoom: 10,
  })

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Add grid
    const grid = new THREE.GridHelper(20, 20)
    scene.add(grid)

    // Create geometry
    const geometry = new THREE.TorusGeometry(3, 1, 16, 100)

    // Create materials
    const meshMaterial = new THREE.MeshPhongMaterial({
      color: 0x0066ff,
      wireframe: viewState.showWireframe,
    })

    const analysisMaterial = new THREE.MeshPhongMaterial({
      vertexColors: true,
    })

    // Create mesh
    const mesh = new THREE.Mesh(geometry, viewState.showAnalysis ? analysisMaterial : meshMaterial)

    // Add vertex colors for analysis visualization
    if (viewState.showAnalysis) {
      const colors = new Float32Array(geometry.attributes.position.count * 3)
      for (let i = 0; i < geometry.attributes.position.count; i++) {
        const intensity = Math.random()
        colors[i * 3] = intensity
        colors[i * 3 + 1] = 0.2
        colors[i * 3 + 2] = 1 - intensity
      }
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    }

    scene.add(mesh)

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(0, 5, 5)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0x404040))

    // Camera position
    camera.position.z = viewState.zoom

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    // Animation
    function animate() {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    function handleResize() {
      if (!containerRef.current) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [viewState])

  const handleZoom = (value: number[]) => {
    setViewState((prev) => ({ ...prev, zoom: value[0] }))
  }

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full min-h-[600px] bg-background" />
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setViewState((prev) => ({ ...prev, showWireframe: !prev.showWireframe }))}
        >
          {viewState.showWireframe ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setViewState((prev) => ({ ...prev, showAnalysis: !prev.showAnalysis }))}
        >
          {viewState.showAnalysis ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
        </Button>
      </div>
      <div className="absolute bottom-4 left-4 w-48">
        <Slider min={1} max={20} step={0.1} value={[viewState.zoom]} onValueChange={handleZoom} />
        <div className="flex justify-between mt-2">
          <ZoomOut className="h-4 w-4" />
          <ZoomIn className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}

