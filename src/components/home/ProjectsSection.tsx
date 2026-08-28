"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealWords } from "@/components/home/RevealWords";
import { SectionLabel } from "@/components/home/SectionLabel";

const viewport = { once: true, amount: 0.15 } as const;

const projects = [
  {
    title: "Bosques y restauración",
    description:
      "Recuperamos ecosistemas y promovemos territorios más resilientes.",
    image: "/hero/hero1.jpg",
  },
  {
    title: "Agua y resiliencia",
    description:
      "Impulsamos soluciones para la seguridad hídrica y la adaptación territorial.",
    image: "/hero5.png",
  },
  {
    title: "Gestión del riesgo",
    description:
      "Fortalecemos capacidades para anticipar y reducir riesgos de desastres.",
    image: "/hero/hero3.jpg",
  },
  {
    title: "Innovación y sostenibilidad",
    description:
      "Desarrollamos soluciones que conectan tecnología, conocimiento e impacto.",
    image: "/hero/hero2.jpg",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="relative w-full overflow-hidden bg-muted/50 py-24 sm:py-32"
    >
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionLabel number="02" title="Proyectos" />
        </motion.div>

        <div className="mt-16 grid items-end gap-10 md:grid-cols-[7fr_5fr] lg:gap-24">
          <h2 className="font-heading text-4xl uppercase leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <RevealWords text="Proyectos que están" />
            <span className="block text-main-600 dark:text-main-300">
              <RevealWords text="transformando territorios" delay={0.18} />
            </span>
          </h2>

          <div className="flex max-w-xl flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Trabajamos en soluciones concretas que mejoran la vida de las
              personas y cuidan nuestro planeta.
            </motion.p>

            <a
              href="#actualidad"
              className="group inline-flex w-fit items-center gap-3 border-b border-foreground/30 pb-1 font-heading text-lg uppercase leading-none text-foreground transition-colors hover:border-accent-500 hover:text-main-600 dark:hover:text-main-300"
            >
              Ver todos los proyectos
              <ArrowRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map(({ title, description, image }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-main-900">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1280px) 23vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-main-900/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-mono text-xs text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-6 border-t border-foreground/20 pt-5">
                <h3 className="font-heading text-2xl uppercase leading-[1.05] text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <span className="mt-5 block h-px w-0 bg-accent-500 transition-all duration-500 group-hover:w-20" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
