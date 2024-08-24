import React, { useEffect, useState } from "react";
import { delay, motion } from "framer-motion";
import Image from "next/image";

const variantsBG = {
  closed: {
    y: [0, 50],
    opacity: [1, 0],
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  open: {
    y: [0, -800],
    opacity: [1, 1],
    transition: {
      ease: "easeInOut",
      duration: 1.4,
      delay: 12.5,
    },
  },
};

const variants1 = {
  closed: {
    y: [0, 50],
    opacity: [1, 0],
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  open: {
    y: [-25, 0, 0, 0],
    opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0.55, 0],
    transition: {
      duration: 2.5,
      repeat: 3,
      repeatDelay: 0.5,
    },
  },
};
const variants2 = {
  closed: {
    y: [0, 50],
    opacity: [1, 0],
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  open: {
    y: [-25, 0, 0, 0],
    opacity: [0, 1, 1, 1, 1, 1, 1, 0.65, 0, 0],
    transition: {
      duration: 2.5,
      repeat: 3,
      delay: 0.25,
      repeatDelay: 0.5,
    },
  },
};
const variants3 = {
  closed: {
    y: [0, 50],
    opacity: [1, 0],
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  open: {
    y: [-25, 0, 0, 0],
    opacity: [0, 1, 1, 1, 1, 1, 0.8, 0, 0, 0],
    transition: {
      duration: 2.5,
      repeat: 3,
      delay: 0.5,
      repeatDelay: 0.5,
    },
  },
};
const variants4 = {
  closed: {
    y: [0, 50],
    opacity: [1, 0],
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  open: {
    y: [-25, 0, 0, 0],
    opacity: [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    transition: {
      duration: 2.5,
      repeat: 3,
      delay: 0.75,
      repeatDelay: 0.5,
    },
  },
};

function Loading() {
  return (
    <motion.div
      animate={"open"}
      className=" w-screen h-screen fixed z-50 flex items-center justify-center"
    >
      <motion.div
        variants={variants1}
        className="absolute z-40 mr-[58px] mt-[6px]"
      >
        <Image
          src={"/loading/part1.png"}
          alt=""
          width={100}
          height={100}
          className="w-7 "
        />
      </motion.div>
      <motion.div variants={variants2} className="absolute z-40 mr-[20px]">
        <Image
          src={"/loading/part2.png"}
          alt=""
          width={100}
          height={100}
          className="w-7"
        />
      </motion.div>
      <motion.div
        variants={variants3}
        className="absolute z-40 ml-[20px] mb-[3px]"
      >
        <Image
          src={"/loading/part3.png"}
          alt=""
          width={100}
          height={100}
          className="w-8 "
        />
      </motion.div>
      <motion.div
        variants={variants4}
        className="absolute z-40 ml-[54px] mb-[3px]"
      >
        <Image
          src={"/loading/part4.png"}
          alt=""
          width={100}
          height={100}
          className="w-7 "
        />
      </motion.div>
      <motion.div
        variants={variantsBG}
        className="w-screen h-screen bg-white absolute z-30"
      ></motion.div>
    </motion.div>
  );
}

export default Loading;
