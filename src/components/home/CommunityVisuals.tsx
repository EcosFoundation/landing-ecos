"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { climateOrigin, peruLandPath, worldLandPath } from "./communityMapData";

const enavolHub = { x: 380, y: 234 };

const enavolNodes = [
  { id: "noroeste", x: 126, y: 130, color: "var(--enavol-green)" },
  { id: "norte", x: 278, y: 74, color: "white" },
  { id: "nororiente", x: 486, y: 86, color: "var(--enavol-orange)" },
  { id: "oriente", x: 625, y: 186, color: "var(--enavol-green)" },
  { id: "suroriente", x: 602, y: 340, color: "var(--enavol-orange)" },
  { id: "sur", x: 420, y: 394, color: "var(--enavol-blue)" },
  { id: "suroeste", x: 226, y: 372, color: "var(--enavol-orange)" },
  { id: "costa", x: 105, y: 258, color: "var(--enavol-green)" },
];

const enavolSpokes = [
  "M380 234 C298 226 221 173 126 130",
  "M380 234 C342 174 321 112 278 74",
  "M380 234 C418 172 449 119 486 86",
  "M380 234 C475 181 548 175 625 186",
  "M380 234 C484 247 545 287 602 340",
  "M380 234 C408 294 420 338 420 394",
  "M380 234 C335 290 280 337 226 372",
  "M380 234 C280 256 191 264 105 258",
];

const enavolPerimeter = [
  "M126 130 C177 89 226 74 278 74",
  "M278 74 C352 53 423 61 486 86",
  "M486 86 C551 100 596 136 625 186",
  "M625 186 C644 244 636 298 602 340",
  "M602 340 C550 384 488 400 420 394",
  "M420 394 C348 417 282 403 226 372",
  "M226 372 C162 350 120 310 105 258",
  "M105 258 C91 203 98 160 126 130",
];

const climateRoutes = [
  {
    id: "americas",
    label: "AMÉRICAS",
    x: 198.9,
    y: 195.6,
    d: `M${climateOrigin.x} ${climateOrigin.y} C229 262 210 224 198.9 195.6`,
  },
  {
    id: "europe",
    label: "EUROPA",
    x: 431.1,
    y: 174.4,
    d: `M${climateOrigin.x} ${climateOrigin.y} C294 206 349 162 431.1 174.4`,
  },
  {
    id: "africa",
    label: "ÁFRICA",
    x: 452.2,
    y: 269.4,
    d: `M${climateOrigin.x} ${climateOrigin.y} C316 246 386 246 452.2 269.4`,
  },
  {
    id: "asia",
    label: "ASIA",
    x: 621.1,
    y: 206.1,
    d: `M${climateOrigin.x} ${climateOrigin.y} C347 165 506 154 621.1 206.1`,
  },
  {
    id: "oceania",
    label: "OCEANÍA",
    x: 695,
    y: 332.8,
    d: `M${climateOrigin.x} ${climateOrigin.y} C380 351 562 370 695 332.8`,
  },
];

type ConnectionPathProps = {
  d: string;
  active: boolean;
  color: string;
  delay: number;
  duration?: number;
};

function ConnectionPath({ d, active, color, delay, duration = 5.2 }: ConnectionPathProps) {
  return (
    <>
      <motion.path
        d={d}
        fill="none"
        stroke="white"
        strokeOpacity="0.16"
        strokeWidth="1.15"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.85, delay, ease: "easeOut" }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeOpacity="0.78"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="2 18"
        vectorEffect="non-scaling-stroke"
        initial={{ strokeDashoffset: 0, opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        animate={active ? { strokeDashoffset: [0, -80] } : { strokeDashoffset: 0 }}
        transition={{
          opacity: { duration: 0.4, delay: delay + 0.45 },
          strokeDashoffset: { duration, repeat: Infinity, ease: "linear" },
        }}
      />
    </>
  );
}

function PersonGlyph({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
      <circle cx={x} cy={y - 4.5} r="3.8" />
      <path d={`M${x - 7} ${y + 8} C${x - 6} ${y + 1} ${x - 3} ${y - 0.5} ${x} ${y - 0.5} C${x + 4} ${y - 0.5} ${x + 7} ${y + 2} ${x + 7} ${y + 8}`} />
    </g>
  );
}

export function EnavolNetworkVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const active = inView && !reduceMotion;

  return (
    <div ref={ref} className="relative h-64 overflow-hidden border-white/10 bg-gradient-to-br from-enavol-blue/25 via-enavol-night to-enavol-night sm:h-auto sm:min-h-[25rem] md:min-h-full md:border-l">
      <div className="absolute -right-20 -top-24 size-96 rounded-full bg-enavol-blue/25 blur-3xl" />
      <div className="absolute -bottom-28 -left-16 size-80 rounded-full bg-enavol-green/10 blur-3xl" />
      <p
        className="absolute right-7 top-6 font-heading text-7xl uppercase leading-none text-white/[0.035] sm:text-9xl"
        aria-hidden
      >
        Voluntariado
      </p>

      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 720 460"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
        focusable="false"
      >
        <defs>
          <pattern id="enavol-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0V44" fill="none" stroke="white" strokeOpacity="0.035" strokeWidth="1" />
          </pattern>
          <radialGradient id="enavol-halo">
            <stop offset="0" stopColor="var(--enavol-green)" stopOpacity="0.22" />
            <stop offset="1" stopColor="var(--enavol-green)" stopOpacity="0" />
          </radialGradient>
          <path id="enavol-ring-text" d="M304 234a76 76 0 1 1 152 0a76 76 0 1 1 -152 0" />
        </defs>

        <rect width="720" height="460" fill="url(#enavol-grid)" />
        <motion.circle
          cx={enavolHub.x}
          cy={enavolHub.y}
          r="118"
          fill="url(#enavol-halo)"
          animate={active ? { r: [108, 126, 108], opacity: [0.55, 0.9, 0.55] } : { r: 116, opacity: 0.65 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {enavolPerimeter.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.55 + index * 0.045, ease: "easeOut" }}
          />
        ))}

        {enavolSpokes.map((d, index) => (
          <ConnectionPath
            key={d}
            d={d}
            active={active}
            color={index % 2 === 0 ? "var(--enavol-green)" : "var(--enavol-orange)"}
            delay={0.18 + index * 0.055}
            duration={4.8 + (index % 3) * 0.7}
          />
        ))}

        {enavolNodes.map((node, index) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.55 + index * 0.07 }}
          >
            <circle cx={node.x} cy={node.y} r="20" fill="var(--enavol-night)" stroke="white" strokeOpacity="0.22" />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill={node.color}
              animate={active ? { r: [5, 7.5, 5], opacity: [0.75, 1, 0.75] } : { r: 6, opacity: 0.9 }}
              transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.28, ease: "easeInOut" }}
            />
          </motion.g>
        ))}

        <circle cx={enavolHub.x} cy={enavolHub.y} r="77" fill="var(--enavol-night)" stroke="white" strokeOpacity="0.12" />
        {[0, 90, 180, 270].map((rotation, index) => (
          <motion.circle
            key={rotation}
            cx={enavolHub.x}
            cy={enavolHub.y}
            r="76"
            pathLength="100"
            fill="none"
            stroke={[
              "var(--enavol-green)",
              "var(--enavol-orange)",
              "var(--enavol-blue)",
              "white",
            ][index]}
            strokeWidth="4"
            strokeDasharray="17 83"
            strokeDashoffset={-rotation / 3.6}
            strokeLinecap="round"
            animate={active ? { strokeDashoffset: [-rotation / 3.6, -rotation / 3.6 - 100] } : undefined}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          />
        ))}
        <circle cx={enavolHub.x} cy={enavolHub.y} r="55" fill="var(--enavol-night)" stroke="var(--enavol-green)" strokeOpacity="0.5" />
        <PersonGlyph x={enavolHub.x - 6} y={enavolHub.y - 5} color="var(--enavol-green)" />
        <PersonGlyph x={enavolHub.x + 8} y={enavolHub.y - 2} color="white" />
        <text x={enavolHub.x} y={enavolHub.y + 28} textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="2">
          RED NACIONAL
        </text>
        <text fill="white" fillOpacity="0.48" fontSize="7.5" letterSpacing="2.2">
          <textPath href="#enavol-ring-text" startOffset="50%" textAnchor="middle">
            ENCUENTRO NACIONAL · VOLUNTARIADO · PERÚ ·
          </textPath>
        </text>

        <text
          x="360"
          y="424"
          textAnchor="middle"
          fill="white"
          fillOpacity="0.45"
          fontSize="7"
          letterSpacing="1.8"
          className="hidden sm:inline lg:hidden"
        >
          PERSONAS · REGIONES · PROPÓSITO COMPARTIDO
        </text>
        <text
          x="42"
          y="424"
          fill="white"
          fillOpacity="0.45"
          fontSize="9"
          letterSpacing="2.4"
          className="hidden lg:inline"
        >
          PERSONAS · REGIONES · PROPÓSITO COMPARTIDO
        </text>
      </svg>
    </div>
  );
}

export function ClimateAtlasVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const active = inView && !reduceMotion;

  return (
    <div ref={ref} className="relative h-64 overflow-hidden border-white/10 bg-gradient-to-br from-climate-rust/35 via-climate-burgundy to-black/40 sm:h-auto sm:min-h-[25rem] md:min-h-full md:border-l">
      <div className="absolute -right-20 -top-24 size-96 rounded-full bg-climate-rust/20 blur-3xl" />

      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 820 560"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
        focusable="false"
      >
        <defs>
          <pattern id="climate-grid" width="52" height="52" patternUnits="userSpaceOnUse">
            <path d="M52 0H0V52" fill="none" stroke="white" strokeOpacity="0.035" strokeWidth="1" />
          </pattern>
          <radialGradient id="amazon-glow">
            <stop offset="0" stopColor="var(--climate-green)" stopOpacity="0.42" />
            <stop offset="1" stopColor="var(--climate-green)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="820" height="560" fill="url(#climate-grid)" />
        <text x="778" y="72" textAnchor="end" fill="white" fillOpacity="0.13" fontSize="42" fontWeight="700" letterSpacing="1">
          DESDE LA AMAZONÍA
        </text>
        <text x="778" y="112" textAnchor="end" fill="var(--climate-green)" fillOpacity="0.55" fontSize="30" fontWeight="700" letterSpacing="3">
          HACIA EL MUNDO
        </text>

        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <path
            d={worldLandPath}
            fill="var(--climate-cream)"
            fillOpacity="0.085"
            fillRule="evenodd"
            stroke="var(--climate-cream)"
            strokeOpacity="0.16"
            strokeWidth="0.7"
            vectorEffect="non-scaling-stroke"
          />
        </motion.g>

        <motion.path
          d={peruLandPath}
          fill="var(--climate-green)"
          stroke="var(--climate-green)"
          strokeWidth="1.35"
          vectorEffect="non-scaling-stroke"
          initial={{ fillOpacity: 0, pathLength: 0 }}
          whileInView={{ fillOpacity: 0.34, pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.15, delay: 0.45, ease: "easeOut" }}
        />

        {climateRoutes.map((route, index) => (
          <ConnectionPath
            key={route.id}
            d={route.d}
            active={active}
            color="var(--climate-green)"
            delay={1.25 + index * 0.18}
            duration={5.2 + index * 0.35}
          />
        ))}

        {climateRoutes.map((route, index) => (
          <motion.g
            key={route.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 1.75 + index * 0.18 }}
          >
            <circle cx={route.x} cy={route.y} r="13" fill="var(--climate-burgundy)" stroke="var(--climate-cream)" strokeOpacity="0.4" />
            <motion.circle
              cx={route.x}
              cy={route.y}
              r="4"
              fill="var(--climate-green)"
              animate={active ? { r: [3.5, 5.5, 3.5], opacity: [0.7, 1, 0.7] } : { r: 4.5, opacity: 0.9 }}
              transition={{ duration: 3.5, repeat: Infinity, delay: index * 0.32, ease: "easeInOut" }}
            />
            <text
              x={route.x + (route.x > 620 ? -18 : 18)}
              y={route.y - 15}
              textAnchor={route.x > 620 ? "end" : "start"}
              fill="white"
              fillOpacity="0.62"
              fontSize="9"
              letterSpacing="1.8"
              className="text-[13px] sm:text-[9px]"
            >
              {route.label}
            </text>
          </motion.g>
        ))}

        <motion.circle
          cx={climateOrigin.x}
          cy={climateOrigin.y}
          r="40"
          fill="url(#amazon-glow)"
          animate={active ? { r: [34, 48, 34], opacity: [0.5, 0.9, 0.5] } : { r: 40, opacity: 0.65 }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx={climateOrigin.x}
          cy={climateOrigin.y}
          r="15"
          fill="var(--climate-burgundy)"
          stroke="var(--climate-green)"
          strokeWidth="1.5"
          animate={active ? { strokeOpacity: [0.65, 1, 0.65] } : { strokeOpacity: 0.9 }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx={climateOrigin.x} cy={climateOrigin.y} r="5" fill="var(--climate-green)" />
        <text
          x={climateOrigin.x}
          y={climateOrigin.y + 35}
          textAnchor="middle"
          fill="var(--climate-cream)"
          fillOpacity="0.9"
          fontSize="9"
          fontWeight="700"
          letterSpacing="1.45"
          className="text-[12px] sm:text-[9px]"
        >
          AMAZONÍA PERUANA · PERÚ
        </text>

        <text
          x="410"
          y="500"
          textAnchor="middle"
          fill="white"
          fillOpacity="0.45"
          fontSize="7"
          letterSpacing="1.6"
          className="hidden sm:inline lg:hidden"
        >
          TERRITORIO · CONOCIMIENTO · ACCIÓN GLOBAL
        </text>
        <text
          x="410"
          y="518"
          textAnchor="middle"
          fill="var(--climate-green)"
          fillOpacity="0.55"
          fontSize="7"
          letterSpacing="1.4"
          className="hidden sm:inline lg:hidden"
        >
          06°13′S · 77°51′O
        </text>
        <text
          x="42"
          y="520"
          fill="white"
          fillOpacity="0.45"
          fontSize="9"
          letterSpacing="2.4"
          className="hidden lg:inline"
        >
          TERRITORIO · CONOCIMIENTO · ACCIÓN GLOBAL
        </text>
        <text
          x="778"
          y="520"
          textAnchor="end"
          fill="var(--climate-green)"
          fillOpacity="0.55"
          fontSize="9"
          letterSpacing="2"
          className="hidden lg:inline"
        >
          06°13′S · 77°51′O
        </text>
      </svg>
    </div>
  );
}

export function ProjectVisual({ motif }: { motif: string }) {
  return motif === "global" ? <ClimateAtlasVisual /> : <EnavolNetworkVisual />;
}
