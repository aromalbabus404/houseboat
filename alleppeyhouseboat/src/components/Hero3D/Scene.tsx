"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import HouseboatMesh from "./HouseboatMesh";
import WaterShader from "./WaterShader";

function CameraController() {
  // Slow camera drift for parallax effect
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Slow camera panning/drift
    state.camera.position.x = Math.sin(time * 0.15) * 0.4;
    // Keep camera slightly elevated
    state.camera.position.y = Math.cos(time * 0.12) * 0.15 + 1.1;
    // Keep camera at a fixed distance
    state.camera.position.z = 4.2;
    
    state.camera.lookAt(0, 0.1, 0);
  });

  return null;
}

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{ position: [0, 1.1, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Soft environmental lighting */}
        <ambientLight intensity={0.9} />
        
        {/* Warm sun-like light */}
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        
        {/* Fill light */}
        <directionalLight position={[-5, 3, -2]} intensity={0.4} color="#a1c4fd" />
        
        {/* Gentle background glow */}
        <pointLight position={[0, 4, -4]} intensity={0.5} color="#e5b33c" />

        {/* Houseboat Model */}
        <HouseboatMesh />

        {/* Calm Backwater Shader */}
        <WaterShader />

        {/* Custom camera controller for subtle floating drift */}
        <CameraController />
      </Canvas>
    </div>
  );
}
