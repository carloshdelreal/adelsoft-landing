import Script from "next/script";
import { Providers } from "./providers";
import "@/index.css";
import "@/App.css";

export const metadata = {
  metadataBase: new URL("https://adelsoft.co"),
  title: {
    default: "Adelsoft Web Development",
    template: "%s",
  },
  description:
    "Web development services. We build the apps your customers will love and your competition will hate.",
  openGraph: {
    type: "website",
    siteName: "Adelsoft",
    title: "Adelsoft Web Development",
    description:
      "Web development services. We build the apps your customers will love and your competition will hate.",
    url: "https://adelsoft.co/en/",
    images: [
      {
        url: "https://adelsoft.co/img/og.jpg",
        width: 1200,
        height: 630,
        alt: "Adelsoft Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adelsoft Web Development",
    description:
      "Web development services. We build the apps your customers will love and your competition will hate.",
    images: ["https://adelsoft.co/img/og.jpg"],
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
