import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Hamburger({ isNavOpen, setIsNavOpen }: any) {
  const [navGlowAnimation, setnavGlowAnimation] = useState(false);
  const hasNavBeenOpened = useRef(false);

  useEffect(() => {
    const menuTimeout = setTimeout(() => {
      if (!hasNavBeenOpened.current) {
        setnavGlowAnimation(true);
      }
    }, 10000);
    return () => {
      clearTimeout(menuTimeout);
    };
  }, []);

  const openNav = () => {
    setIsNavOpen(!isNavOpen);
    setnavGlowAnimation(false);
    hasNavBeenOpened.current = true;
  };

  return (
    <>
      {navGlowAnimation && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1.4, 1.4],
            opacity: [0, 0.2, 0, 0],
          }}
          transition={{
            duration: 1,
            times: [0, 0.4, 0.8, 1],
            repeat: Infinity,
          }}
          className="w-10 h-10 rounded-full bg-gray-600 fixed"
        />
      )}
      <button
        onClick={openNav}
        id="menu-hamburger"
        className="fixed flex flex-col justify-center items-center space-y-[3px] w-10 h-10 rounded-full bg-white hover:bg-gray-200 duration-300 ease-in-out z-30"
      >
        <motion.div
          variants={{
            closed: { y: [5, 5, 0], rotate: [45, 0, 0] },
            open: { y: [0, 5, 5], rotate: [0, 0, 45] },
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
          className=" w-4 h-[2px] bg-black"
        />
        <motion.div
          variants={{
            closed: { opacity: [0, 0, 1] },
            open: { opacity: [1, 0, 0] },
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
          className=" w-4 h-[2px] bg-black"
        />
        <motion.div
          variants={{
            closed: { y: [-5, -5, 0], rotate: [-45, 0, 0] },
            open: { y: [0, -5, -5], rotate: [0, 0, -45] },
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
          className=" w-4 h-[2px] bg-black"
        />
      </button>
    </>
  );
}

export default Hamburger;
