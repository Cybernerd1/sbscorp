"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, ContactShadows, Environment, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShape({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * speed;
    meshRef.current.rotation.y = time * speed * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-black">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <fog attach="fog" args={["black", 5, 20]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff00ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#00ffff" />
        
        <FloatingShape position={[-3, 2, -2]} color="#ff00ff" speed={0.2} />
        <FloatingShape position={[3, -2, -1]} color="#00ffff" speed={0.3} />
        <FloatingShape position={[0, 0, -4]} color="#ffff00" speed={0.1} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.5} far={10} color="#1a1a1a" />
        
        {/* Environment for reflections */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
