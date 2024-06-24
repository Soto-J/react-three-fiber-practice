import { useRef } from "react";

import { DirectionalLight, DirectionalLightHelper } from "three";
import { OrbitControls, useHelper } from "@react-three/drei";

export function Camera() {
  const directionalLightRef = useRef<DirectionalLight>(null!);

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "green");

  return (
    <>
      <directionalLight
        position={[0, 0, 2]}
        intensity={0.5}
        ref={directionalLightRef}
      />
      <ambientLight intensity={0.1} />
      <OrbitControls enableZoom={false} />
    </>
  );
}
