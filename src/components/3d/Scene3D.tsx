import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import NeuralNetwork from './NeuralNetwork';
import ParticleField from './ParticleField';

interface Scene3DProps {
  className?: string;
}

const Scene3D = ({ className }: Scene3DProps) => {
  return (
    <div className={className}>
      <Canvas
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
        
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#3b82f6" />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#10b981" />
        
        <Suspense fallback={null}>
          <ParticleField />
          <NeuralNetwork />
        </Suspense>
        
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;