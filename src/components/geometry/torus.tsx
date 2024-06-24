import { useRef } from "react";

import { Color, TorusGeometryProps, Vector3, Euler } from "@react-three/fiber";
import { Mesh } from "three";

type TorusProps = {
  position: Vector3;
  color?: Color;
  rotate: Euler;
  args: TorusGeometryProps["args"];
};

export const Torus = ({ position, args, rotate, color }: TorusProps) => {
  const torusRef = useRef<Mesh>(null!);

  return (
    <mesh position={position} rotation={rotate} ref={torusRef}>
      <torusGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
