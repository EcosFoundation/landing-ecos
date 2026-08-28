"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  Eye,
  Gauge,
  HeartHandshake,
  TrendingUp,
  Users,
} from "lucide-react";
import { RevealWords } from "@/components/home/RevealWords";
import { SectionLabel } from "@/components/home/SectionLabel";

const viewport = { once: true, amount: 0.15 } as const;

const capabilities = [
  { title: "Planificación técnica y financiera", Icon: ClipboardList },
  { title: "Participación comunitaria", Icon: Users },
  { title: "Ejecución transparente", Icon: Eye },
  { title: "Monitoreo y evaluación", Icon: Gauge },
  { title: "Resultados medibles", Icon: TrendingUp },
  { title: "Articulación y cofinanciamiento", Icon: HeartHandshake },
];

export function CapabilitiesSection() {
  return (
    <section
      id="capacidades"
      className="relative w-full overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionLabel number="03" title="Capacidades" />
        </motion.div>

        <div className="mt-16 grid gap-14 md:grid-cols-[5fr_7fr] lg:gap-24">
          <h2 className="font-heading text-4xl uppercase leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <RevealWords text="Tenemos la capacidad de" />
            <span className="block text-main-600 dark:text-main-300">
              <RevealWords text="llevarlo al territorio" delay={0.2} />
            </span>
          </h2>

          <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ title, Icon }, index) => (
              <li key={title} className="group relative">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewport}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    delay: index * 0.08,
                  }}
                  className="absolute inset-x-0 top-0 block h-px origin-left bg-foreground/20"
                />

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.1 + index * 0.08,
                  }}
                  className="flex flex-col gap-4 pt-6"
                >
                  <span className="flex size-11 items-center justify-center border border-foreground/20 text-main-700 transition-colors duration-300 group-hover:border-main-600 group-hover:bg-main-600 group-hover:text-white dark:text-main-300 dark:group-hover:border-main-400 dark:group-hover:bg-main-400 dark:group-hover:text-main-900">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </span>

                  <p className="max-w-[20ch] text-base leading-snug text-foreground">
                    {title}
                  </p>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20 grid items-stretch gap-0 bg-main-900 md:grid-cols-[6fr_5fr]"
        >
          <div className="flex flex-col justify-center gap-6 p-8 sm:p-12">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
              <span className="h-px w-8 bg-accent-500" aria-hidden />
              Innovación que trasciende
            </p>

            <h3 className="font-heading text-3xl uppercase leading-[1.05] text-white sm:text-4xl lg:text-5xl">
              ecobit
            </h3>

            <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Impulsamos ideas que se convierten en soluciones de alto impacto y
              capaces de escalar. Ecobit nació desde ECOS y hoy es una
              plataforma líder en gestión ambiental, incentivos y economía
              circular: tecnología para una sostenibilidad medible.
            </p>

            <a
              href="#nexo"
              className="group inline-flex w-fit items-center gap-3 border-b border-white/30 pb-1 font-heading text-lg uppercase leading-none text-white transition-colors hover:border-accent-500 hover:text-accent-400"
            >
              Conocer ecobit
              <ArrowRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
          </div>

          <figure className="relative min-h-[22rem] w-full">
            <Image
              src="/imagen.png"
              alt="Vecina usando la aplicación de economía circular de ecobit"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 bg-main-900/85 px-2 py-1 font-mono text-[11px] tracking-tight text-white">
              Economía circular en acción
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
