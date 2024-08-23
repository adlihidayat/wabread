"use client";
import {
  AccumulativeShadows,
  Html,
  PresentationControls,
  RandomizedLight,
  Stage,
  useGLTF,
} from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";
import { Wabread } from "./Wabread";

function Experience(props: any) {
  const [scale, setScale] = useState(0.8);
  const [position, setPosition] = useState([1, 0, 0.15]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    setScale(1); // Set the scale explicitly when the component mounts
    setPosition([0, 0, 0]);
    setRotation([0, 0, 0]);
  }, []);

  return (
    <Stage>
      <Wabread position={position} scale={scale} rotation={rotation} />
    </Stage>
  );
}

export default Experience;
