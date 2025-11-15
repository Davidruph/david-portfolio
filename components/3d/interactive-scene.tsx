"use client";

import React, { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

export function InteractiveScene() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <SceneContent />
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
    </div>
  );
}

function SceneContent() {
  const group = useRef<THREE.Group | null>(null);
  const [active, setActive] = useState<number | null>(null);

  // Skills data (positioned around a sphere)
  const skills = useMemo(
    () => [
      { name: "JavaScript", desc: "ES6+, DOM, async, tooling" },
      { name: "React", desc: "React + hooks, component design" },
      { name: "PHP / Laravel", desc: "API design, Eloquent, migrations" },
      { name: "TypeScript", desc: "Typed apps, code quality" },
      { name: "Node.js", desc: "APIs, backend services" },
      { name: "MySQL", desc: "Stored procedures, optimization" },
      { name: "AWS", desc: "EC2, S3, RDS, IAM" },
      { name: "Tailwind", desc: "Design systems, responsive UI" }
    ],
    []
  );

  // Precompute spherical positions
  const positions = useMemo(() => {
    const pts: [number, number, number][] = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < skills.length; i++) {
      const y = 1 - (i / (skills.length - 1)) * 2; // y from 1 to -1
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radius * 2.6; // spread out
      const z = Math.sin(theta) * radius * 2.6;
      pts.push([x, y * 1.2, z]);
    }
    return pts;
  }, [skills.length]);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime / 8) * 0.06;
    }
  });

  return (
    <group ref={group}>
      <Float floatIntensity={0.6}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1.1, 64, 64]} />
          <meshStandardMaterial
            color="#6b21a8"
            emissive="#7c3aed"
            emissiveIntensity={0.08}
            roughness={0.7}
          />
        </mesh>
      </Float>

      {skills.map((s, i) => (
        <SkillOrb
          key={s.name}
          index={i}
          pos={positions[i]}
          name={s.name}
          desc={s.desc}
          active={active}
          onClick={() => setActive(i === active ? null : i)}
        />
      ))}

      {/* Center label */}
      <Html center position={[0, -2.2, 0]}>
        <div className="text-center">
          <div className="text-sm text-purple-300">Hi, I'm David</div>
          <div className="text-white text-lg font-semibold">
            Software Developer
          </div>
        </div>
      </Html>
    </group>
  );
}

function SkillOrb({ pos, name, desc, index, active, onClick }: any) {
  const meshRef = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01 + (index % 3) * 0.002;
    }
  });

  return (
    <group position={pos}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        scale={active === index ? 1.18 : 0.95}
        castShadow
      >
        <icosahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color={active === index ? "#ec4899" : "#a78bfa"}
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>

      <Html position={[0, -0.7, 0]} center>
        <div className="min-w-[140px] text-center pointer-events-none">
          <div className="text-sm font-semibold text-white">{name}</div>
          {active === index && (
            <div className="mt-2 p-2 text-xs text-gray-200 bg-black/50 rounded-md pointer-events-auto">
              {desc}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}
