import { MeshProps } from "../../types/canvas";

export default function Mesh({
  type = "box",
  args = [1, 1, 1],
  color = "red",
  geometry = "geometry",
  material = "material",
}: MeshProps) {
  return (
    <>
      {type === "sphere" ? (
        <mesh>
          <sphereGeometry attach={geometry} args={args} />
          <meshBasicMaterial attach={material} color={color} />
        </mesh>
      ) : (
        <mesh castShadow>
          <boxGeometry attach={geometry} args={args} />
          <meshBasicMaterial attach={material} color={color} />
        </mesh>
      )}
    </>
  );
}
