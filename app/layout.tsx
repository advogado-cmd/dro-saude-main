import type React from "react"
import type { Metadata, Viewport } from "next"
import { Roboto, Roboto_Serif } from "next/font/google"
import Script from "next/script"
import { WaTracker } from "@/components/wa-tracker"
import "./globals.css"

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-roboto", display: "swap" })
const robotoSerif = Roboto_Serif({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-roboto-serif", display: "swap" })

export const metadata: Metadata = {
  title: "Dr. Oliveira Advocacia — Direito à Saúde",
  description: "Orientação jurídica em Direito à Saúde: negativa de cobertura, carência, reajuste e reembolso.",
  icons: { icon: "/logo/emblema.png" },
}

export const viewport: Viewport = { themeColor: "#082533", width: "device-width", initialScale: 1 }

// Rastreamento isolado deste subdomínio (GTM próprio via env).
const GTM = process.env.NEXT_PUBLIC_GTM_ID

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        {GTM ? (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM}');`}
          </Script>
        ) : null}
      </head>
      <body className={`${roboto.variable} ${robotoSerif.variable} font-sans antialiased`}>
        {GTM ? (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
          </noscript>
        ) : null}
        {children}
        <WaTracker site="saude" />
      </body>
    </html>
  )
}
