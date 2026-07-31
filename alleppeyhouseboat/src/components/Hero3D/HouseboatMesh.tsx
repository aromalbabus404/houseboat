"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HouseboatMesh() {
  const groupRef = useRef<THREE.Group>(null);

  // Bobbing and rocking animation
  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Gentle up/down bobbing
    groupRef.current.position.y = Math.sin(time * 0.8) * 0.12 - 0.1;
    
    // Gentle rolling (rocking) side to side
    groupRef.current.rotation.z = Math.sin(time * 0.6) * 0.04;
    groupRef.current.rotation.x = Math.cos(time * 0.5) * 0.02;
    
    // Slow drift rotation
    groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.05 + 0.3; // Angle facing slightly forward
  });

  return (
    <group ref={groupRef} scale={[0.9, 0.9, 0.9]}>
      {/* 1. HULL (Wooden Boat Base) */}
      <mesh position={[0, -0.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.3, 3.4, 8, 1, false, 0, Math.PI]} />
        <meshStandardMaterial 
          color="#3E2723" 
          roughness={0.8} 
          metalness={0.1}
          side={THREE.DoubleSide} 
        />
      </mesh>
      
      {/* Hull Ends (curved prow and stern) */}
      <mesh position={[0, -0.2, 1.7]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.5, 0.5, 8]} />
        <meshStandardMaterial color="#2E1C0C" roughness={0.9} />
      </mesh>
      <mesh position={[0, -0.2, -1.7]} rotation={[-Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.5, 0.5, 8]} />
        <meshStandardMaterial color="#2E1C0C" roughness={0.9} />
      </mesh>

      {/* 2. CABIN (Living area structure) */}
      <mesh position={[0, 0.2, -0.2]} castShadow receiveShadow>
        <boxGeometry args={[0.85, 0.6, 2.0]} />
        <meshStandardMaterial color="#F5F5DC" roughness={0.6} /> {/* Cream colored walls */}
      </mesh>

      {/* Cabin Windows (Simple details) */}
      {[-0.8, -0.3, 0.2, 0.7].map((zOffset, idx) => (
        <group key={idx}>
          {/* Left window */}
          <mesh position={[-0.43, 0.25, zOffset - 0.2]}>
            <boxGeometry args={[0.01, 0.2, 0.3]} />
            <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.8} />
          </mesh>
          {/* Right window */}
          <mesh position={[0.43, 0.25, zOffset - 0.2]}>
            <boxGeometry args={[0.01, 0.2, 0.3]} />
            <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.8} />
          </mesh>
        </group>
      ))}

      {/* 3. THATCHED ROOF (Kettuvallam arched style) */}
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.55, 0.55, 3.2, 12, 1, true, 0, Math.PI]} />
        <meshStandardMaterial 
          color="#D4A373" // Straw gold
          roughness={0.9} 
          side={THREE.DoubleSide} 
        />
      </mesh>
      
      {/* Front overhang canopy */}
      <mesh position={[0, 0.3, 1.7]} rotation={[0.4, 0, 0]} castShadow>
        <cylinderGeometry args={[0.52, 0.45, 0.6, 12, 1, true, 0, Math.PI]} />
        <meshStandardMaterial color="#A0522D" roughness={0.95} side={THREE.DoubleSide} />
      </mesh>

      {/* 4. BAMBOO COLUMNS (Supporting the deck roof) */}
      {/* Left Columns */}
      <mesh position={[-0.4, 0.1, 1.1]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6]} />
        <meshStandardMaterial color="#8B5A2B" roughness={0.7} />
      </mesh>
      <mesh position={[-0.4, 0.1, 0.5]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6]} />
        <meshStandardMaterial color="#8B5A2B" roughness={0.7} />
      </mesh>
      <mesh position={[-0.4, 0.1, -1.1]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6]} />
        <meshStandardMaterial color="#8B5A2B" roughness={0.7} />
      </mesh>
      
      {/* Right Columns */}
      <mesh position={[0.4, 0.1, 1.1]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6]} />
        <meshStandardMaterial color="#8B5A2B" roughness={0.7} />
      </mesh>
      <mesh position={[0.4, 0.1, 0.5]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6]} />
        <meshStandardMaterial color="#8B5A2B" roughness={0.7} />
      </mesh>
      <mesh position={[0.4, 0.1, -1.1]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6]} />
        <meshStandardMaterial color="#8B5A2B" roughness={0.7} />
      </mesh>

      {/* 5. FRONT DECK (Open viewing platform) */}
      <mesh position={[0, -0.05, 1.25]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.05, 0.7]} />
        <meshStandardMaterial color="#5D4037" roughness={0.9} /> {/* Dark wood deck floor */}
      </mesh>
      
      {/* Simple Steering Wheel/Console */}
      <mesh position={[0, 0.15, 1.35]}>
        <boxGeometry args={[0.15, 0.2, 0.1]} />
        <meshStandardMaterial color="#3E2723" roughness={0.8} />
      </mesh>
    </group>
  );
}
