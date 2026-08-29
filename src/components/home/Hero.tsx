"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Handshake,
  Menu,
  Sprout,
  Wrench,
  X,
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { routes } from "@/shared/routes";

const slides = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
] as const;

const SLIDE_INTERVAL_MS = 7000;

const menuAnchors = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Nexo", href: "#nexo" },
  { label: "Aliados", href: "#aliados" },
  { label: "Impacto", href: "#impacto" },
  { label: "Actualidad", href: "#actualidad" },
] as const;

const pillars = [
  {
    title: "Diseñamos",
    description: "soluciones con propósito",
    Icon: Sprout,
  },
  {
    title: "Implementamos",
    description: "acciones en territorio",
    Icon: Wrench,
  },
  {
    title: "Articulamos",
    description: "personas e instituciones",
    Icon: Handshake,
  },
] as const;

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const backgroundScale = useTransform(scrollY, [0, 900], [1, 1.08]);
  const contentY = useTransform(scrollY, [0, 600], [0, 110]);
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const menuLinkClass =
    "group flex items-center gap-4 font-heading text-3xl uppercase leading-[1.1] text-foreground transition-colors hover:text-primary sm:text-4xl";

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-hero-surface">
      <motion.div
        style={{ scale: backgroundScale }}
        className="absolute inset-0 z-0"
      >
        {slides.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: index === activeSlide ? 1 : 0 }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>

      <div className="hero-scrim pointer-events-none absolute inset-0 z-10" />
      <div className="hero-top-scrim pointer-events-none absolute inset-x-0 top-0 z-10 h-40" />
      <div className="hero-bottom-scrim pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[70%]" />

      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hero-copy absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 sm:px-10"
      >
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 font-heading text-2xl uppercase leading-none tracking-wide text-hero-foreground transition-colors hover:text-hero-primary"
        >
          <Menu className="size-6" aria-hidden />
          Menú
        </button>

        <div className="flex items-center gap-4">
          <ThemeToggle className="border-hero-foreground/40 text-hero-foreground hover:border-hero-primary hover:text-hero-primary" />
          <Image
            src="/logo.png"
            alt="Ecos Fundation"
            width={2560}
            height={254}
            className="hero-logo h-auto w-32 sm:w-40"
          />
        </div>
      </motion.header>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="hero-copy absolute inset-x-0 bottom-0 z-20 flex flex-col gap-10 px-6 pb-10 sm:px-10"
      >
        <div className="grid gap-10 md:grid-cols-[7fr_5fr] md:items-end lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="font-heading uppercase leading-[0.95] tracking-tight text-hero-foreground">
              <span className="block text-4xl sm:text-6xl lg:text-7xl">
                Transformamos
              </span>
              <span className="block text-4xl sm:text-6xl lg:text-7xl">
                desafíos en{" "}
                <span className="text-hero-primary">proyectos</span>
              </span>
              <span className="block text-4xl sm:text-6xl lg:text-7xl">
                que generan <span className="text-hero-primary">impacto</span>
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-6">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-hero-foreground/70">
                Desliza para explorar
                <ArrowDown className="size-3.5" aria-hidden />
              </p>

              <div
                className="flex items-center gap-1.5"
                role="tablist"
                aria-label="Imágenes del hero"
              >
                {slides.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    role="tab"
                    aria-selected={index === activeSlide}
                    aria-label={`Imagen ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-0.5 w-6 transition-colors duration-300 ${
                      index === activeSlide
                        ? "bg-hero-primary"
                        : "bg-hero-foreground/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            className="flex max-w-xl flex-col gap-6 md:ml-auto md:items-end md:text-right"
          >
            <p className="text-base leading-relaxed text-hero-foreground/80 sm:text-lg">
              Diseñamos, implementamos y articulamos proyectos de innovación y
              sostenibilidad que conectan personas, instituciones y recursos
              para construir un futuro sostenible.
            </p>

            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <a
                href="#proyectos"
                className="group inline-flex items-center gap-3 border border-transparent bg-accent-500 px-6 py-4 font-heading text-base uppercase leading-none tracking-wide text-main-900 transition-colors duration-300 hover:bg-accent-400 sm:text-lg"
              >
                Conoce nuestros proyectos
                <ArrowRight
                  className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </a>

              <a
                href="#nexo"
                className="group inline-flex items-center gap-3 border border-hero-foreground/40 bg-hero-surface/45 px-6 py-4 font-heading text-base uppercase leading-none tracking-wide text-hero-foreground backdrop-blur-sm transition-colors duration-300 hover:border-hero-foreground hover:bg-hero-foreground hover:text-hero-surface sm:text-lg"
              >
                Trabaja con ECOS
                <ArrowRight
                  className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="grid gap-6 border-t border-hero-foreground/15 pt-6 sm:grid-cols-3"
        >
          {pillars.map(({ title, description, Icon }) => (
            <li key={title} className="flex items-center justify-center gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-hero-foreground/30 text-hero-primary">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <span>
                <span className="block font-heading text-lg uppercase leading-none text-hero-foreground">
                  {title}
                </span>
                <span className="block text-sm text-hero-foreground/65">
                  {description}
                </span>
              </span>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className="flex h-full w-full flex-col justify-between overflow-y-auto bg-background px-6 py-8 sm:px-10 md:w-[55%]"
            >
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 self-start font-heading text-2xl uppercase leading-none tracking-wide text-foreground transition-colors hover:text-primary"
              >
                Cerrar
                <X className="size-6 text-primary" aria-hidden />
              </button>

              <nav aria-label="Navegación principal">
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href={routes.home.page()}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-4 font-heading text-3xl uppercase leading-[1.1] text-primary sm:text-4xl"
                    >
                      <ArrowRight className="size-8" aria-hidden />
                      Inicio
                    </Link>
                  </li>

                  {menuAnchors.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={menuLinkClass}
                      >
                        <ArrowRight
                          className="size-8 -ml-12 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100"
                          aria-hidden
                        />
                        {item.label}
                      </a>
                    </li>
                  ))}

                  <li>
                    <Link
                      href={routes.payments.page()}
                      onClick={() => setMenuOpen(false)}
                      className={menuLinkClass}
                    >
                      <ArrowRight
                        className="size-8 -ml-12 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100"
                        aria-hidden
                      />
                      Colabora con ECOS
                    </Link>
                  </li>
                </ul>
              </nav>

              <Image
                src="/logo.png"
                alt="Ecos Fundation"
                width={2560}
                height={254}
                className="theme-logo h-auto w-40 sm:w-44"
              />
            </motion.div>

            <motion.button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden flex-1 cursor-default bg-foreground/35 md:block"
            />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
