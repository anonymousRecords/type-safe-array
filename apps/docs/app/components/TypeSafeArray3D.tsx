'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, OrbitControls, Center } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';

function AnimatedText() {
  const meshRef = useRef<Mesh>(null);
  const initialPosition = new Vector3(0, 0, 0);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();

      // Vertical floating motion
      meshRef.current.position.y = initialPosition.y + Math.sin(time * 0.5) * 0.1;

      // Gentle rotation
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.05;
      meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.05;
      meshRef.current.rotation.z = Math.sin(time * 0.4) * 0.05;
    }
  });

  return (
    <Center>
      <mesh ref={meshRef}>
        <Text3D
          font="/fonts/Bagel Fat One_Regular.json"
          size={0.6}
          height={0.5}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          TypeSafeArray
          <meshNormalMaterial />
        </Text3D>
      </mesh>
    </Center>
  );
}

const TypeSafeArray3D: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedText />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TypeSafeArray3D;
