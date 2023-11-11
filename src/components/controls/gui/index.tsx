import { DatGuiControlProps } from "../../../types/canvas";
import DatGui, { DatButton, DatFolder, DatNumber } from "react-dat-gui";
import "./index.css";

const DatGuiControl = ({
  cameraCoordinate,
  handleUpdate,
  handlePosition,
  isFloorPlan,
  handleFloorPlan,
}: DatGuiControlProps) => {
  return (
    <>
      <DatGui data={cameraCoordinate} onUpdate={handleUpdate}>
        <DatFolder
          title="Angle Chane (Perspective, Orthographic)"
          closed={true}
        >
          <DatButton
            label="Perspective"
            onClick={() => handleFloorPlan(true)}
          />
          <DatButton
            label="Orthographic"
            onClick={() => handleFloorPlan(false)}
          />
        </DatFolder>

        {isFloorPlan ? (
          <DatFolder title="Perspective Camera Control" closed={true}>
            <DatNumber
              path="x_3d"
              label="x (좌우)"
              min={-100}
              max={100}
              step={1}
            />
            <DatNumber
              path="y_3d"
              label="y (상하)"
              min={-20}
              max={20}
              step={1}
            />
            <DatNumber
              path="z_3d"
              label="z (앞뒤)"
              min={-100}
              max={100}
              step={3}
            />
            <DatNumber
              path="rotation_y_3d"
              label="rotationY (회전)"
              min={-15}
              max={15}
              step={0.01}
            />

            <DatButton
              label="Zoom in (+)"
              onClick={() => handlePosition("zoom_in")}
            />
            <DatButton
              label="Zoom out (-)"
              onClick={() => handlePosition("zoom_out")}
            />
            <DatButton
              label="자동 회전"
              onClick={() => handlePosition("start")}
            />
            <DatButton
              label="자동 회전 멈춤"
              onClick={() => handlePosition("stop")}
            />
            <DatButton
              label="위치 초기화"
              onClick={() => handlePosition("reset")}
            />
          </DatFolder>
        ) : (
          <DatFolder title="Orthographic Camera Control" closed={true}>
            <DatNumber
              path="x_2d"
              label="x (좌우)"
              min={-100}
              max={100}
              step={1}
            />
            <DatNumber
              path="z_2d"
              label="z (앞뒤)"
              min={-100}
              max={100}
              step={3}
            />
            <DatNumber
              path="rotation_y_2d"
              label="rotationY (회전)"
              min={-15}
              max={15}
              step={0.01}
            />
            <DatButton
              label="Zoom in (+)"
              onClick={() => handlePosition("zoom_in")}
            />
            <DatButton
              label="Zoom out (-)"
              onClick={() => handlePosition("zoom_out")}
            />
            <DatButton
              label="자동 회전"
              onClick={() => handlePosition("start")}
            />
            <DatButton
              label="자동 회전 멈춤"
              onClick={() => handlePosition("stop")}
            />
            <DatButton
              label="위치 초기화"
              onClick={() => handlePosition("reset")}
            />
          </DatFolder>
        )}
      </DatGui>
    </>
  );
};

export default DatGuiControl;
