import React, {useRef} from 'react'
import './App.scss';
import { Canvas, useFrame } from "react-three-fiber";
import { Box } from '@react-three/drei'
import { point } from 'cli-spinners';

const SpinningBox = ({position, args}) => {
  const mesh = useRef(null);

  useFrame(()  => (mesh.current.rotation.x = mesh.current.rotation.x += 0.01));

  return (
    <mesh  position={position}  ref={mesh}> 
    <boxBufferGeometry attach='geometry' args = {args}/>
    <meshStandardMaterial attach='material' color="lightblue"/>
  </mesh>
  );
}



function App() {

  return (
   <>
   <Canvas colorManagement camera={{position: [-5,2,10] , fov: 20}}> 
     <ambientLight intensity={.12} />
     <directionalLight position={[10,0,-10]} intensity={.5} shadow-mapSize-shadowMapWidth={1024} shadow-mapSize-shadowMapHeight={1024} shadow-camera-far={50} shadow-camera-left={-10} shadow-camera-right={-10} shadow-camera-bottom={-10} shadow-camera-top={-10}/>
     <pointLight position={[-20,20,-10]} intensity={1.2} />
   <SpinningBox position={[0, 1, 0]} args={[3,1,1]}/>
   <SpinningBox position={[-2, 1, -5]}/>
   <SpinningBox position={[5, 1, -2]}/>

   </Canvas>
   </>
  );
}

export default App;
