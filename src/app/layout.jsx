import Script from "next/script";
import { Providers } from "./providers";
import "@/index.css";
import "@/App.css";

export const metadata = {
  metadataBase: new URL("https://adelsoft.co"),
  title: {
    default: "Adelsoft | Custom Software Development for Businesses",
    template: "%s",
  },
  description:
    "Custom software development, web applications, cloud solutions and AI-powered systems for growing businesses.",
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
    title: "Adelsoft | Custom Software Development for Businesses",
    description:
      "Custom software development, web applications, cloud solutions and AI-powered systems for growing businesses.",
    url: "https://adelsoft.co/",
    images: [
      {
        url: "https://adelsoft.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adelsoft | Custom Software Development for Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adelsoft | Custom Software Development for Businesses",
    description: "Custom software solutions for modern businesses.",
    images: ["https://adelsoft.co/og-image.jpg"],
  },
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

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
        {gtmId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
              strategy="afterInteractive"
            />
            <Script id="gtm" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gtmId}');`}
            </Script>
          </>
        ) : null}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
