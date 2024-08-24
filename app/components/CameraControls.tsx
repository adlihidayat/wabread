import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const CameraControls = ({ navStatus }: any) => {
  const { camera } = useThree();
  const controlsRef = useRef<any>();
  const [rotationLimit, setRotationLimit] = useState<number[]>([
    Infinity,
    -Infinity,
  ]);
  const [azimuthLimit, setAzimuthLimit] = useState<number[]>([
    Infinity,
    -Infinity,
  ]);

  useEffect(() => {
    switch (navStatus) {
      case 1:
        camera.position.set(1.3, -0, -1.12);
        if (controlsRef.current) {
          controlsRef.current.target.set(1.4, -0.9, -1.3); // Change the target point
          controlsRef.current.update(); // Update controls to apply the new target
        }
        setRotationLimit([Math.PI / 2.8, Math.PI / 2.1]); // Limit vertical rotation to 45 degrees
        setAzimuthLimit([Math.PI / 2.3, Math.PI / 4]); // Limit horizontal rotation to 45 degrees
        break;
      case 2:
        camera.position.set(1.4, -0.3, 0.5);
        if (controlsRef.current) {
          controlsRef.current.target.set(1, -0.35, 0.5); // Change the target point
          controlsRef.current.update(); // Update controls to apply the new target
        }
        setRotationLimit([Math.PI / 2.8, Math.PI / 2.1]); // Limit vertical rotation to 45 degrees
        setAzimuthLimit([Math.PI / 1.9, Math.PI / 2.5]);
        break;
      case 3:
        camera.position.set(0.1, 0.3, 0.05);
        if (controlsRef.current) {
          controlsRef.current.target.set(0.6, -0.35, -0.78); // Change the target point
          controlsRef.current.update(); // Update controls to apply the new target
        }
        setRotationLimit([Math.PI / 2.3, Math.PI / 2.1]); // Limit vertical rotation to 45 degrees
        setAzimuthLimit([Math.PI / 2, Math.PI / 2.2]);
        break;
      case 4:
        camera.position.set(-1.45, 0.2, -0.5);
        if (controlsRef.current) {
          controlsRef.current.target.set(-1.0, -0.4, -0.48); // Change the target point
          controlsRef.current.update(); // Update controls to apply the new target
        }
        setRotationLimit([Math.PI / 2.3, Math.PI / 2.1]); // Limit vertical rotation to 45 degrees
        setAzimuthLimit([Math.PI / 0.65, Math.PI / 0.7]);
        break;
      default:
        camera.position.set(3, 0, 2); // Default position
        if (controlsRef.current) {
          controlsRef.current.target.set(0, 0, 0); // Change the target point
          controlsRef.current.update(); // Update controls to apply the new target
        }
        setRotationLimit([Math.PI / 2.5, Math.PI / 1.9]);
        setAzimuthLimit([Infinity, -Infinity]); // No horizontal rotation limit
    }
  }, [navStatus]);

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.maxPolarAngle = rotationLimit[1];
      controlsRef.current.minPolarAngle = rotationLimit[0];
      controlsRef.current.minAzimuthAngle = azimuthLimit[1];
      controlsRef.current.maxAzimuthAngle = azimuthLimit[0];
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      rotateSpeed={0.35}
      enabled
      autoRotate={navStatus === 0}
      autoRotateSpeed={0.9}
    />
  );
};

export default CameraControls;
