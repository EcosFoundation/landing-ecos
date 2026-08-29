"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealWords } from "@/components/home/RevealWords";
import { SectionLabel } from "@/components/home/SectionLabel";
import { cn } from "@/lib/utils";

const viewport = { once: true, amount: 0.2 } as const;

const communities = [
  {
    name: "ENAVOL 2026",
    subtitle: "Encuentro Nacional de Voluntariado",
    description:
      "El encuentro anual que conecta juventudes y organizaciones sociales para fortalecer el voluntariado, la Agenda 2030 y la innovación social en el Perú.",
    cta: "Vive ENAVOL",
    image: "/img/enavol.webp",
    imageAlt: "Jóvenes participantes del Encuentro Nacional de Voluntariado",
    logo: "/proyectos/logo-enavol.webp",
    logoWidth: 1080,
    logoHeight: 1080,
    href: "https://enavol.ecosfoundation.ong/",
    detail: "Moquegua, Perú",
    stat: "20+ regiones",
    surfaceClass: "bg-enavol-night",
    overlayClass:
      "bg-gradient-to-t from-enavol-night via-enavol-night/75 to-enavol-night/15",
    accentClass: "text-enavol-orange",
    lineClass: "bg-enavol-orange",
    buttonClass: "bg-enavol-green text-enavol-night hover:bg-white",
  },
  {
    name: "Climate Fest",
    subtitle: "Cumbre internacional desde la Amazonía",
    description:
      "Cuatro días de liderazgo, innovación y acción climática desde uno de los territorios más estratégicos del planeta.",
    cta: "Descubre Climate Fest",
    image: "/img/climate_fest.jpg",
    imageAlt: "Participantes de Climate Fest reunidos en Chachapoyas",
    logo: "/proyectos/CLIMATE-FEST-LOGO%20(1).webp",
    logoWidth: 96,
    logoHeight: 96,
    href: "https://climatefestglobal.org/en",
    detail: "Chachapoyas, Amazonas",
    stat: "17–20 julio 2026",
    surfaceClass: "bg-climate-burgundy",
    overlayClass:
      "bg-gradient-to-t from-black/85 via-black/40 to-transparent",
    accentClass: "text-climate-cream",
    lineClass: "bg-climate-green",
    buttonClass:
      "bg-climate-green text-climate-burgundy hover:bg-climate-cream",
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
            (
              {
                name,
                subtitle,
                description,
                cta,
                image,
                imageAlt,
                logo,
                logoWidth,
                logoHeight,
                href,
                detail,
                stat,
                surfaceClass,
                overlayClass,
                accentClass,
                lineClass,
                buttonClass,
              },
              index,
            ) => (
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
                className={cn(
                  "group relative isolate flex min-h-[34rem] flex-col justify-between overflow-hidden p-8 sm:p-10",
                  surfaceClass,
                )}
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="-z-10 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div
                  className={cn("absolute inset-0 -z-10", overlayClass)}
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-20 items-center justify-center rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur-sm">
                    <Image
                      src={logo}
                      alt=""
                      width={logoWidth}
                      height={logoHeight}
                      className="size-full object-contain"
                    />
                  </span>
                  <span className="rounded-full border border-white/25 bg-black/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    Proyecto ECOS
                  </span>
                </div>

                <div>
                  <p
                    className={cn(
                      "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em]",
                      accentClass,
                    )}
                  >
                    <span className={cn("h-px w-8", lineClass)} aria-hidden />
                    {subtitle}
                  </p>

                  <h3 className="mt-4 font-heading text-4xl uppercase leading-none text-white sm:text-5xl">
                    {name}
                  </h3>

                  <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
                    {description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[detail, stat].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/20 bg-black/10 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "mt-7 inline-flex w-fit items-center gap-3 border border-transparent px-6 py-4 font-heading text-base uppercase leading-none tracking-wide transition-colors duration-300 sm:text-lg",
                      buttonClass,
                    )}
                  >
                    {cta}
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </a>
                </div>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
