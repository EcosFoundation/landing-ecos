"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealWords } from "@/components/home/RevealWords";
import { SectionLabel } from "@/components/home/SectionLabel";

const viewport = { once: true, amount: 0.15 } as const;

const news = [
  {
    tag: "Proyecto",
    title: "Reforestación en la cuenca del Mantaro",
    description:
      "Más de 10 mil árboles plantados con participación comunitaria.",
    image: "/hero/hero1.jpg",
  },
  {
    tag: "Alianza",
    title: "Nueva alianza con CAF para proyectos sostenibles",
    description: "Trabajamos juntos por territorios más resilientes.",
    image: "/hero5.png",
  },
  {
    tag: "Evento",
    title: "ENAVOL reunió a jóvenes líderes del país",
    description:
      "Más de 300 voluntarios compartieron experiencias e iniciativas.",
    image: "/hero/hero2.jpg",
  },
  {
    tag: "Proyecto",
    title: "Implementamos sistemas de siembra de agua",
    description:
      "Mejoramos la disponibilidad hídrica en comunidades altoandinas.",
    image: "/hero/hero3.jpg",
  },
];

export function NewsSection() {
  return (
    <section
      id="actualidad"
      className="relative w-full overflow-hidden bg-muted/50 py-24 sm:py-32"
    >
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionLabel number="08" title="Actualidad" />
        </motion.div>

        <div className="mt-16 grid items-end gap-10 md:grid-cols-[7fr_5fr] lg:gap-24">
          <h2 className="font-heading text-4xl uppercase leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <RevealWords text="ECOS" />
            <span className="text-main-600 dark:text-main-300">
              <RevealWords text=" en acción" delay={0.1} />
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
              Historias reales de impacto en nuestros territorios.
            </motion.p>

            <a
              href="#actualidad"
              className="group inline-flex w-fit items-center gap-3 border-b border-foreground/30 pb-1 font-heading text-lg uppercase leading-none text-foreground transition-colors hover:border-accent-500 hover:text-main-600 dark:hover:text-main-300"
            >
              Ver todas las noticias
              <ArrowRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
          </div>
        </div>

        <ul className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
          {news.map(({ tag, title, description, image }, index) => (
            <motion.li
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
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-main-900">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 23vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-main-900/85 px-2 py-1 font-mono text-[11px] uppercase tracking-tight text-accent-400">
                  {tag}
                </span>
              </div>

              <div className="mt-6 border-t border-foreground/20 pt-5">
                <h3 className="font-heading text-xl uppercase leading-[1.1] text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <span className="mt-5 block h-px w-0 bg-accent-500 transition-all duration-500 group-hover:w-20" />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
