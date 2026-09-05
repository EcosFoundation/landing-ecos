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
    <section className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-hero-surface md:min-h-screen">
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
      <div className="hero-bottom-scrim pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[88%] md:h-[70%]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-hero-surface/35 via-transparent to-transparent md:hidden" />

      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hero-copy absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 sm:px-10"
      >
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex min-h-11 items-center gap-2 font-heading text-2xl uppercase leading-none tracking-wide text-hero-foreground transition-colors hover:text-hero-primary"
        >
          <Menu className="size-6" aria-hidden />
          Menú
        </button>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle className="size-11 border-hero-foreground/40 text-hero-foreground hover:border-hero-primary hover:text-hero-primary sm:size-9" />
          <Image
            src="/logo.png"
            alt="Ecos Fundation"
            width={2560}
            height={254}
            className="hero-logo h-auto w-32 sm:w-48"
          />
        </div>
      </motion.header>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="hero-copy relative z-20 mt-auto flex flex-col gap-6 px-6 pb-6 pt-28 sm:gap-10 sm:px-10 sm:pb-10 md:absolute md:inset-x-0 md:bottom-0 md:pt-0"
      >
        <div className="grid gap-6 md:grid-cols-[7fr_5fr] md:items-end md:gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="font-heading text-[clamp(2rem,9.8vw,2.65rem)] uppercase leading-[0.92] tracking-tight text-hero-foreground sm:text-6xl sm:leading-[0.95] lg:text-7xl">
              <span className="block">
                Transformamos
              </span>
              <span className="block">
                desafíos en{" "}
                <span className="text-hero-primary">proyectos</span>
              </span>
              <span className="block">
                que generan <span className="text-hero-primary">impacto</span>
              </span>
            </h1>

            <div className="mt-4 hidden items-center justify-between gap-4 sm:mt-6 sm:flex sm:justify-start sm:gap-6">
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-hero-foreground/70 sm:text-[11px] sm:tracking-[0.25em]">
                <span className="sm:hidden">Explora</span>
                <span className="hidden sm:inline">Desliza para explorar</span>
                <ArrowDown className="size-3.5" aria-hidden />
              </p>

              <div
                className="flex items-center"
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
                    className="flex size-11 items-center justify-center"
                  >
                    <span
                      className={`h-0.5 w-6 transition-colors duration-300 ${
                        index === activeSlide
                          ? "bg-hero-primary"
                          : "bg-hero-foreground/25"
                      }`}
                      aria-hidden
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            className="flex max-w-xl flex-col gap-4 sm:gap-6 md:ml-auto md:items-end md:text-right"
          >
            <p className="text-[15px] leading-relaxed text-hero-foreground/80 sm:text-lg">
              <span className="md:hidden">
                Conectamos personas, instituciones y recursos para convertir
                desafíos en proyectos sostenibles.
              </span>
              <span className="hidden md:inline">
                Diseñamos, implementamos y articulamos proyectos de innovación
                y sostenibilidad que conectan personas, instituciones y
                recursos para construir un futuro sostenible.
              </span>
            </p>

            <div className="grid w-full grid-cols-2 gap-2 sm:gap-3 md:flex md:w-auto md:flex-wrap md:items-center md:justify-end">
              <a
                href="#proyectos"
                className="group inline-flex min-w-0 items-center justify-center gap-1.5 border border-transparent bg-accent-500 px-2.5 py-3.5 text-center font-heading text-[13px] uppercase leading-none tracking-wide text-main-900 transition-colors duration-300 hover:bg-accent-400 sm:gap-3 sm:px-6 sm:py-4 sm:text-lg"
              >
                <span className="sm:hidden">Ver proyectos</span>
                <span className="hidden sm:inline">Conoce nuestros proyectos</span>
                <ArrowRight
                  className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-5"
                  aria-hidden
                />
              </a>

              <a
                href="#nexo"
                className="group inline-flex min-w-0 items-center justify-center gap-1.5 border border-hero-foreground/40 bg-hero-surface/45 px-2.5 py-3.5 text-center font-heading text-[13px] uppercase leading-none tracking-wide text-hero-foreground backdrop-blur-sm transition-colors duration-300 hover:border-hero-foreground hover:bg-hero-foreground hover:text-hero-surface sm:gap-3 sm:px-6 sm:py-4 sm:text-lg"
              >
                <span className="sm:hidden">Únete a ECOS</span>
                <span className="hidden sm:inline">Trabaja con ECOS</span>
                <ArrowRight
                  className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-5"
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
          className="grid grid-cols-3 gap-2 border-t border-hero-foreground/15 pt-4 sm:gap-6 sm:pt-6"
        >
          {pillars.map(({ title, description, Icon }) => (
            <li
              key={title}
              className="flex min-w-0 flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-hero-foreground/30 text-hero-primary sm:size-11">
                <Icon className="size-4 sm:size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block font-heading text-xs uppercase leading-none text-hero-foreground sm:text-lg">
                  {title}
                </span>
                <span className="hidden text-sm text-hero-foreground/65 sm:block">
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
                className="theme-logo h-auto w-56 sm:w-64"
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
