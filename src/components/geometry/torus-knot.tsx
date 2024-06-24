import { useRef } from "react";

import {
  Color,
  Vector3,
  Euler,
  TorusKnotGeometryProps,
} from "@react-three/fiber";
import { Mesh } from "three";
import { MeshWobbleMaterial } from "@react-three/drei";

type TorusProps = {
  position: Vector3;
  color?: Color;
  rotate: Euler;
  args: TorusKnotGeometryProps["args"];
};

export const TorusKnot = ({ position, args, rotate, color }: TorusProps) => {
  const torusKnotRef = useRef<Mesh>(null!);

  return (
    <mesh position={position} rotation={rotate} ref={torusKnotRef}>
      <torusKnotGeometry args={args} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial factor={5} />
    </mesh>
  );
};
