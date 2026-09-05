import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const siteUrl = "https://ecosfoundation.ong";
const title = "Ecos Fundation — Juntos impulsamos un futuro más sostenible";
const description =
  "Articulamos la ciencia, innovación y comunidad para transformar ideas en proyectos sostenibles y con impacto positivo para el planeta.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Ecos Fundation",
    "sostenibilidad",
    "proyectos ambientales",
    "innovación social",
    "voluntariado Perú",
    "reforestación",
    "cambio climático",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: "Ecos Fundation",
    title,
    description,
    images: [
      { url: "/hero/hero1.jpg", width: 1200, height: 630, alt: title },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero/hero1.jpg"],
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Ecos Fundation",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description,
  email: "contacto@ecosfoundation.ong",
  telephone: "+51 972 665 388",
  address: { "@type": "PostalAddress", addressCountry: "PE" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.remove('dark')}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
