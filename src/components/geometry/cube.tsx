import { useRef } from "react";

import { Color, Vector3, BoxGeometryProps, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

type CubeProps = {
  position?: Vector3;
  args: BoxGeometryProps["args"];
  color?: Color;
  animateRotate?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
};

const SPEED = 0.5;

export const Cube = ({ position, args, color, animateRotate }: CubeProps) => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    switch (animateRotate) {
      case "top":
        meshRef.current.rotation.x -= delta * SPEED;
        break;
      case "bottom":
        meshRef.current.rotation.x += delta * SPEED;
        break;
      case "left":
        meshRef.current.rotation.y -= delta * SPEED;
        break;
      case "right":
        meshRef.current.rotation.y += delta * SPEED;
        break;
      case "top-left":
        meshRef.current.rotation.x -= delta * SPEED;
        meshRef.current.rotation.y -= delta * SPEED;
        break;
      case "top-right":
        meshRef.current.rotation.x -= delta * SPEED;
        meshRef.current.rotation.y += delta * SPEED;
        break;
      case "bottom-left":
        meshRef.current.rotation.x += delta * SPEED;
        meshRef.current.rotation.y -= delta * SPEED;
        break;
      case "bottom-right":
        meshRef.current.rotation.x += delta * SPEED;
        meshRef.current.rotation.y += delta * SPEED;
        break;
      default:
        meshRef.current.position.z = Math.sin(state.clock.elapsedTime);
        break;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
