"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, SpotLight } from "@react-three/drei";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  return (
    <primitive object={gltf.scene} scale={2.0} />
  );
};

export function RenderHero() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls autoRotate enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}
