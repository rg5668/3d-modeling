import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return <Html center>{Math.round(progress)} % loaded</Html>;
}
