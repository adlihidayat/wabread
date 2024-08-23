"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Experience from "./components/Experience";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Hamburger from "./components/Hamburger";
import Nav from "./components/Nav";
import TWEEN from "@tweenjs/tween.js";
import { MathUtils, Vector3 } from "three";
import { OrbitControls as OrbitControls2 } from "three/examples/jsm/controls/OrbitControls";

// function CustomCamera({ navStatus, cameraPosition, setCameraPosition }: any) {
//   const { camera, gl } = useThree();
//   const controlsRef = useRef<OrbitControls2 | any>(null);

//   useEffect(() => {
//     const [x, y, z] = cameraPosition;
//     camera.position.set(x, y, z);
//     camera.rotation.set(0, MathUtils.degToRad(y), 0);
//   }, [cameraPosition, cameraPosition.y]);

//   const animateCamera = ({
//     position,
//     rotationY,
//     duration = 5000,
//   }: {
//     position: { x: number; y: number; z: number };
//     rotationY: number;
//     duration?: number;
//   }) => {
//     // Position animation
//     new TWEEN.Tween(camera.position)
//       .to(position, duration)
//       .easing(TWEEN.Easing.Quartic.InOut)
//       .start()
//       .onUpdate(() => {
//         if (controlsRef.current) {
//           controlsRef.current.update(); // Ensure controls update during animation
//         }
//       })
//       .onComplete(() => {});

//     // Rotation animation (only animating the Y axis, assuming you want to keep X and Z the same)
//     new TWEEN.Tween(camera.rotation)
//       .to(
//         {
//           x: MathUtils.degToRad(0), // If you want to keep X constant, otherwise pass it as a parameter
//           y: MathUtils.degToRad(rotationY),
//           z: MathUtils.degToRad(0), // If you want to keep Z constant, otherwise pass it as a parameter
//         },
//         duration
//       )
//       .easing(TWEEN.Easing.Quartic.InOut)
//       .start();
//   };

//   useEffect(() => {
//     if (navStatus === 1) {
//       animateCamera({
//         position: { x: 2, y: -0.6, z: -0.9 },
//         rotationY: 60,
//       });
//       controlsRef.current.autoRotate = true; // Auto-rotate only when navStatus is 0
//       controlsRef.current.enabled = true; // Free rotation allowed when navStatus is 0
//       controlsRef.current.reset();
//     } else if (navStatus === 2) {
//       animateCamera({
//         position: { x: 1.5, y: -0.22, z: 0.55 },
//         rotationY: 90,
//       });
//     } else if (navStatus === 3) {
//       animateCamera({
//         position: { x: 1.6, y: -0.18, z: -0.7 },
//         rotationY: 90,
//       });
//     } else if (navStatus === 4) {
//       animateCamera({
//         position: { x: -2, y: -0.18, z: -0.3 },
//         rotationY: -80,
//       });
//     }
//   }, [navStatus]);

//   useFrame(() => {
//     TWEEN.update();
//   });

//   return null;
// }

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
    // Set camera position based on navStatus
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

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navStatus, setNavStatus] = useState(0);
  const [cameraPosition, setCameraPosition] = useState<any>([2.0, 1.4, 0.5]);
  const orbitRef = useRef<any>(null);
  const cameraRef = useRef(null);

  const closeHandler = (state: any) => {
    if (navStatus !== 0) {
      setNavStatus(0);
    }
  };

  useEffect(() => {
    if (orbitRef.current) {
      const controls = orbitRef.current;
      controls.autoRotate = navStatus === 0; // Auto-rotate only when navStatus is 0
      controls.enabled = navStatus === 0; // Enable free rotation only when navStatus is 0

      if (navStatus === 0) {
        controls.reset(); // Ensure controls reset when navStatus is 0
      }

      controls.update();
    }
    console.log(navStatus);
  }, [navStatus]);

  return (
    <main className=" w-full h-screen relative flex justify-center">
      <motion.div
        initial={false}
        animate={isNavOpen ? "open" : "closed"}
        className="fixed z-50 bottom-10 w-10 h-10 rounded-full flex items-center justify-center"
      >
        <Hamburger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <Nav setIsNavOpen={setIsNavOpen} setNavStatus={setNavStatus} />
      </motion.div>
      {navStatus !== 0 && (
        <button
          className="flex flex-col items-center fixed z-20 bottom-28 space-y-2 text-black bg-white rounded-full"
          onClick={closeHandler}
        >
          {/* <button className="bg-white w-7 h-7 rounded-full">x</button> */}
          <span className="  px-5 py-1 rounded-full text-sm">back</span>
        </button>
      )}
      <Canvas shadows gl={{ antialias: false }}>
        <CameraControls navStatus={navStatus} />
        <color attach="background" args={["#d7d7d7"]} />
        <hemisphereLight intensity={1} color="#000000" groundColor="black" />
        <Experience rotation={[-Math.PI / 2, 0, 0]} navStatus={navStatus} />
      </Canvas>
    </main>
  );
}
