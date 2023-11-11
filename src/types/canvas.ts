import { Vector3 } from "@react-three/fiber";

export type DatGuiControlProps = {
  cameraCoordinate: CameraCoordinateProps;
  handleUpdate: (cameraCoordinate: CameraCoordinateProps) => void;
  handlePosition: (option: string) => void;
  handleFloorPlan: (option: boolean) => void;
  isFloorPlan: boolean;
};

export type CameraCoordinateProps = {
  x_3d: number;
  y_3d: number;
  z_3d: number;
  rotation_y_3d: number;
  x_2d: number;
  z_2d: number;
  rotation_y_2d: number;
};

export type SceneProps = {
  cameraCoordinate: CameraCoordinateProps;
  isFloorPlan: boolean;
};

export type CameraProps = {
  position: number | Vector3;
  fov: number;
  zoom: number;
  far: number;
  type: "perspective" | "orthographic";
};

export type LightProps = {
  position: number | Vector3;
  intensity?: number;
  type: "ambient" | "ambient";
};

export type MeshProps = {
  type?: string;
  args?: [
    width?: number | undefined,
    height?: number | undefined,
    depth?: number | undefined,
    widthSegments?: number | undefined,
    heightSegments?: number | undefined,
    depthSegments?: number | undefined
  ];
  color?: string;
  geometry?: string;
  material?: string;
};

export type ZoomControl = {
  perspective: number;
  orthographic: number;
};
