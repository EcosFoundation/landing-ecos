import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const columns = [
  {
    title: "Proyectos",
    links: [
      { label: "Proyectos activos", href: "#proyectos" },
      { label: "Proyectos ejecutados", href: "#proyectos" },
      { label: "Convocatorias", href: "#actualidad" },
      { label: "Metodología", href: "#proceso" },
      { label: "Impacto", href: "#impacto" },
    ],
  },
  {
    title: "Comunidad",
    links: [
      { label: "ENAVOL", href: "#comunidad" },
      { label: "Climate Fest", href: "#comunidad" },
      { label: "Voluntariado", href: "#comunidad" },
      { label: "Historias", href: "#actualidad" },
      { label: "Eventos", href: "#actualidad" },
    ],
  },
  {
    title: "Nexo",
    links: [
      { label: "Descubre proyectos", href: "#nexo" },
      { label: "Cómo funciona", href: "#nexo" },
      { label: "Para empresas", href: "#nexo" },
      { label: "Para voluntarios", href: "#nexo" },
      { label: "Certificación", href: "#nexo" },
    ],
  },
  {
    title: "Aliados",
    links: [
      { label: "Instituciones", href: "#aliados" },
      { label: "Empresas", href: "#aliados" },
      { label: "Cooperación", href: "#aliados" },
      { label: "Gobiernos", href: "#aliados" },
      { label: "Universidades", href: "#aliados" },
    ],
  },
];

const contact = [
  { label: "contacto@ecosfoundation.ong", Icon: Mail },
  { label: "+51 972 665 388", Icon: Phone },
  { label: "Perú", Icon: MapPin },
];

export function SiteFooter() {
  return (
    <footer
      id="contacto"
      className="w-full bg-main-900 px-6 py-20 sm:px-10 lg:px-14"
    >
      <div className="grid gap-14 lg:grid-cols-[3fr_8fr_3fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          <Image
            src="/logo.png"
            alt="Ecos Fundation"
            width={2560}
            height={254}
            className="h-auto w-40"
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            Diseñamos, implementamos y articulamos proyectos de innovación y
            sostenibilidad para transformar realidades.
          </p>
        </div>

        <nav
          aria-label="Enlaces del sitio"
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {columns.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-4">
              <p className="border-b border-white/15 pb-3 font-heading text-base uppercase leading-none tracking-wide text-white">
                {title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={`${title}-${link.label}`}>
                    <a
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-accent-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <p className="border-b border-white/15 pb-3 font-heading text-base uppercase leading-none tracking-wide text-white">
            Contáctanos
          </p>

          <ul className="flex flex-col gap-3">
            {contact.map(({ label, Icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm text-white/55"
              >
                <Icon className="size-4 text-accent-400" aria-hidden />
                {label}
              </li>
            ))}
          </ul>

          <a
            href="https://nexo.ecosfoundation.ong/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex w-fit items-center gap-3 border-b border-white/30 pb-1 font-heading text-lg uppercase leading-none text-white transition-colors hover:border-accent-500 hover:text-accent-400"
          >
            Colabora con ECOS
            <ArrowRight
              className="size-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </a>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Fundación ECOS. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-6">
          <a href="#contacto" className="transition-colors hover:text-white">
            Política de privacidad
          </a>
          <a href="#contacto" className="transition-colors hover:text-white">
            Términos y condiciones
          </a>
        </div>
      </div>
    </footer>
  );
}
