import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function WaterShader() {
  const shaderRef = useRef<THREE.ShaderMaterial>(null);

  // Custom shader uniforms
  const uniforms = useRef({
    uTime: { value: 0 },
    uDepthColor: { value: new THREE.Color("#052315") }, // Deep emerald green
    uSurfaceColor: { value: new THREE.Color("#0d5333") }, // Vibrant backwater green
  });

  useFrame((state) => {
    if (!shaderRef.current) return;
    shaderRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.4, 0]} receiveShadow>
      <planeGeometry args={[20, 20, 64, 64]} />
      <shaderMaterial
        ref={shaderRef}
        uniforms={uniforms.current}
        transparent
        vertexShader={`
          uniform float uTime;
          varying vec2 vUv;
          varying float vElevation;
          
          void main() {
            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
            
            // Simple double-sine wave formula for calm rippling
            float elevation = sin(modelPosition.x * 0.8 + uTime * 0.8) * 0.04
                            + sin(modelPosition.y * 0.8 + uTime * 0.6) * 0.04;
            
            modelPosition.z += elevation;
            
            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectedPosition = projectionMatrix * viewPosition;
            
            gl_Position = projectedPosition;
            vUv = uv;
            vElevation = elevation;
          }
        `}
        fragmentShader={`
          uniform vec3 uDepthColor;
          uniform vec3 uSurfaceColor;
          varying vec2 vUv;
          varying float vElevation;
          
          void main() {
            // Map elevation from [-0.08, 0.08] to [0.0, 1.0] for mixing colors
            float mixStrength = (vElevation + 0.08) * 6.25;
            mixStrength = clamp(mixStrength, 0.0, 1.0);
            
            vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);
            
            // Add a subtle vignette or edge opacity fade
            float dist = distance(vUv, vec2(0.5));
            float alpha = smoothstep(0.7, 0.3, dist) * 0.9;
            
            gl_FragColor = vec4(color, alpha);
          }
        `}
      />
    </mesh>
  );
}
