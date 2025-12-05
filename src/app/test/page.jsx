"use client";
import { useEffect, useState } from "react";

export default function OpenApp() {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const appLink = "wordassociator://open";
    const fallbackLink = "https://wam.kesug.com/download/apk"; // link to your APK

    // Try to open app
    window.location.href = appLink;

    // Show fallback if app not installed
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showFallback) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Word Associator app not detected
        </h1>
        <p className="text-gray-600 mb-6">
          Looks like you don’t have the app yet. Only the first few downloads
          will receive a special reward 🎁
        </p>
        <a
          href="https://yourwebsite.com/download"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Download App Now
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Opening App...</h1>
      <p className="text-gray-600">Hang tight — this only takes a moment.</p>
    </div>
  );
}
