"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  Landmark,
  Rocket,
} from "lucide-react";
import { SectionLabel } from "@/components/home/SectionLabel";

const viewport = { once: true, amount: 0.15 } as const;

const profiles = [
  {
    title: "Quiero apoyar",
    description: "Encuentra causas verificadas y aporta de forma segura.",
    Icon: HeartHandshake,
  },
  {
    title: "Quiero financiar",
    description: "Alinea inversión empresarial con objetivos de impacto.",
    Icon: Landmark,
  },
  {
    title: "Quiero impulsar",
    description: "Publica una iniciativa y conecta con nuevos aliados.",
    Icon: Rocket,
  },
];

const guarantees = [
  "Causas verificadas",
  "Trazabilidad fiscal",
  "Marco ODS",
  "Impacto medible",
];

export function NexoSection() {
  return (
    <section
      id="nexo"
      className="relative w-full overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionLabel number="05" title="Nexo" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mt-16 overflow-hidden bg-nexo-night text-white"
        >
          <div className="pointer-events-none absolute -right-32 -top-40 size-[32rem] rounded-full bg-nexo-green/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-48 left-1/3 size-96 rounded-full bg-main-500/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[7fr_5fr]">
            <div className="flex flex-col justify-between gap-10 border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <div className="flex flex-col items-center gap-7 text-center sm:items-start sm:text-left">
                <span className="w-fit rounded-2xl bg-white px-5 py-3 shadow-xl">
                  <Image
                    src="/proyectos/image.png"
                    alt="Nexo — Conectando Impacto"
                    width={256}
                    height={96}
                    className="h-auto w-40 sm:w-48"
                  />
                </span>

                <div className="flex flex-col gap-4">
                  <p className="flex items-center justify-center gap-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] text-nexo-green sm:justify-start sm:gap-3 sm:text-xs sm:tracking-[0.25em]">
                    Perú
                    <span
                      className="h-px w-6 bg-nexo-green sm:w-8"
                      aria-hidden
                    />
                    Plataforma de impacto
                  </p>

                  <h3 className="max-w-2xl text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
                    Tu aporte mueve el{" "}
                    <span className="text-nexo-green">futuro.</span>
                  </h3>

                  <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                    Nexo conecta capital con causas verificadas. Impacto medible
                    para personas y empresas, con trazabilidad fiscal y marco
                    ODS.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
                <a
                  href="https://nexo.ecosfoundation.ong/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full max-w-56 items-center justify-between gap-3 border border-transparent bg-nexo-yellow px-6 py-4 font-heading text-base uppercase leading-none tracking-wide text-nexo-night transition-colors duration-300 hover:bg-white sm:w-auto sm:max-w-none sm:text-lg"
                >
                  Explorar causas
                  <ArrowRight
                    className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
                <a
                  href="https://nexo.ecosfoundation.ong/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full max-w-56 items-center justify-between gap-3 border border-white/30 px-6 py-4 font-heading text-base uppercase leading-none tracking-wide text-white transition-colors hover:border-nexo-green hover:text-nexo-green sm:w-auto sm:max-w-none sm:text-lg"
                >
                  Subir proyecto
                  <ArrowRight
                    className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </div>
            </div>

            <ul className="grid">
              {profiles.map(({ title, description, Icon }, index) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: 0.15 + index * 0.12,
                  }}
                  className="group grid grid-cols-[auto_1fr] items-center gap-5 border-b border-white/10 p-7 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.04] sm:p-9"
                >
                  <span className="flex size-12 items-center justify-center rounded-full border border-nexo-green/40 text-nexo-green transition-colors duration-300 group-hover:bg-nexo-green group-hover:text-nexo-night">
                    <Icon className="size-6" strokeWidth={1.5} aria-hidden />
                  </span>

                  <span>
                    <span className="block font-heading text-xl uppercase leading-none text-white sm:text-2xl">
                      {title}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-white/60 sm:text-base">
                      {description}
                    </span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <ul className="relative grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: 0.25 + index * 0.08,
                }}
                className="flex items-center gap-3 border-b border-white/10 px-6 py-5 text-sm text-white/80 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <Check
                  className="size-4 shrink-0 text-nexo-green"
                  strokeWidth={2.5}
                  aria-hidden
                />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
