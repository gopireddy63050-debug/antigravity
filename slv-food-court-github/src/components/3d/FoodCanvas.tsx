'use client';

import React, { Suspense, useEffect, useState, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function CulinarySculpture({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const wokRef = useRef<THREE.Mesh>(null);
  const ribbonRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const [particlePositions, particleColors] = useMemo(() => {
    const count = 160;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const redColor = new THREE.Color('#CB1D1D');
    const orangeColor = new THREE.Color('#EF6414');
    const goldColor = new THREE.Color('#FFAA28');
    const tempColor = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const radius = 1.6 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.8;
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const r = Math.random();
      if (r < 0.45) {
        tempColor.copy(redColor);
      } else if (r < 0.8) {
        tempColor.copy(orangeColor);
      } else {
        tempColor.copy(goldColor);
      }

      colors[i * 3] = tempColor.r;
      colors[i * 3 + 1] = tempColor.g;
      colors[i * 3 + 2] = tempColor.b;
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (reducedMotion) return;

    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.25;
      groupRef.current.rotation.x = 0.25 + (mouse.y * 0.35 - groupRef.current.rotation.x * 0.1) * 0.08;
      groupRef.current.rotation.y += (mouse.x * 0.4 - groupRef.current.rotation.y * 0.1) * 0.06;
      groupRef.current.position.y = Math.sin(t * 1.4) * 0.12;
    }

    if (ribbonRef.current) {
      ribbonRef.current.rotation.x = t * 0.4;
      ribbonRef.current.rotation.z = Math.sin(t * 0.6) * 0.2;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.3;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.1;
      particlesRef.current.rotation.x = t * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      <mesh ref={wokRef} position={[0, -0.65, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.7, 1.1, 0.4, 48]} />
        <meshPhysicalMaterial
          color="#1A0707"
          roughness={0.25}
          metalness={0.85}
          clearcoat={0.9}
          clearcoatRoughness={0.15}
        />
      </mesh>

      <mesh position={[0, -0.45, 0]}>
        <torusGeometry args={[1.72, 0.035, 16, 64]} />
        <meshStandardMaterial
          color="#FFAA28"
          emissive="#EF6414"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      <mesh ref={ribbonRef} position={[0, 0.2, 0]} castShadow>
        <torusKnotGeometry args={[0.92, 0.28, 128, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#CB1D1D"
          emissive="#EF6414"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.7}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
      </mesh>

      <mesh ref={ringRef} position={[0, 0.2, 0]}>
        <torusGeometry args={[1.85, 0.018, 16, 96]} />
        <meshStandardMaterial
          color="#FFAA28"
          emissive="#EF6414"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleColors.length / 3}
            array={particleColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export function FoodCanvas() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-56 h-56 rounded-full border border-slv-red/30 animate-pulse bg-gradient-to-tr from-slv-red/20 via-slv-orange/20 to-transparent blur-2xl" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [0, 0.4, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} color="#1F0808" />
        <pointLight position={[4, 3, 3]} intensity={3.0} color="#CB1D1D" distance={12} />
        <pointLight position={[-4, -2, 2.5]} intensity={3.5} color="#EF6414" distance={12} />
        <pointLight position={[0, -3, 2]} intensity={1.8} color="#FFAA28" distance={8} />
        <directionalLight position={[0, 6, 3]} intensity={1.5} color="#FFFFFF" />

        <Suspense fallback={null}>
          <CulinarySculpture reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default FoodCanvas;
