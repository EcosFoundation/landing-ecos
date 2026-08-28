"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { RevealWords } from "@/components/home/RevealWords";
import { SectionLabel } from "@/components/home/SectionLabel";

const viewport = { once: true, amount: 0.3 } as const;

const stats = [
  { value: 500, suffix: "+", label: "proyectos implementados" },
  { value: 300, suffix: "K+", label: "personas beneficiadas" },
  { value: 200, suffix: "+", label: "organizaciones articuladas" },
  { value: 24, suffix: "", label: "regiones impactadas" },
  { value: 5, suffix: "M+", label: "recursos movilizados (S/ y USD)" },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = Math.round(latest).toLocaleString("es-PE");
        }
      },
    });

    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>0</span>;
}

export function ImpactSection() {
  return (
    <section
      id="impacto"
      className="relative w-full overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionLabel number="07" title="Nuestro impacto" />
        </motion.div>

        <div className="mt-16 grid items-end gap-10 md:grid-cols-[7fr_5fr] lg:gap-24">
          <h2 className="font-heading text-4xl uppercase leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <RevealWords text="Nuestro impacto crece" />
            <span className="block text-main-600 dark:text-main-300">
              <RevealWords text="gracias a todos" delay={0.2} />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Cada paso que damos refuerza nuestro compromiso con la
            sostenibilidad y la acción social, logrando resultados que inspiran
            y transforman.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(({ value, suffix, label }, index) => (
            <div key={label} className="relative">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewport}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: index * 0.12,
                }}
                className="absolute inset-x-0 top-0 block h-px origin-left bg-foreground/25"
              />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.12 + index * 0.12,
                }}
                className="flex flex-col gap-3 pt-8"
              >
                <p className="font-heading text-5xl uppercase leading-none text-foreground sm:text-6xl">
                  <Counter value={value} />
                  <span className="text-accent-600 dark:text-accent-400">
                    {suffix}
                  </span>
                </p>
                <p className="max-w-[24ch] text-base leading-snug text-muted-foreground sm:text-lg">
                  {label}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
