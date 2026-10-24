import { Link } from "react-router";
import { motion } from "motion/react";
import Seo from "../../components/Seo/Seo";

const MotionLink = motion.create(Link);

function NotFound() {
  return (
    <section className="flex min-h-[75svh] items-center justify-center bg-[#F5F0E6] px-5 pb-20 pt-32 text-center font-[Bree_serif] text-[#2B241F] sm:px-10">
      <Seo
        title="404 – Stránka nenalezena | Hospůdka pod Boušovem"
        description="V URL adrese je chyba. Zkontrolujte ji nebo se vraťte na hlavní stránku Hospůdky pod Boušovem."
        noIndex
      />

      <div className="max-w-[480px]">
        <p aria-hidden="true" className="text-8xl leading-none text-[#38271F] sm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl leading-tight text-[#38271F] sm:text-4xl">
          Stránka nenalezena
        </h1>
        <p className="mt-5 text-base leading-relaxed text-[#2B241F]/70">
          V URL adrese je chyba. Zkontrolujte ji nebo se vraťte na hlavní stránku.
        </p>
        <MotionLink
          to="/#hero"
          initial={false}
          animate="initial"
          whileHover="hover"
          whileFocus="hover"
          className="relative mt-8 inline-flex min-h-12 items-center justify-center overflow-hidden rounded-4xl border border-[#23472C] bg-[#F5F0E6] px-8 py-2 text-base text-[#23472C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#23472C]"
        >
          <motion.span
            aria-hidden="true"
            variants={{
              initial: { y: "-100%" },
              hover: { y: "0%" },
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#23472C]"
          />
          <motion.span
            variants={{
              initial: { color: "#23472C" },
              hover: { color: "#FFFDF8" },
            }}
            transition={{ duration: 0.25 }}
            className="relative z-10 inline-flex items-center gap-3"
          >
            <span aria-hidden="true">←</span>
            Zpět na hlavní stránku
          </motion.span>
        </MotionLink>
      </div>
    </section>
  );
}

export default NotFound;
