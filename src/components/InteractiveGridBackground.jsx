import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// --- TWEAKABLE PARAMETERS ---
const PARTICLE_COUNT = 8000;      // Increase to add more dots (creates a denser grid)
const PARTICLE_SPACING = 0.8;     // How far apart the dots are spaced initially
const PARTICLE_SIZE = 0.035;      // Size of each individual dot/sphere
const SPHERE_DETAIL = 16;         // Higher number makes them perfectly round (instead of hexagon/low-poly)
const REPEL_RADIUS = 10;          // How wide the mouse hover effect spreads
const REPEL_STRENGTH = 0.5;       // How intensely the dots repel/move
const BASE_WAVE_SPEED = 0.5;      // Speed of the ambient rolling wave
const GLOW_INTENSITY = 0.8;       // Emissive intensity of the neon material
// ----------------------------

const ParticleGrid = () => {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Track mouse position in 3D space
  const mouse = useRef({ x: 0, y: 0 });

  // Pre-calculate positions AND generate a color array for each particle
  const { positions, colorArray } = useMemo(() => {
    const pos = [];
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const size = Math.sqrt(PARTICLE_COUNT);
    
    // Gradient colors definition
    const color1 = new THREE.Color("#00ff88"); // Neon Green
    const color2 = new THREE.Color("#00d4ff"); // Neon Blue
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Calculate X and Z positions in a grid
      const x = (i % size - size / 2) * PARTICLE_SPACING;
      const z = (Math.floor(i / size) - size / 2) * PARTICLE_SPACING;
      // Initial Y terrain mapping based on sin/cos
      const y = (Math.sin(x * BASE_WAVE_SPEED) + Math.cos(z * BASE_WAVE_SPEED)) * 0.5; 
      
      pos.push({ x, y, z, originY: y });

      // Determine color based on X position to create a gradient effect across the grid
      const normalizedX = (x + (size * PARTICLE_SPACING) / 2) / (size * PARTICLE_SPACING);
      const mixedColor = color1.clone().lerp(color2, normalizedX);
      
      // Store the R, G, B values flatly in the array
      mixedColor.toArray(colors, i * 3);
    }
    return { positions: pos, colorArray: colors };
  }, []);

  useFrame((state) => {
    // Smoothly interpolate mouse position for fluid movement feeling
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, (state.mouse.x * 20), 0.1);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, (state.mouse.y * 20), 0.1);

    const time = state.clock.getElapsedTime();

    positions.forEach((particle, i) => {
      let { x, originY, z } = particle;

      // Distance from the exact mouse point to the particle
      const dx = x - mouse.current.x;
      const dz = z + mouse.current.y; // Invert y for intuitive feeling mapping
      const distance = Math.sqrt(dx * dx + dz * dz);
      
      // Repel effect mathematical calculation 
      const repelForce = Math.max(0, REPEL_RADIUS - distance) * REPEL_STRENGTH;

      // Combine base ambient waving + mouse repel push
      const y = originY + Math.sin(time + x * BASE_WAVE_SPEED + z * BASE_WAVE_SPEED) * 0.5 - repelForce;

      // Apply the calculated position to our dummy instance
      dummy.position.set(x, y, z);
      
      // Optional: Give particles slight rotation twinkling
      dummy.rotation.x = time * 0.5 + i;
      dummy.rotation.y = time * 0.5 + i;
      
      // Scale particles based on mouse distance for "pop" effect
      const scale = 1 + repelForce * 0.3;
      dummy.scale.set(scale, scale, scale);

      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, PARTICLE_COUNT]}>
      {/* Geometry resolution set to 16 so they are truly spheres and not low-poly shapes */}
      <sphereGeometry args={[PARTICLE_SIZE, SPHERE_DETAIL, SPHERE_DETAIL]}>
        {/* Attach our mixed colored gradient array to the geometry directly */}
        <instancedBufferAttribute attach="attributes-color" args={[colorArray, 3]} />
      </sphereGeometry>
      
      <meshPhysicalMaterial 
        vertexColors // Tells material to use the color buffer we attached above
        emissive="#00d4ff" 
        emissiveIntensity={GLOW_INTENSITY} 
        transparent 
        opacity={0.8}
        roughness={0.2}
        metalness={0.8}
      />
    </instancedMesh>
  );
};

// Main Export Component
export default function InteractiveGridBackground() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas 
        camera={{ position: [0, 8, 15], fov: 60 }} 
        style={{ pointerEvents: 'auto' }} // Allow canvas to receive mouse events while underneath content
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ff88" />
        <ParticleGrid />
        
        {/* Adds fog to fade out dots in the distance */}
        <fog attach="fog" args={['#0a0e14', 10, 30]} />
      </Canvas>
    </div>
  );
}
