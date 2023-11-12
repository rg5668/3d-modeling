import { LightProps } from "../../types/canvas";

export default function Light({ position, type, intensity = 0.5 }: LightProps) {
  return (
    <>
      {type === "ambient" ? (
        <ambientLight position={position} intensity={intensity} />
      ) : (
        <directionalLight position={position} intensity={intensity} />
      )}
    </>
  );
}
