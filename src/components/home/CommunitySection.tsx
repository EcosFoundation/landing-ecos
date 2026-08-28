"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealWords } from "@/components/home/RevealWords";
import { SectionLabel } from "@/components/home/SectionLabel";

const viewport = { once: true, amount: 0.2 } as const;

const communities = [
  {
    name: "Enavol",
    subtitle: "Comunidad Nacional de Voluntariado Juvenil",
    description:
      "Conectamos y fortalecemos a jóvenes voluntarios que impulsan iniciativas que transforman sus comunidades.",
    cta: "Conoce ENAVOL",
    image: "/hero/hero2.jpg",
  },
  {
    name: "Climate Fest",
    subtitle: "Comunidad Internacional de Acción Climática",
    description:
      "Un espacio que reúne líderes, innovadores y organizaciones para compartir soluciones frente a la crisis climática.",
    cta: "Conoce Climate Fest",
    image: "/hero/hero3.jpg",
  },
];

export function CommunitySection() {
  return (
    <section
      id="comunidad"
      className="relative w-full overflow-hidden bg-muted/50 py-24 sm:py-32"
    >
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionLabel number="04" title="Comunidad" />
        </motion.div>

        <div className="mt-16 grid items-end gap-10 md:grid-cols-[7fr_5fr] lg:gap-24">
          <h2 className="font-heading text-4xl uppercase leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <RevealWords text="Una comunidad que convierte el" />
            <span className="block text-main-600 dark:text-main-300">
              <RevealWords text="compromiso en acción" delay={0.25} />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Dos espacios vivos donde las personas encuentran con quién y cómo
            aportar.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {communities.map(
            ({ name, subtitle, description, cta, image }, index) => (
              <motion.article
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                className="group relative isolate flex min-h-[28rem] flex-col justify-end overflow-hidden bg-main-900 p-8 sm:p-10"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="-z-10 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-main-900 via-main-900/75 to-main-900/25" />

                <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
                  <span className="h-px w-8 bg-accent-500" aria-hidden />
                  {subtitle}
                </p>

                <h3 className="mt-4 font-heading text-4xl uppercase leading-none text-white sm:text-5xl">
                  {name}
                </h3>

                <p className="mt-4 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
                  {description}
                </p>

                <a
                  href="#nexo"
                  className="mt-7 inline-flex w-fit items-center gap-3 border-b border-white/30 pb-1 font-heading text-base uppercase leading-none text-white transition-colors hover:border-accent-500 hover:text-accent-400"
                >
                  {cta}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
