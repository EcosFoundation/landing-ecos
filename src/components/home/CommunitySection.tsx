"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProjectVisual } from "@/components/home/CommunityVisuals";
import { RevealWords } from "@/components/home/RevealWords";
import { SectionLabel } from "@/components/home/SectionLabel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const viewport = { once: true, amount: 0.2 } as const;

const communities = [
  {
    name: "ENAVOL 2026",
    subtitle: "Encuentro Nacional de Voluntariado",
    description:
      "El encuentro anual que conecta juventudes y organizaciones sociales para fortalecer el voluntariado, la Agenda 2030 y la innovación social en el Perú.",
    cta: "Vive ENAVOL",
    logo: "/proyectos/logo-enavol.webp",
    logoWidth: 1080,
    logoHeight: 1080,
    href: "https://enavol.ecosfoundation.ong/",
    motif: "community",
    surfaceClass: "bg-enavol-night",
    accentClass: "text-enavol-orange",
    lineClass: "bg-enavol-orange",
  },
  {
    name: "Climate Fest",
    subtitle: "Cumbre internacional desde la Amazonía",
    description:
      "Cuatro días de liderazgo, innovación y acción climática desde uno de los territorios más estratégicos del planeta.",
    cta: "Descubre Climate Fest",
    logo: "/proyectos/CLIMATE-FEST-LOGO%20(1).webp",
    logoWidth: 96,
    logoHeight: 96,
    href: "https://climatefestglobal.org/en",
    motif: "global",
    surfaceClass: "bg-climate-burgundy",
    accentClass: "text-climate-cream",
    lineClass: "bg-climate-green",
  },
];

export function CommunitySection() {
  return (
    <section
      id="comunidad"
      className="relative w-full overflow-hidden bg-muted/50 py-16 sm:py-32"
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

        <div className="mt-10 grid items-end gap-6 sm:mt-16 sm:gap-10 md:grid-cols-[7fr_5fr] lg:gap-24">
          <h2 className="font-heading text-3xl uppercase leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
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
            className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-xl"
          >
            Dos espacios vivos donde las personas encuentran con quién y cómo
            aportar.
          </motion.p>
        </div>

        <div className="mt-12 flex flex-col gap-6 sm:mt-20 sm:gap-10">
          {communities.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              className={cn(
                "grid overflow-hidden md:min-h-[35rem] md:grid-cols-[5fr_7fr]",
                project.surfaceClass,
              )}
            >
              <div className="flex flex-col justify-between gap-8 p-6 sm:gap-14 sm:p-10 lg:p-14">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-16 items-center justify-center rounded-xl bg-white/95 p-2.5 shadow-xl sm:size-20 sm:rounded-2xl sm:p-3">
                    <Image
                      src={project.logo}
                      alt=""
                      width={project.logoWidth}
                      height={project.logoHeight}
                      className="size-full object-contain"
                    />
                  </span>
                  <span className="rounded-full border border-white/20 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/70 sm:px-3 sm:text-[10px] sm:tracking-[0.2em]">
                    Programa ECOS
                  </span>
                </div>

                <div>
                  <p
                    className={cn(
                      "flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em] sm:gap-3 sm:text-xs sm:tracking-[0.22em]",
                      project.accentClass,
                    )}
                  >
                    <span
                      className={cn("h-px w-8", project.lineClass)}
                      aria-hidden
                    />
                    {project.subtitle}
                  </p>
                  <h3 className="mt-3 font-heading text-3xl uppercase leading-none text-white sm:mt-4 sm:text-5xl lg:text-6xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/75 sm:mt-5 sm:text-lg">
                    {project.description}
                  </p>
                  <Button
                    asChild
                    variant="project"
                    size="cta"
                    className="mt-6 w-full justify-between sm:mt-8 sm:w-fit"
                  >
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.cta}
                      <ArrowRight
                        data-icon="inline-end"
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                        aria-hidden
                      />
                    </a>
                  </Button>
                </div>
              </div>

              <ProjectVisual motif={project.motif} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
