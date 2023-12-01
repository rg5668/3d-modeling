import { Suspense, useRef, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import Loader from '../components/layout/Loader';
import Scene from '../components/scenes';
import { CameraCoordinateProps, ZoomControl } from '../types/canvas';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import Camera from '../components/sttings/Camera';
import Light from '../components/sttings/Light';
import DatGuiControl from '../components/controls/gui';
import CanvasLayout from '../components/layout/CanvasLayout';

function Home() {
    const orbitControl = useRef<OrbitControlsImpl>(null);
    const [isFloorPlan, setIsFloorPlan] = useState<boolean>(true);
    const [cameraCoordinate, setCameraCoordinate] = useState<CameraCoordinateProps>({
        x_3d: 0,
        y_3d: 0,
        z_3d: 0,
        rotation_y_3d: 0,
        x_2d: 0,
        z_2d: 0,
        rotation_y_2d: 0,
    });

    const [zoomControl, setZoomControl] = useState<ZoomControl>({
        perspective: 1,
        orthographic: 4,
    });
    const handleUpdate = (newData: CameraCoordinateProps) => {
        setCameraCoordinate((prevState) => ({
            ...prevState,
            ...newData,
        }));
    };

    const handleFloorPlan = (option: boolean) => {
        setIsFloorPlan(option);
        setCameraCoordinate({
            x_3d: 0,
            y_3d: 0,
            z_3d: 0,
            rotation_y_3d: 0,
            x_2d: 0,
            z_2d: 0,
            rotation_y_2d: 0,
        });
    };

    const handlePosition = (option: string) => {
        if (!orbitControl.current) return;
        switch (option) {
            case 'start':
                orbitControl.current.autoRotate = true;
                orbitControl.current.autoRotateSpeed = 4;
                break;
            case 'stop':
                orbitControl.current.autoRotate = false;
                break;
            case 'reset':
                setCameraCoordinate({
                    x_3d: 0,
                    y_3d: 0,
                    z_3d: 0,
                    rotation_y_3d: 0,
                    x_2d: 0,
                    z_2d: 0,
                    rotation_y_2d: 0,
                });
                setZoomControl({
                    perspective: 1,
                    orthographic: 4,
                });

                orbitControl.current.autoRotate = false;
                orbitControl.current.object.position.x = 0;
                orbitControl.current.object.position.y = -40;
                orbitControl.current.object.position.z = -30;
                orbitControl.current.target.x = 0.2;
                orbitControl.current.target.y = 12;
                orbitControl.current.target.z = 0;
                break;
            case 'zoom_in':
                if (isFloorPlan) {
                    setZoomControl({
                        perspective: zoomControl.perspective + 0.2,
                        orthographic: 3.5,
                    });
                } else {
                    setZoomControl({
                        perspective: 1,
                        orthographic: zoomControl.orthographic + 0.2,
                    });
                }
                break;
            case 'zoom_out':
                if (isFloorPlan) {
                    if (zoomControl.perspective <= 0.5) return;
                    setZoomControl({
                        perspective: zoomControl.perspective - 0.2,
                        orthographic: 3.5,
                    });
                } else {
                    if (zoomControl.orthographic <= 2.5) return;
                    setZoomControl({
                        perspective: 1,
                        orthographic: zoomControl.orthographic - 0.2,
                    });
                }
                break;
        }
    };

    return (
        <>
            <DatGuiControl
                cameraCoordinate={cameraCoordinate}
                handleUpdate={handleUpdate}
                handlePosition={handlePosition}
                handleFloorPlan={handleFloorPlan}
                isFloorPlan={isFloorPlan}
            />
            <CanvasLayout>
                <Suspense fallback={<Loader />}>
                    {isFloorPlan ? (
                        <>
                            <OrbitControls
                                enableDamping={true}
                                maxDistance={200}
                                minDistance={1}
                                maxZoom={100}
                                minZoom={1}
                                maxPolarAngle={Math.PI / 2}
                                minPolarAngle={Math.PI / 4}
                                target={[0.2, 12, 0]}
                                ref={orbitControl}
                            />
                            <Camera
                                type={'perspective'}
                                position={[0, -30, -10]}
                                fov={75}
                                zoom={zoomControl.perspective}
                                far={1000}
                            />
                        </>
                    ) : (
                        <>
                            <OrbitControls
                                enableDamping={true}
                                maxDistance={200}
                                minDistance={1}
                                maxZoom={100}
                                minZoom={1}
                                maxPolarAngle={-Math.PI / 2}
                                minPolarAngle={-Math.PI / 2}
                                target={[0.2, 12, 0]}
                                ref={orbitControl}
                            />
                            <Camera
                                type={'orthographic'}
                                position={[0, -40, -30]}
                                fov={75}
                                zoom={zoomControl.orthographic}
                                far={1000}
                            />
                        </>
                    )}
                    <Light type={'ambient'} position={[20, 10, 10]} />
                    <Scene cameraCoordinate={cameraCoordinate} isFloorPlan={isFloorPlan} />
                </Suspense>
            </CanvasLayout>
        </>
    );
}

export default Home;
