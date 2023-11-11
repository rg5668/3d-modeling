import { Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, useEffect, useState } from "react";

type CanvasLayoutType = {
  children: ReactNode;
};

export default function CanvasLayout({ children }: CanvasLayoutType) {
  const [windowRatioSize, setWindowRatioSize] = useState({
    ratio: 0,
  });

  useEffect(() => {
    setWindowRatioSize({
      ratio: window.devicePixelRatio,
    });
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 13] }}
      gl={{ antialias: true }}
      dpr={windowRatioSize.ratio > 1 ? 2 : 1}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Sky
        distance={450000}
        sunPosition={[100, 8, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      {children}
    </Canvas>
  );
}
