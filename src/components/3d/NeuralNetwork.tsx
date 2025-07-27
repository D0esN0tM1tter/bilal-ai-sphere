import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

const NeuralNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.Group>(null);

  // Generate neural network nodes
  const nodes = useMemo(() => {
    const nodePositions = [];
    const layers = [8, 12, 16, 12, 8]; // Network architecture
    const layerSpacing = 3;
    const nodeSpacing = 0.8;

    layers.forEach((nodeCount, layerIndex) => {
      for (let i = 0; i < nodeCount; i++) {
        const x = (layerIndex - layers.length / 2) * layerSpacing;
        const y = (i - nodeCount / 2) * nodeSpacing;
        const z = (Math.random() - 0.5) * 2;
        nodePositions.push(x, y, z);
      }
    });

    return new Float32Array(nodePositions);
  }, []);

  // Generate connections between nodes
  const connections = useMemo(() => {
    const lines = [];
    let nodeIndex = 0;
    const layers = [8, 12, 16, 12, 8];
    
    for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex++) {
      const currentLayerNodes = layers[layerIndex];
      const nextLayerNodes = layers[layerIndex + 1];
      
      for (let i = 0; i < currentLayerNodes; i++) {
        for (let j = 0; j < nextLayerNodes; j++) {
          if (Math.random() > 0.3) { // Only show some connections
            const currentIndex = nodeIndex + i;
            const nextIndex = nodeIndex + currentLayerNodes + j;
            
            const start = new THREE.Vector3(
              nodes[currentIndex * 3],
              nodes[currentIndex * 3 + 1],
              nodes[currentIndex * 3 + 2]
            );
            const end = new THREE.Vector3(
              nodes[nextIndex * 3],
              nodes[nextIndex * 3 + 1],
              nodes[nextIndex * 3 + 2]
            );
            
            lines.push({ start, end });
          }
        }
      }
      nodeIndex += currentLayerNodes;
    }
    
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
    
    if (linesRef.current) {
      linesRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group>
      {/* Neural Network Nodes */}
      <Points ref={pointsRef} positions={nodes} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>

      {/* Neural Network Connections */}
      <group ref={linesRef}>
        {connections.map((connection, index) => (
          <Line
            key={index}
            points={[connection.start, connection.end]}
            color="#10b981"
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        ))}
      </group>
    </group>
  );
};

export default NeuralNetwork;