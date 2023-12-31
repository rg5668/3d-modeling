import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { CameraProps } from "../../types/canvas";

export default function Camera({
  position,
  fov,
  zoom,
  far,
  type,
}: CameraProps) {
  return (
    <>
      {type === "perspective" ? (
        <PerspectiveCamera
          makeDefault
          position={position}
          fov={fov}
          zoom={zoom}
          far={far}
        />
      ) : (
        <OrthographicCamera
          makeDefault
          position={position}
          zoom={zoom}
          far={far}
        />
      )}
    </>
  );
}
