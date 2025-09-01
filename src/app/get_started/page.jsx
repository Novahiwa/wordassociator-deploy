"use client";
import React from "react";
import startimg from "../assets/undraw_learning_qt7d.svg";
import Image from "next/image";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import { useRouter } from "next/navigation";

const metadata = {
  title: "Get Started - Word Associator",
  description: "Start your journey with Word Associator. Sign in with Google to access tools, resources, and a creative tech hub in Malawi.",
};

const GetStarted = () => {
  const router = useRouter();

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    localStorage.setItem("user", JSON.stringify(decoded));
    router.push("/home");
  };

  return (
    <main className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:w-[90%]">
      <section className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get Started with <span className="text-[var(--primary)]">Word Associator</span>
          </h1>
          <p className="text-[var(--dark)] md:w-[80%] mb-8">
            Word Associator designs websites, apps, and software that simplify your life. We remove roadblocks, help you stay organized, and let you achieve more with less stress.
          </p>
          <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login failed")} />
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={startimg}
            alt="Get started with Word Associator"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
      </section>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Word Associator",
        "url": "https://wam.kesug.com",
        "logo": "https://wam.kesug.com/logo.png",
        "sameAs": [
          "https://facebook.com/profile.php?id=100071074852209",
          "https://wa.link/8mgfa6",
          "https://youtube.com/@wordassociator?si=xUbMPbNR1q3kgK1N",
          "https://t.me/wordassociator"
        ]
      }`}} />
    </main>
  );
};

export default GetStarted;
