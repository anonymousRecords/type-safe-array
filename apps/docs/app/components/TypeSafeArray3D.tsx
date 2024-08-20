'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text3D, OrbitControls, Center } from '@react-three/drei';
import { Mesh, Vector3, Box3 } from 'three';
import * as THREE from 'three';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

function AnimatedText() {
  const groupRef = useRef<THREE.Group>(null);
  const textRef = useRef<Mesh>(null);
  const { viewport } = useThree();
  const [textSize, setTextSize] = useState(0.6);
  const isMobile = useIsMobile();

  useEffect(() => {
    const newSize = isMobile ? 0.6 : Math.min(0.6, viewport.width * 0.1);
    setTextSize(newSize);
  }, [viewport, isMobile]);

  useEffect(() => {
    if (textRef.current) {
      const box = new Box3().setFromObject(textRef.current);
      const center = box.getCenter(new Vector3());

      textRef.current.position.sub(center);
    }
  }, [textSize]);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      const floatScale = isMobile ? 0.05 : 0.1;

      groupRef.current.position.y = Math.sin(time * 0.5) * floatScale;

      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.05;
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.05;
      groupRef.current.rotation.z = Math.sin(time * 0.4) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <mesh ref={textRef}>
          <Text3D
            font="/fonts/Bagel Fat One_Regular.json"
            size={textSize}
            height={textSize * 0.8}
            curveSegments={isMobile ? 8 : 12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={isMobile ? 3 : 5}
          >
            TypeSafeArray
            <meshNormalMaterial />
          </Text3D>
        </mesh>
      </Center>
    </group>
  );
}

const TypeSafeArray3D: React.FC = () => {
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 5]);
  const isMobile = useIsMobile();

  useEffect(() => {
    setCameraPosition(isMobile ? [0, 0, 6] : [0, 0, 5]);
  }, [isMobile]);

  return (
    <div className={`w-full ${isMobile ? 'h-[50vh]' : 'h-screen'} overflow-hidden`}>
      <Canvas camera={{ position: cameraPosition }} className="touch-none">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedText />
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default TypeSafeArray3D;
