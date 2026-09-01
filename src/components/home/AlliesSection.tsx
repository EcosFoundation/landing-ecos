"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealWords } from "@/components/home/RevealWords";
import { SectionLabel } from "@/components/home/SectionLabel";
import { cn } from "@/lib/utils";

const viewport = { once: true, amount: 0.25 } as const;

type Logo = {
  name: string;
  src: string;
  width: number;
  height: number;
  compact?: boolean;
};

const allies: Logo[] = [
  { name: "Anglo American", src: "/ECOS%20LOGOS/ALIADOS/ANGLOAMERICAN.png", width: 800, height: 179 },
  { name: "Cámara de Comercio", src: "/ECOS%20LOGOS/ALIADOS/CAMARA%20DE%20COMERCIO.png", width: 600, height: 152 },
  { name: "Instituto de Desarrollo y Medio Ambiente", src: "/ECOS%20LOGOS/ALIADOS/IDMA.png", width: 800, height: 260 },
  { name: "World Vision y COEECI", src: "/ECOS%20LOGOS/ALIADOS/LOGO-WV-COEECI-scaled.png", width: 2560, height: 642 },
  { name: "APRODEH", src: "/ECOS%20LOGOS/ALIADOS/aprodeh.jpg", width: 400, height: 304, compact: true },
  { name: "Ecobit", src: "/ECOS%20LOGOS/ALIADOS/ecobit.png", width: 1920, height: 565 },
  { name: "France Volontaires", src: "/ECOS%20LOGOS/ALIADOS/france-volontaires.png", width: 1740, height: 406 },
  { name: "Congreso de la República del Perú", src: "/ECOS%20LOGOS/ALIADOS/logo-congreso-de-la-republica-4.jpg", width: 635, height: 607, compact: true },
];

const recognitions: Logo[] = [
  { name: "Agencia Peruana de Cooperación Internacional", src: "/ECOS%20LOGOS/REGISTROS/APCI.png", width: 363, height: 139 },
  { name: "CAF — Banco de Desarrollo de América Latina y el Caribe", src: "/ECOS%20LOGOS/REGISTROS/CAF.png", width: 2072, height: 820 },
  { name: "Consejo Económico y Social de las Naciones Unidas", src: "/ECOS%20LOGOS/REGISTROS/ECOSOC.png", width: 812, height: 294 },
  { name: "Ministerio de la Mujer y Poblaciones Vulnerables", src: "/ECOS%20LOGOS/REGISTROS/PCM-MIMP.png", width: 2086, height: 400 },
  { name: "Protagonistas del Cambio UPC", src: "/ECOS%20LOGOS/REGISTROS/PDC.png", width: 1500, height: 683 },
  { name: "Secretaría Nacional de la Juventud", src: "/ECOS%20LOGOS/REGISTROS/SENAJU.png", width: 408, height: 131 },
  { name: "SUNAT", src: "/ECOS%20LOGOS/REGISTROS/SUNAT.jpg", width: 1200, height: 341 },
  { name: "CMNUCC — Conferencia de las Partes", src: "/ECOS%20LOGOS/REGISTROS/cmnucc%20COP.png", width: 600, height: 228 },
];

type LogoMarqueeProps = {
  title: string;
  description: string;
  logos: Logo[];
  reverse?: boolean;
};

function LogoGroup({ logos, duplicate = false }: { logos: Logo[]; duplicate?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4"
      aria-hidden={duplicate || undefined}
    >
      {logos.map((logo) => (
        <li
          key={logo.name}
          className="group flex h-28 w-52 shrink-0 items-center justify-center bg-white px-7 py-5 sm:h-32 sm:w-64 sm:px-9"
        >
          <Image
            src={logo.src}
            alt={duplicate ? "" : logo.name}
            width={logo.width}
            height={logo.height}
            sizes="(min-width: 640px) 192px, 152px"
            className={cn(
              "max-h-14 w-auto max-w-full object-contain opacity-85 transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100 sm:max-h-16",
              logo.compact && "max-h-20 sm:max-h-24",
            )}
          />
        </li>
      ))}
    </ul>
  );
}

function LogoMarquee({ title, description, logos, reverse = false }: LogoMarqueeProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-between gap-1 px-6 sm:flex-row sm:items-baseline sm:px-10 lg:px-14">
        <h3 className="font-heading text-sm uppercase tracking-[0.16em] text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="allies-marquee-mask overflow-hidden bg-white py-3">
        <div className={cn("allies-marquee-track flex w-max", reverse && "allies-marquee-track-reverse")}>
          <LogoGroup logos={logos} />
          <LogoGroup logos={logos} duplicate />
        </div>
      </div>
    </div>
  );
}

export function AlliesSection() {
  return (
    <section id="aliados" className="relative w-full overflow-hidden bg-muted/50 py-24 sm:py-32">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionLabel number="06" title="Aliados" />
        </motion.div>

        <div className="mt-16 grid items-end gap-10 md:grid-cols-[7fr_5fr] lg:gap-24">
          <h2 className="font-heading text-4xl uppercase leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <RevealWords text="Alianzas que" />
            <span className="block text-main-600 dark:text-main-300">
              <RevealWords text="multiplican el impacto" delay={0.15} />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Instituciones públicas, privadas y de cooperación que caminan con
            nosotros y confían en nuestro trabajo.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="mt-16 flex flex-col gap-9"
      >
        <LogoMarquee
          title="Aliados estratégicos"
          description="Organizaciones que construyen impacto junto a ECOS"
          logos={allies}
        />
        <LogoMarquee
          title="Registros y reconocimientos"
          description="Instituciones que respaldan y validan nuestra trayectoria"
          logos={recognitions}
          reverse
        />
      </motion.div>
    </section>
  );
}
