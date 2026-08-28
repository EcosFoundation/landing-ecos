"use client";

import { motion } from "framer-motion";
import { RevealWords } from "@/components/home/RevealWords";
import { SectionLabel } from "@/components/home/SectionLabel";

const viewport = { once: true, amount: 0.25 } as const;

const allies = [
  { name: "CAF", detail: "Banco de Desarrollo de América Latina y el Caribe" },
  { name: "Aprodeh", detail: "Asociación pro Derechos Humanos" },
  { name: "IDMA", detail: "Instituto de Desarrollo y Medio Ambiente" },
  { name: "Gobiernos Regionales", detail: "Perú" },
  { name: "Congreso", detail: "de la República del Perú" },
];

export function AlliesSection() {
  return (
    <section
      id="aliados"
      className="relative w-full overflow-hidden bg-muted/50 py-24 sm:py-32"
    >
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

        <ul className="mt-16 grid border-t border-foreground/20 sm:grid-cols-2 lg:grid-cols-5">
          {allies.map(({ name, detail }, index) => (
            <motion.li
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              className="group flex min-h-36 flex-col items-center justify-center gap-2 border-b border-foreground/20 px-6 py-8 text-center transition-colors duration-300 sm:border-r sm:last:border-r-0 lg:border-b-0"
            >
              <span className="font-heading text-2xl uppercase leading-none text-foreground transition-colors duration-300 group-hover:text-main-600 dark:group-hover:text-main-300">
                {name}
              </span>
              <span className="max-w-[24ch] text-sm leading-snug text-muted-foreground">
                {detail}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
