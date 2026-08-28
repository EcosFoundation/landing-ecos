"use client";

import { motion } from "framer-motion";
import { BarChart3, PencilRuler, Search, Sprout, Users } from "lucide-react";
import { RevealWords } from "@/components/home/RevealWords";
import { SectionLabel } from "@/components/home/SectionLabel";

const viewport = { once: true, amount: 0.25 } as const;

const steps = [
  { title: "Identificamos", description: "desafíos reales", Icon: Search },
  { title: "Diseñamos", description: "soluciones viables", Icon: PencilRuler },
  { title: "Articulamos", description: "aliados y recursos", Icon: Users },
  {
    title: "Implementamos",
    description: "acciones en territorio",
    Icon: Sprout,
  },
  { title: "Medimos", description: "resultados e impacto", Icon: BarChart3 },
];

export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="relative w-full overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionLabel number="01" title="¿Cómo trabajamos?" />
        </motion.div>

        <div className="mt-16 grid items-end gap-10 md:grid-cols-[7fr_5fr] lg:gap-24">
          <h2 className="font-heading text-4xl uppercase leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <RevealWords text="No nos quedamos" />
            <span className="block text-main-600 dark:text-main-300">
              <RevealWords text="en las ideas" delay={0.18} />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Cada proyecto recorre una ruta clara que va del diagnóstico a la
            medición del impacto, para que nada se quede en el papel.
          </motion.p>
        </div>

        <ol className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-8">
          {steps.map(({ title, description, Icon }, index) => (
            <li key={title} className="group relative">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewport}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: index * 0.12,
                }}
                className="absolute inset-x-0 top-0 block h-px origin-left bg-foreground/25"
              />

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.12 + index * 0.12,
                }}
                className="flex flex-col gap-5 pt-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center border border-foreground/20 text-main-700 transition-colors duration-300 group-hover:border-main-600 group-hover:bg-main-600 group-hover:text-white dark:text-main-300 dark:group-hover:border-main-400 dark:group-hover:bg-main-400 dark:group-hover:text-main-900">
                    <Icon className="size-6" strokeWidth={1.5} aria-hidden />
                  </span>

                  <span className="font-mono text-sm text-accent-700 dark:text-accent-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl uppercase leading-none text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-snug text-muted-foreground">
                    {description}
                  </p>
                </div>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
