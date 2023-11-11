import { SceneProps } from "../../types/canvas";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { BufferGeometry, Material, Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Scene({ cameraCoordinate, isFloorPlan }: SceneProps) {
  const control = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const { scene } = useLoader(GLTFLoader, "/assets/scene.gltf");

  useFrame(() => {
    if (!control.current) return;
    if (isFloorPlan) {
      control.current.position.x = cameraCoordinate.x_3d;
      control.current.position.y = cameraCoordinate.y_3d;
      control.current.position.z = cameraCoordinate.z_3d;
      control.current.rotation.y = cameraCoordinate.rotation_y_3d;
    } else {
      control.current.position.x = cameraCoordinate.x_2d;
      control.current.position.z = cameraCoordinate.z_2d;
      control.current.rotation.y = cameraCoordinate.rotation_y_2d;
    }
  });

  return (
    <group position={[0, 0, 30]}>
      <mesh ref={control}>
        <primitive object={scene} />
      </mesh>
    </group>
  );
}
