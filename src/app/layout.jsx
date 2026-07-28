import Script from "next/script";
import { Providers } from "./providers";
import "@/index.css";
import "@/App.css";

export const metadata = {
  metadataBase: new URL("https://adelsoft.co"),
  title: {
    default: "Adelsoft | Custom Software Development",
    template: "%s",
  },
  description:
    "Custom software development, web applications, GIS solutions and AI-powered automation for businesses.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Adelsoft",
    title: "Adelsoft | Custom Software Development",
    description:
      "Helping businesses grow through custom software, AI automation and GIS solutions.",
    url: "https://adelsoft.co/",
    images: [
      {
        url: "https://adelsoft.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adelsoft | Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adelsoft | Custom Software Development",
    description:
      "Helping businesses grow through custom software, AI automation and GIS solutions.",
    images: ["https://adelsoft.co/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/fonts/font-awesome/css/font-awesome.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="page-top">
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P3PZ8GHH');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3PZ8GHH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
