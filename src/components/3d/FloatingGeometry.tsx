import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Floating Cubes */}
      {Array.from({ length: 15 }, (_, i) => (
        <Float
          key={`cube-${i}`}
          speed={1 + Math.random() * 2}
          rotationIntensity={0.5 + Math.random() * 0.5}
          floatIntensity={0.5 + Math.random() * 0.5}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 20
            ]}
            scale={0.2 + Math.random() * 0.3}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={Math.random() > 0.5 ? "#3b82f6" : "#10b981"}
              transparent
              opacity={0.6}
              emissive={Math.random() > 0.5 ? "#1e3a8a" : "#065f46"}
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}

      {/* Floating Spheres */}
      {Array.from({ length: 10 }, (_, i) => (
        <Float
          key={`sphere-${i}`}
          speed={1 + Math.random() * 2}
          rotationIntensity={0.3 + Math.random() * 0.3}
          floatIntensity={0.3 + Math.random() * 0.3}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 25,
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 25
            ]}
            scale={0.1 + Math.random() * 0.2}
          >
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
              color="#10b981"
              transparent
              opacity={0.7}
              emissive="#065f46"
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>
      ))}

      {/* Floating Torus */}
      {Array.from({ length: 5 }, (_, i) => (
        <Float
          key={`torus-${i}`}
          speed={0.5 + Math.random()}
          rotationIntensity={0.8 + Math.random() * 0.4}
          floatIntensity={0.4 + Math.random() * 0.4}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 30,
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 30
            ]}
            scale={0.15 + Math.random() * 0.15}
          >
            <torusGeometry args={[1, 0.4, 16, 100]} />
            <meshStandardMaterial
              color="#3b82f6"
              transparent
              opacity={0.5}
              emissive="#1e3a8a"
              emissiveIntensity={0.4}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default FloatingGeometry;