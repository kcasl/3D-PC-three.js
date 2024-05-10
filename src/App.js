import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { Ground } from "./Ground";
import { PC } from "./PC";

function ObjectShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.35} />

      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach="background" />

      <spotLight
        color={[0.6, 0.25, 0.4]}
        intensity={2}
        angle={0.5}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
        temporal
        blend={30}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2.5}
        angle={0.5}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
        temporal
        blend={30}

      />

      <Ground />

      <PC />
    </>
  );
}

function App() {
  return (
      <Suspense fallback={null}>
        <Canvas shadows >
          <ObjectShow />
        </Canvas>
      </Suspense>
  );
}

export default App;