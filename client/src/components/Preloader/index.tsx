"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim.ts";

const words = [
  "👋",
  "नमस्ते",
  "హలో",
  "ഹലോ",
  "હેલો",
  "வணக்கம்",
  "Hello",
  "নমস্কাৰ",
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const widthCheck = window.innerWidth;
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPathForMobile = `M0 0 L${dimension.width} 0 L${
    dimension.width
  } ${dimension.height} Q${dimension.width / 2} ${dimension.height + 100} 0 ${
    dimension.height
  }  L0 0`;

  const initialPathForDesktop = `M0 0 L${dimension.width} 0 L${
    dimension.width
  } ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  let curve;

  if (widthCheck >= 1024) {
    curve = {
      initial: {
        d: initialPathForDesktop,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        d: targetPath,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
      },
    };
  } else {
    curve = {
      initial: {
        d: initialPathForMobile,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        d: targetPath,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
      },
    };
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            {/* <span></span> */}
            {words[index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
