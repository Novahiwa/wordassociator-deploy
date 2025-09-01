"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";
import Image from "next/image";

const metadata = {
  title: "Home - Word Associator",
  description: "Access your Word Associator dashboard, explore projects, and manage your profile in Malawi's premier web and software hub.",
};

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/"); // redirect if no user
    }
  }, [router]);

  if (!user) return null;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto mb-8">
        <div className="flex items-center space-x-3">
          <Image
            src={user.picture}
            alt={user.name}
            width={48}
            height={48}
            className="rounded-full border-2 border-indigo-500"
          />
          <div>
            <h1 className="text-xl font-bold">Welcome back, {user.name}</h1>
            <p className="text-[var(--dark2)]">{user.email}</p>
          </div>
        </div>
      </header>

      {/* Actions */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <a href="/projects" className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
          <h2 className="font-semibold text-indigo-600">My Projects</h2>
          <p className="text-sm text-gray-500 mt-2">Check out your latest work.</p>
        </a>
        <a href="/explore" className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
          <h2 className="font-semibold text-indigo-600">Explore</h2>
          <p className="text-sm text-gray-500 mt-2">See what others are building.</p>
        </a>
        <a href="/profile" className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
          <h2 className="font-semibold text-indigo-600">Profile</h2>
          <p className="text-sm text-gray-500 mt-2">Manage your account details.</p>
        </a>
        <article className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
          <h2 className="font-semibold text-indigo-600">Word Associator</h2>
          <p className="text-sm text-gray-500 mt-2">Your creative and tech hub.</p>
        </article>
      </section>

      {/* Updates */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-lg font-bold mb-4">Recent Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">New Portfolio Project</h3>
            <p className="text-sm text-gray-500 mt-2">Added a new React project to the showcase.</p>
          </article>
          <article className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">Blog Post</h3>
            <p className="text-sm text-gray-500 mt-2">Word Associator goes live with a new article on branding.</p>
          </article>
        </div>
      </section>

      {/* Structured Data for Home WebApplication */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Word Associator",
        "url": "https://wam.kesug.com",
        "applicationCategory": "BusinessApplication",
        "author": {
          "@type": "Person",
          "name": "${user.name}"
        }
      }`}} />
    </main>
  );
}
