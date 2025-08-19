import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "../app/context/UserContext";

export const metadata = {
  metadataBase: new URL("https://wam.kesug.com"),
  keywords: [
    "word associator",
    "word associator Malawi",
    "The word associator",
    "wordassociator",
    "word associator official",
    "Novahiwa Mzika",
    "Vincent Maulidi",
    "word associator website",
  ],

  title: {
    default: "Word Associator Official Website",
    template: "%s - word associator official website",
  },

  openGraph: {
    description: "This is the official website for the word associator brand",
  },

  description: "This is the official website for the word associator brand",
  twitter: {
    card: "summary_large_image",
  },
};

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <UserProvider>
            {<Navbar />}
            {children}
            {<Footer />}
          </UserProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
