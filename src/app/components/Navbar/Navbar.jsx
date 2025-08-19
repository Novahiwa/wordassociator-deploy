"use client";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineQuestionCircle,
  AiOutlineSolution,
} from "react-icons/ai";
import { useUser } from "../../context/UserContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useUser(); // access user and logout
  const router = useRouter();

  const NavbarMenu = [
    { id: 1, title: "Home", path: "/", icon: <AiOutlineHome /> },
    { id: 2, title: "Services", path: "/services", icon: <AiOutlineSolution /> },
    { id: 3, title: "About", path: "/about", icon: <AiOutlineQuestionCircle /> },
    { id: 4, title: "Contact", path: "/contact", icon: <AiOutlinePhone /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = () => {
    logout(); // removes user from localStorage and context
    router.push("/"); // redirect to landing page
  };

  return (
    <nav className="bg-[var(--dark3)] relative z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Image src={logo} alt="word associator logo" className="w-[200px] cursor-pointer" />

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-[var(--secondary)] relative group"
                >
                  <div className="flex items-center gap-2 text-[var(--primary)] text-xl">
                    {menu.icon} {menu.title}
                  </div>
                </Link>
              </li>
            ))}

            {user ? (
              <button
                onClick={handleSignOut}
                className="bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 duration-200 shadow-md py-2 px-6 flex items-center gap-2"
              >
                Sign Out <FaSignOutAlt />
              </button>
            ) : (
              <Link href="/sign">
                <button className="bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--secondary)] duration-200 shadow-md py-2 px-6 flex items-center gap-2">
                  Sign In <FaSignInAlt />
                </button>
              </Link>
            )}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <IoMdClose className="text-4xl text-[var(--dark)]" />
            ) : (
              <IoMdMenu className="text-4xl text-[var(--dark)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[var(--dark3)] shadow-lg transform transition-transform duration-300 z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <ul className="flex flex-col gap-6 text-white">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  href={menu.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-lg hover:text-[var(--secondary)]"
                >
                  {menu.icon} {menu.title}
                </Link>
              </li>
            ))}

            {user ? (
              <button
                onClick={() => {
                  handleSignOut();
                  setIsMenuOpen(false);
                }}
                className="mt-4 w-full bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 duration-200 py-2 flex items-center justify-center gap-2"
              >
                Sign Out <FaSignOutAlt />
              </button>
            ) : (
              <Link href="/sign" onClick={() => setIsMenuOpen(false)}>
                <button className="mt-4 w-full bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--secondary)] duration-200 py-2 flex items-center justify-center gap-2">
                  Sign In <FaSignInAlt />
                </button>
              </Link>
            )}
          </ul>
        </div>
      </div>

      {/* Optional Overlay */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        />
      )}
    </nav>
  );
}
