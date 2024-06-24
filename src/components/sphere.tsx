import { useRef, useState } from "react";

import { SphereGeometryProps, Vector3, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const SPEED = 1;

type SphereProps = {
  position: Vector3;
  args: SphereGeometryProps["args"];
  color?: string;
  wireframe?: boolean;
};

export const Sphere = ({ position, args, color, wireframe }: SphereProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const sphereRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    sphereRef.current.position.z = Math.sin(state.clock.elapsedTime);

    if (isHovered) {
      sphereRef.current.rotation.x += delta * SPEED;
    }
  });

  return (
    <mesh
      ref={sphereRef}
      position={position}
      onPointerEnter={(e) => (e.stopPropagation, setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
    >
      <sphereGeometry args={args} />
      <meshStandardMaterial
        color={isHovered ? "red" : color}
        wireframe={wireframe}
      />
    </mesh>
  );
};
