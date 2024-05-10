import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

export function PC() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/pc/scene.gltf"
  );
  
  useEffect(() => {
    gltf.scene.scale.set(0.3,0.3,0.3);
    gltf.scene.position.set(-1.5,0.83,2);
    gltf.scene.rotation.set(0,45,0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
}