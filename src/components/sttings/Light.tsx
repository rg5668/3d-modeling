import { LightProps } from "../../types/canvas";

const Light = ({ position, type, intensity = 0.5 }: LightProps) => {
  return (
    <>
      {type === "ambient" ? (
        <ambientLight position={position} intensity={intensity} />
      ) : (
        <directionalLight position={position} intensity={intensity} />
      )}
    </>
  );
};

export default Light;
