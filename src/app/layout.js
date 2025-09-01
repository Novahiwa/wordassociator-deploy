import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "../app/context/UserContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export const metadata = {
  metadataBase: new URL("https://wam.kesug.com"),
  title: {
    default: "Word Associator Official Website",
    template: "%s - Word Associator Official Website",
  },
  description: "Word Associator offers web, app, and software solutions in Malawi, helping developers and businesses launch and grow their digital presence.",
  keywords: [
    "Word Associator",
    "Word Associator Malawi",
    "web development Malawi",
    "software solutions Malawi",
    "Novahiwa Mzika",
    "Vincent Maulidi",
    "Word Associator official website",
  ],
  openGraph: {
    title: "Word Associator Official Website",
    description: "Word Associator helps businesses and developers launch their digital presence in Malawi.",
    url: "https://wam.kesug.com",
    siteName: "Word Associator",
    images: [
      {
        url: "https://wam.kesug.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Word Associator Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Associator Official Website",
    description: "Web, app, and software solutions in Malawi.",
    images: ["https://wam.kesug.com/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://wam.kesug.com" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        {/* Preload logo for faster LCP */}
        <link rel="preload" as="image" href="/logo.png" />
      </head>
      <body>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <UserProvider>
            <Navbar />
            {children}
            <Footer />
            <SpeedInsights />
          </UserProvider>
        </GoogleOAuthProvider>

        {/* Structured Data for Organization */}
        <Script id="organization-ld" type="application/ld+json" strategy="afterInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Word Associator",
            "url": "https://wam.kesug.com",
            "logo": "https://wam.kesug.com/logo.png",
            "sameAs": [
              "https://facebook.com/profile.php?id=100071074852209",
              "https://youtube.com/@wordassociator",
              "https://t.me/wordassociator",
              "https://wa.link/8mgfa6"
            ]
          }
          `}
        </Script>
      </body>
    </html>
  );
}
