"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Experience from "./components/Experience";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Hamburger from "./components/Hamburger";
import Nav from "./components/Nav";
import CameraControls from "./components/CameraControls";
import Loading from "./components/Loading";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navStatus, setNavStatus] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const orbitRef = useRef<any>(null);

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

  setTimeout(() => {
    setIsLoading(false);
  }, 14100);

  return (
    <>
      {isLoading && <Loading />}
      <main className=" w-full h-screen relative flex justify-center">
        <motion.div
          initial={false}
          animate={isNavOpen ? "open" : "closed"}
          className="fixed z-40 bottom-10 w-10 h-10 rounded-full flex items-center justify-center"
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
    </>
  );
}
