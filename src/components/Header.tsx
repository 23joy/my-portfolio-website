"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MagneticButton from "./animations/MagneticButton";
import { motion } from "framer-motion";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.2,
      ease: "power2.out",
    });
  });

  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 py-4 lg:px-20"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3 nav-item">
          <div className="size-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">
            Joyshree Roy
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a
            className="nav-item text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
            href="#work"
          >
            Work
          </a>
          <a
            className="nav-item text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="nav-item text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="nav-item text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
            href="#contact"
          >
            Contact
          </a>
          <div className="nav-item">
            <MagneticButton>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px 2px rgba(191,0,255,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest transition-colors"
              >
                Hire Me
              </motion.button>
            </MagneticButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
