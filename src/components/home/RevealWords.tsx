"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  delay?: number;
};

export function RevealWords({ text, delay = 0 }: Props) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: "0.5em" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + index * 0.045,
          }}
          className="inline-block whitespace-pre will-change-transform"
        >
          {word + " "}
        </motion.span>
      ))}
    </>
  );
}
