"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  Landmark,
  Rocket,
} from "lucide-react";
import { SectionLabel } from "@/components/home/SectionLabel";
import { routes } from "@/shared/routes";

const viewport = { once: true, amount: 0.15 } as const;

const profiles = [
  {
    title: "Quiero apoyar",
    description:
      "Encuentra proyectos verificados y realiza tu aporte de forma segura.",
    Icon: HeartHandshake,
  },
  {
    title: "Quiero financiar",
    description:
      "Empresas e instituciones respaldan proyectos alineados a sus objetivos de impacto.",
    Icon: Landmark,
  },
  {
    title: "Quiero impulsar",
    description:
      "Voluntarios y organizaciones presentan sus iniciativas y buscan financiamiento con nuestro aval.",
    Icon: Rocket,
  },
];

const guarantees = [
  "Certificación de donativos",
  "Transparencia y trazabilidad",
  "Reporte de resultados",
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
          className="mt-16 grid bg-main-900 lg:grid-cols-[5fr_7fr]"
        >
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r">
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-heading text-5xl uppercase leading-none text-white sm:text-6xl">
                  Nex<span className="text-accent-400">o</span>
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
                  Conectando impacto
                </p>
              </div>

              <p className="max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
                Plataforma de financiamiento colectivo con certificación de
                donativos, que conecta proyectos, personas y empresas para
                impulsar iniciativas de impacto con transparencia y confianza.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {guarantees.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.25 + index * 0.08,
                  }}
                  className="flex items-center gap-3 text-base text-white/85"
                >
                  <Check
                    className="size-4 shrink-0 text-accent-400"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            <Link
              href={routes.payments.page()}
              className="group inline-flex w-fit items-center gap-3 border-b border-white/30 pb-1 font-heading text-lg uppercase leading-none text-white transition-colors hover:border-accent-500 hover:text-accent-400"
            >
              Conoce Nexo
              <ArrowRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>

          <ul className="grid sm:grid-cols-3">
            {profiles.map(({ title, description, Icon }, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: 0.15 + index * 0.12,
                }}
                className="group flex flex-col gap-5 border-b border-white/10 p-8 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.04] sm:border-b-0 sm:border-r sm:last:border-r-0 sm:p-10"
              >
                <span className="flex size-12 items-center justify-center border border-white/25 text-accent-400 transition-colors duration-300 group-hover:border-accent-500 group-hover:bg-accent-500 group-hover:text-main-900">
                  <Icon className="size-6" strokeWidth={1.5} aria-hidden />
                </span>

                <h3 className="font-heading text-xl uppercase leading-none text-white sm:text-2xl">
                  {title}
                </h3>

                <p className="text-base leading-relaxed text-white/65">
                  {description}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
