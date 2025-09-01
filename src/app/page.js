"use client";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner2/Banner2";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Word Associator | Creative Web, App & Software Solutions</title>
        <meta
          name="description"
          content="Word Associator builds unique websites, apps, and software that reflect your vision. Join our community to elevate your digital presence."
        />
        <meta name="keywords" content="Word Associator, Web Development, App Development, Software Development, SEO, Creative Solutions" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wam.kesug.com/" />
      </Head>

      <main className="overflow-x-hidden bg-white text-[var(--dark)]">
        <section id="hero">
          <Hero />
        </section>

        <section id="services" aria-label="Our Services">
          <Services />
        </section>

        <section id="banner" aria-label="Why Choose Word Associator">
          <Banner />
        </section>

        <section id="community" aria-label="Join Our Community">
          <Banner2 />
        </section>

        {/* Structured Data for Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Word Associator",
              "url": "https://wam.kesug.com",
              "description": "Word Associator builds unique websites, apps, and software that reflect your vision.",
              "publisher": {
                "@type": "Organization",
                "name": "Word Associator"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://wam.kesug.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `,
          }}
        />
      </main>
    </>
  );
}
