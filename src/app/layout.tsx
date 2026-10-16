import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";

export const metadata: Metadata = {
  title: "digixet - Creative UGC & Social Media Agency",
  description:
    "digixet turns real creators into your most powerful sales channel with authentic, high-converting UGC and short-form social strategy.",
  openGraph: {
    title: "digixet - Creative UGC & Social Media Agency",
    description:
      "digixet turns real creators into your most powerful sales channel with authentic, high-converting UGC and short-form social strategy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/css/reels-wbs.webflow.shared.c930502d8.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="icon" type="image/png" href="/digixet-logo.png" />
      </head>
      <body>
        <ScrollAnimationProvider />
        {children}

        {/* Load Google WebFont Boldonse */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        <Script id="webfont-boldonse" strategy="afterInteractive">
          {`WebFont.load({ google: { families: ["Boldonse:300,400,500,600,700"] } });`}
        </Script>

        {/* GSAP & Lenis */}
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://unpkg.com/lenis@1.3.4/dist/lenis.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
