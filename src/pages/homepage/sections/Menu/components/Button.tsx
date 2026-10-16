import type { ReactNode } from "react";
import { motion } from "motion/react";

type ButtonProps = {
  children: ReactNode;
  handleMenuButton: (value: string) => void;
  value: string;
  menu: string;
};

function Button({ children, handleMenuButton, value, menu }: ButtonProps) {
  const isActive = menu === value;

  return (
    <motion.button
      type="button"
      initial={false}
      animate={isActive ? "active" : "initial"}
      whileHover={isActive ? "active" : "hover"}
      onClick={() => handleMenuButton(value)}
      className="relative overflow-hidden rounded-4xl border border-[#23472C] bg-[#F5F0E6] px-8 py-2 text-base text-center cursor-pointer"
    >
      <motion.span
        aria-hidden="true"
        variants={{
          initial: { y: "-100%" },
          hover: { y: "0%" },
          active: { y: "0%" },
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[#23472C]"
      />

      <motion.span
        variants={{
          initial: { color: "#23472C" },
          hover: { color: "#FFFDF8" },
          active: { color: "#FFFDF8" },
        }}
        transition={{ duration: 0.25 }}
        className="relative z-10 block"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}

export default Button;