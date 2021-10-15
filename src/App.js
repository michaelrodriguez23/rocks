import React, {useRef} from 'react'
import './App.scss';
import { Canvas, useFrame } from "react-three-fiber";
import { softShadows } from '@react-three/drei'

softShadows();
const SpinningBox = ({position, args, color}) => {
  const mesh = useRef(null);

  useFrame(()  => (mesh.current.rotation.x = mesh.current.rotation.x += 0.01));

  return (
    <mesh castShadow position={position}  ref={mesh}> 
    <boxBufferGeometry attach='geometry' args = {args}/>
    <meshStandardMaterial attach='material' color={color} />
  </mesh>
  );
}



function App() {

  return (
   <>
   <Canvas
    shadows
     colorManagement
      camera={{position: [-5,2,10] , fov: 60}}> 
     <ambientLight intensity={.3} />
     <directionalLight
      castShadows
       position={[10,0,-10]} 
       intensity={.5}
        shadow-mapSize-shadowMapWidth={1024}
         shadow-mapSize-shadowMapHeight={1024}
          shadow-camera-far={50}
           shadow-camera-left={-10}
            shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
              />
     <pointLight position={[-10,0,-20]} intensity={.45} />
     <pointLight position={[0,-10,0]} intensity={1.5} />
     
     <group>
      <mesh  
      receiveShadow
       rotation={[-Math.PI / 2, 0, 0]}
        position={[0,-3,0]}>

        <planeBufferGeometry attach='geometry' args={[100,100]}/>
        {/* This Will Need to cast a shadow */}
        <shadowMaterial  attach='material'  opacity={0.3}/>
        </mesh> 
    </group>

   <SpinningBox position={[0, 1, 0]} args={[3,2,1]} color="lightblue"/>
   <SpinningBox position={[-2, 1, -5]} color='red'/>
   <SpinningBox position={[5, 1, -2]} color='red'/>
   
   </Canvas>
   </>
  );
}

export default App;
