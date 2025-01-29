import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

interface VisualizationPanelProps {
  currentStep: number
}

export function VisualizationPanel({ currentStep }: VisualizationPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    const renderer = new THREE.WebGLRenderer()

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.MeshPhongMaterial({ color: 0x0066ff })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(10, 10, 10)
    scene.add(light)

    camera.position.z = 5

    const controls = new OrbitControls(camera, renderer.domElement)

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Update visualization based on current step
    switch (currentStep) {
      case 0:
        sphere.material.color.setHex(0x00ff00) // Green for data acquisition
        break
      case 1:
        sphere.material.color.setHex(0xff00ff) // Purple for reconstruction
        break
      case 2:
        sphere.material.color.setHex(0xff0000) // Red for medical analysis
        break
      case 3:
        sphere.material.color.setHex(0x0000ff) // Blue for output & coordination
        break
    }

    return () => {
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [currentStep])

  return <div ref={containerRef} className="w-full h-[400px]" />
}

