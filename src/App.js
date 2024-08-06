import { Canvas } from '@react-three/fiber'
import { useGLTF, AccumulativeShadows, RandomizedLight, Environment, CameraControls } from '@react-three/drei'
import * as THREE from 'three'

const path = require('../src/shoe.gltf')

export default function App() {
  return (
    <Canvas shadows camera={{ position: [5, 0, 5], fov: 35 }}>
      <ambientLight intensity={0.5} />
      <Shoe position={[0, 0, 0.75]} />
      <Shoe position={[0, 0, -0.75]} rotation={[0, 0.5, Math.PI]} scale={-1} />
      <AccumulativeShadows position={[0, -0.5, 0]} temporal frames={100} alphaTest={0.75} opacity={0.9}>
        <RandomizedLight radius={6} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>
      <CameraControls />
      <Environment preset="city" />
    </Canvas>
  )
}

function Shoe(props) {
  const { nodes } = useGLTF(path)
  
  const color1 = new THREE.Color('white')
  const color2 = new THREE.Color('DarkBlue')
  const color3 = new THREE.Color('green')
  const color4 = new THREE.Color('grey')
  const color5 = new THREE.Color('white')
  const color6 = new THREE.Color('orange')
  const color7 = new THREE.Color('pink')

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.shoe.geometry}>
        <meshStandardMaterial attach="material" color={color1} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry}>
        <meshStandardMaterial attach="material" color={color2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.shoe_2.geometry}>
        <meshStandardMaterial attach="material" color={color3} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.shoe_3.geometry}>
        <meshStandardMaterial attach="material" color={color4} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.shoe_4.geometry}>
        <meshStandardMaterial attach="material" color={color5} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.shoe_5.geometry}>
        <meshStandardMaterial attach="material" color={color6} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.shoe_6.geometry}>
        <meshStandardMaterial attach="material" color={color7} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.shoe_7.geometry}>
        <meshStandardMaterial attach="material" color={color1} />
      </mesh>
    </group>
  )
}
