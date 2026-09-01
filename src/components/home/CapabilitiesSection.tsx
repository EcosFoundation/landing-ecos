"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Eye,
  Gauge,
  HeartHandshake,
  Recycle,
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
      className="relative w-full overflow-hidden bg-background py-16 sm:py-24 md:py-32"
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

        <div className="mt-10 grid gap-9 sm:mt-12 sm:gap-12 md:mt-16 md:grid-cols-[5fr_7fr] md:gap-14 lg:gap-24">
          <h2 className="font-heading text-3xl uppercase leading-[1.02] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            <RevealWords text="Tenemos la capacidad de" />
            <span className="block text-main-600 dark:text-main-300">
              <RevealWords text="llevarlo al territorio" delay={0.2} />
            </span>
          </h2>

          <ul className="grid grid-cols-2 border-l border-t border-border md:hidden">
            {capabilities.map(({ title, Icon }, index) => (
              <li
                key={title}
                className="relative min-h-32 border-b border-r border-border bg-card p-4 sm:min-h-36 sm:p-5"
              >
                <span
                  className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.16em] text-muted-foreground sm:right-5 sm:top-5"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex h-full flex-col justify-between gap-3">
                  <span className="flex size-9 items-center justify-center border border-foreground/20 text-primary">
                    <Icon
                      className="size-4"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </span>

                  <p className="max-w-[20ch] text-sm leading-snug text-foreground sm:text-base">
                    {title}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <ul className="hidden gap-x-10 gap-y-12 md:grid lg:grid-cols-3">
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
          className="relative mt-12 grid items-stretch overflow-hidden bg-ecobit-night sm:mt-20 md:grid-cols-[5fr_7fr]"
        >
          <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-ecobit-green/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-1/4 size-72 rounded-full bg-ecobit-green/15 blur-3xl" />

          <div className="relative flex flex-col justify-center gap-5 p-6 sm:gap-7 sm:p-12">
            <Image
              src="/proyectos/ecobit-logotype.webp"
              alt="Ecobit"
              width={1803}
              height={501}
              className="h-auto w-40 sm:w-52"
            />

            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ecobit-green">
                <Recycle className="size-5 text-ecobit-yellow" aria-hidden />
                Economía circular medible
              </p>

              <h3 className="max-w-xl text-3xl font-semibold leading-[1.08] text-white sm:text-4xl lg:text-5xl">
                Soluciones de economía circular{" "}
                <span className="italic text-ecobit-green">a tu medida</span>
              </h3>

              <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                Digitaliza la gestión de tus residuos, reduce costos y convierte
                cada kilo valorizado en EcoBits, con trazabilidad verificada y
                reportes en tiempo real.
              </p>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
              {[
                "Trazabilidad verificada",
                "Reportes en tiempo real",
                "EcoBits por cada kilo",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    className="size-4 text-ecobit-green"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://www.ecobit.eco/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-3 border border-transparent bg-ecobit-green px-6 py-4 font-heading text-base uppercase leading-none tracking-wide text-ecobit-night transition-colors duration-300 hover:bg-white sm:text-lg"
            >
              Conocer Ecobit
              <ArrowRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
          </div>

          <figure className="relative flex h-64 w-full items-center justify-center overflow-hidden border-white/10 px-4 py-6 sm:h-auto sm:min-h-[26rem] sm:px-10 sm:py-10 md:min-h-full md:border-l md:px-6 lg:px-10">
            <div className="pointer-events-none absolute inset-x-[12%] top-1/2 h-1/2 -translate-y-1/2 rounded-full bg-ecobit-green/15 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-ecobit-green/25" />
            <Image
              src="/img/mockup.png"
              alt="Aplicación móvil y plataforma web de EcoBit para la gestión y trazabilidad de residuos"
              width={1080}
              height={608}
              sizes="(min-width: 1280px) 58vw, (min-width: 768px) 55vw, 100vw"
              className="relative h-auto w-full object-contain md:w-[112%] md:max-w-none"
            />
            <figcaption className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-ecobit-night/80 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ecobit-green backdrop-blur-sm sm:left-8">
              <span
                className="size-2 rounded-full bg-ecobit-green"
                aria-hidden
              />
              App móvil + plataforma web
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
