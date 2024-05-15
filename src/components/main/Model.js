/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/room.gltf')
  return (
    <group {...props} dispose={null}>
        
      <group position={[0.4, -2, 0]}>
       
         
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['Wire Normal']}
          position={[0.161, 0.946, -2.013]}
          scale={[2.198, 0.117, 0.516]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['monitor body normal']}
          position={[1.977, 0.655, -1.518]}
          scale={[0.103, 0.02, 0.021]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['monitor body normal']}
          position={[1.977, 0.465, -1.518]}
          scale={[0.103, 0.02, 0.021]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['monitor body normal']}
          position={[1.977, 0.279, -1.518]}
          scale={[0.103, 0.02, 0.021]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['monitor body normal']}
          position={[1.977, 0.089, -1.518]}
          scale={[0.103, 0.02, 0.021]}
        />
        <group position={[0.188, 2.575, 0.289]} scale={[2.744, 2.88, 3.085]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials['Wall Normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_2.geometry}
            material={materials['Wall Normal']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.light}
          position={[0.159, 3.071, -2.517]}
          scale={[1.931, 1.337, 0.053]}
        />
        <group
          position={[-2.189, 3.011, 0.695]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.034, -1.031, -1.789]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={materials['monitor body normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_2.geometry}
            material={materials.screen}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Wire Normal']}
          position={[-1.907, 1.055, 2.895]}
          scale={[0.332, 1.254, 0.26]}
        />
        <group
          position={[-2.261, 4.085, -2.45]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.107, -0.717, -0.136]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_1.geometry}
            material={materials['light case normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_2.geometry}
            material={materials.light}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials.light}
          position={[2.659, 1.29, -2.355]}
          scale={[0.05, 1.443, 0.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials['Wire Normal']}
          position={[-2.118, 2.305, -1.801]}
          scale={[0.251, 0.047, 0.428]}
        />
        <group position={[0.609, -0.091, -0.791]} rotation={[Math.PI, 0, Math.PI]} scale={1.514}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Arms.geometry}
            material={materials['light case normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chair_Base_2.geometry}
            material={materials['light case normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chair_Base_Rods.geometry}
            material={materials['light case normal']}
          />
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube026_1.geometry}
              material={materials.rubber}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube026_2.geometry}
              material={materials['Light iron']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials['Light iron']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials.rubber}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials.rubber}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Main_Chair.geometry}
            material={materials['light case normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Part.geometry}
            material={materials.yellow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials.yellow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials.light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials.yellow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010.geometry}
            material={materials.yellow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Screw.geometry}
            material={materials['Wire Normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Screw001.geometry}
            material={materials['Wire Normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tyres.geometry}
            material={materials['Wire Normal']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          position={[0.336, 1.08, -2.211]}
          scale={[0.358, 0.399, 0.188]}
        />
        <group
          position={[0.332, 1.828, -2.403]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.947, 0.47, 0.47]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials['monitor body normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials.screen}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus.geometry}
          material={materials['monitor body normal']}
          position={[2.652, 0.038, -2.353]}
          scale={[0.174, 0.456, 0.174]}
        />
        <group position={[-2.136, 2.518, -1.857]} scale={[0.183, 0.179, 0.358]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_1.geometry}
            material={materials['monitor body normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_2.geometry}
            material={materials['Wire Normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_3.geometry}
            material={materials.screen}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials['light case normal']}
          position={[-1.99, 0.845, 0.315]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.421, 0.069, 0.426]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials['Wire Normal']}
          position={[-1.752, 0.836, -0.832]}
          scale={[0.279, 0.884, 0.279]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials['Wire Normal']}
          position={[-2.262, 1.621, 1.072]}
          scale={[0.11, 0.106, 1.341]}
        />
        <group position={[-0.145, 4.658, -2.456]} scale={[1.142, 0.09, 0.081]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube036_1.geometry}
            material={materials['light case normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube036_2.geometry}
            material={materials.light}
          />
        </group>
        <group
          position={[2.174, 4.073, -1.866]}
          rotation={[0.162, -0.146, 0.162]}
          scale={[0.62, 0.433, 0.06]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037.geometry}
            material={materials['monitor body normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037_1.geometry}
            material={materials.screen}
          />
        </group>
        <group
          position={[-1.666, 4.452, 2.555]}
          rotation={[2.012, 1.268, -2.033]}
          scale={[0.544, 0.45, 0.127]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube038_1.geometry}
            material={materials['monitor body normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube038_2.geometry}
            material={materials.screen}
          />
        </group>
        <group
          position={[-1.69, 4.16, -0.314]}
          rotation={[0.583, 1.133, -0.625]}
          scale={[0.619, 0.328, 0.059]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_1.geometry}
            material={materials['monitor body normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_2.geometry}
            material={materials.screen}
          />
        </group>
        <group
          position={[-1.69, 4.336, 1.234]}
          rotation={[1.647, 1.335, -1.581]}
          scale={[0.429, 0.341, 0.042]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_1.geometry}
            material={materials['monitor body normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_2.geometry}
            material={materials.screen}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials['monitor body normal']}
          position={[-2.27, 3.352, -1.676]}
          scale={[0.165, 0.438, 0.235]}
        />
        <group
          position={[-2.015, 2.918, 2.863]}
          rotation={[0, 0.877, 0]}
          scale={[0.536, 2.009, 0.536]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube042_1.geometry}
            material={materials['light case normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube042_2.geometry}
            material={materials.light}
          />
        </group>
        <group
          position={[2.419, 3.169, -2.163]}
          rotation={[0.162, -0.146, 0.162]}
          scale={[0.344, 0.293, 0.04]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube043.geometry}
            material={materials['monitor body normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube043_1.geometry}
            material={materials.screen}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials['Wire Normal']}
          position={[-1.434, 5.25, -1.693]}
          scale={[0.054, 0.039, 0.054]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials['Wire Normal']}
          position={[-2.09, 5.344, -1.443]}
          scale={0.069}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials['Wire Normal']}
          position={[2.771, 5.217, -1.465]}
          rotation={[0, 0.673, 0]}
          scale={[0.076, 0.058, 0.076]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials['Wire Normal']}
          position={[2.613, 5.292, -1.465]}
          rotation={[0, 0.673, 0]}
          scale={[0.061, 0.047, 0.061]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials['Wire Normal']}
          position={[-1.919, 5.201, 3.195]}
          rotation={[-0.032, 0, 0]}
          scale={0.06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials['Wire Normal']}
          position={[-1.319, 5.216, 1.466]}
          scale={[0.063, 0.073, 0.063]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials['Wire Normal']}
          position={[-1.706, 5.267, -1.524]}
          scale={[0.059, 0.054, 0.059]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials['Wire Normal']}
          position={[-1.121, 5.163, 2.704]}
          scale={0.043}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials['Wall Normal']}
          position={[1.2, 5.041, 1.196]}
          scale={[0.497, 0.308, 0.497]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={materials['Wire Normal']}
          position={[0.038, 5.237, -1.412]}
          rotation={[0, 0.306, 0]}
          scale={[0.056, 0.034, 0.056]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={materials['monitor body normal']}
          position={[-1.498, 0.263, -1.934]}
          scale={[0.141, 0.358, 0.215]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials['Wire Normal']}
          position={[-1.946, 2.502, -1.679]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.098, 0.015, 0.098]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['Wire Normal']}
          position={[-1.946, 2.499, -1.679]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.141, 0.022, 0.141]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['monitor body normal']}
          position={[1.728, 1.678, -1.94]}
          rotation={[Math.PI / 2, 0.61, 0]}
          scale={[0.103, 0.052, 0.103]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials['monitor body normal']}
          position={[-1.153, 1.678, -1.94]}
          rotation={[Math.PI / 2, 0.61, 0]}
          scale={[0.103, 0.052, 0.103]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={materials['Wall Normal']}
          position={[4.057, 4.736, -2.656]}
          scale={[0.432, 0.424, 0.047]}
        />
        <group position={[3.78, 3.177, -2.656]} scale={[0.432, 0.424, 0.047]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_1.geometry}
            material={materials['Wall Normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_2.geometry}
            material={materials.screen}
          />
        </group>
        <group
          position={[-2.565, 1.987, 4.313]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.516, 0.506, 0.057]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018_1.geometry}
            material={materials['Wall Normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018_2.geometry}
            material={materials.light}
          />
        </group>
        <group
          position={[-2.407, 4.261, 4.116]}
          rotation={[Math.PI, Math.PI / 2, 0]}
          scale={[0.255, 0.524, 0.047]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_1.geometry}
            material={materials['Wall Normal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_2.geometry}
            material={materials.screen}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials.light}
          position={[3.708, 4.581, -2.568]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.451, 0.645, 0.645]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={materials['light.003']}
          position={[4.067, 4.75, -2.568]}
          scale={[0.413, 0.392, 0.047]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials['light.004']}
          position={[3.622, 3.324, -2.568]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.517, 0.548, 0.548]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials['light.005']}
          position={[-2.405, 1.808, 4.582]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.704, 0.747, 0.747]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003.geometry}
          material={materials.light}
          position={[-2.164, 4.989, 4.184]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.312, 0.33, 0.33]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/room.gltf')
