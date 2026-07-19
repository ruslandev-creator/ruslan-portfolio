import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ContactModalProvider } from "@/components/providers/ContactModal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — ${site.role} | O'zbekiston`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "veb-dizayn",
    "landing page",
    "web dizayner O'zbekiston",
    "premium sayt",
    "Next.js dizayn",
    "Toshkent web design",
    "biznes uchun sayt",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: site.domain,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: site.domain },
};

export const viewport: Viewport = {
  themeColor: "#050609",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.domain,
  telephone: site.phone,
  areaServed: "UZ",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toshkent",
    addressCountry: "UZ",
  },
  knowsAbout: ["Web Design", "Landing Pages", "UI/UX", "Next.js", "SEO"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={GeistMono.variable}>
      <body className="min-h-screen selection:bg-accent-500/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#portfolio"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-3 focus:py-1.5 focus:text-ink-950"
        >
          Asosiy kontentga o&apos;tish
        </a>
        <SmoothScroll>
          <ContactModalProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ContactModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
