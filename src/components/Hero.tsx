"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Text Animation
    if (titleRef.current) {
      const splitText = new SplitType(titleRef.current, { types: "chars,words" });

      const tl = gsap.timeline();

      tl.from(splitText.chars, {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.05,
        duration: 1,
        ease: "back.out(1.7)",
      });

      tl.from(".gradient-text", {
        y: 50,
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.5");

      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
      }, "-=0.5");

      // Glow animation on subtitle
      gsap.to(subtitleRef.current, {
        textShadow: "0px 0px 15px rgba(191,0,255,0.4)",
        duration: 2,
        yoyo: true,
        repeat: -1,
      });
    }

    // 2. Profile Image Animation
    if (imageRef.current) {
      const tl = gsap.timeline();
      tl.from(imageRef.current, {
        scale: 0.8,
        rotate: -10,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out",
      });

      // Floating animation
      gsap.to(imageRef.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, { scope: containerRef });

  // 3. Parallax Mouse Move on Image
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current || !meshRef.current) return;

    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 20;
    const yPos = (clientY / window.innerHeight - 0.5) * 20;

    gsap.to(imageRef.current, {
      x: xPos,
      y: yPos,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(meshRef.current, {
      x: xPos * -0.5,
      y: yPos * -0.5,
      duration: 1.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative px-6 py-20 lg:px-20 lg:py-40 max-w-7xl mx-auto overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated Mesh Background */}
      <div
        ref={meshRef}
        className="absolute inset-0 bg-primary/5 blur-[150px] -z-10 rounded-full w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-8">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            <div ref={titleRef} style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>Joyshree</div>
            <span className="gradient-text inline-block mt-2">Roy</span>
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
            Hi! I’m a web developer who loves building clean and interactive websites. I work with React, Next.js, and Tailwind CSS to create responsive and user-friendly designs.
            I’ve worked on features like authentication, API integration, and modern UI components. I enjoy learning new technologies and improving my skills every day.
            My goal is to build impactful projects and grow as a developer.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px 2px rgba(191,0,255,0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-lg transition-colors"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)", boxShadow: "0px 0px 20px 0px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-lg transition-colors"
            >
              Get In Touch
            </motion.button>
          </div>
        </div>
        <div className="lg:col-span-4 relative">
          <div ref={imageRef} className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 rotate-3 hover:rotate-0 transition-transform duration-700">
            <div className="w-full h-full rounded-2xl bg-charcoal overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://i.ibb.co.com/wFwv12h8/Chat-GPT-Image-May-6-2026-03-56-30-AM.png"
                alt="Portrait"
                className="w-full h-full object-cover grayscale contrast-125 opacity-80 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
