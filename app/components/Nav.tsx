import React from "react";
import { motion } from "framer-motion";

function Nav({ setNavStatus, setIsNavOpen }: any) {
  const variants = {
    closed: {
      y: [0, 50, 50],
      opacity: [1, 0, 0],
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
    open: {
      y: [50, 0, 0],
      opacity: [0, 1, 1],
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  const promoButtonClicked = () => {
    setIsNavOpen(false);
    setNavStatus(1);
  };
  const menuButtonClicked = () => {
    setIsNavOpen(false);
    setNavStatus(2);
  };
  const addressButtonClicked = () => {
    setIsNavOpen(false);
    setNavStatus(3);
  };
  const contactButtonClicked = () => {
    setIsNavOpen(false);
    setNavStatus(4);
  };

  return (
    <motion.div
      className="fixed w-full h-[200vh] bg-white z-20 flex flex-col items-center justify-center"
      variants={{
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px)`,
          transition: {
            type: "spring",
            delay: 1,
            duration: 5,
          },
        }),
        closed: {
          clipPath: "circle(10px)",
          transition: {
            type: "spring",
            duration: 2.5,
            delay: 0,
          },
        },
      }}
    >
      <motion.nav
        variants={{
          open: {
            transition: { staggerChildren: 0.12, delayChildren: 1.6 },
          },
          closed: {
            transition: { staggerChildren: 0.1, delayChildren: 0.3 },
          },
        }}
        className="fixed top-[35%] text-black z-30 flex flex-col space-y-5 items-center text-5xl font-bold"
      >
        <motion.button
          onClick={promoButtonClicked}
          variants={variants}
          whileHover={{ opacity: 0.5 }}
        >
          Promo
        </motion.button>
        <motion.button
          onClick={menuButtonClicked}
          variants={variants}
          whileHover={{ opacity: 0.5 }}
        >
          Menu
        </motion.button>
        <motion.button
          onClick={addressButtonClicked}
          variants={variants}
          whileHover={{ opacity: 0.5 }}
        >
          Address
        </motion.button>
        <motion.button
          onClick={contactButtonClicked}
          variants={variants}
          whileHover={{ opacity: 0.5 }}
        >
          Contact
        </motion.button>
      </motion.nav>
    </motion.div>
  );
}

export default Nav;
