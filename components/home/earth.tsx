'use client';
import { Canvas, useLoader } from '@react-three/fiber'
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { TextureLoader } from 'three'
import { motion } from 'framer-motion-3d';

const Earth = () => {
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ['start end', 'end start']
  })
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    '/color.jpg',
    '/normal.png',
    '/occlusion.jpg'
  ])
  
  return (
    <Canvas ref={scene} style={{ height: '400px', width: '100%' }}>
      <ambientLight intensity={0.2} />
      <directionalLight intensity={5.5} position={[4, 0, -.25]} />
      <motion.mesh scale={3.4} rotation-y={scrollYProgress}>
        <sphereGeometry args={[1, 64, 64]}/>
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap}/>
      </motion.mesh>
    </Canvas>
  )
}

export default Earth