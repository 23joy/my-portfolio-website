"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // Section header fade in
    gsap.from(".skills-header", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Staggered cards reveal
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.5)",
    });
  }, { scope: sectionRef });

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="px-6 py-20 lg:px-20 bg-charcoal/30" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="skills-header flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-2">The Craft</h2>
          </div>
          <p className="text-white/50 max-w-md text-right">
            A software developer focused on building high-performance applications with a focus on bold, dynamic visual flows and offset grid layouts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div ref={addToRefs} className="lg:col-span-7 cursor-pointer perspective-1000">
            <motion.div 
              whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02, boxShadow: "0px 15px 35px rgba(191,0,255,0.3)" }}
              className="aspect-video rounded-3xl overflow-hidden relative bg-black h-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="w-full h-full object-cover transition-transform duration-700 opacity-60" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBddHBUhG89IF2dl2dr5cPNheK-OE2dVJIeWIhrr5Plifiki5OUSLcPXw2YYNZu_xl1ATixwlLYKGeY9x39UFnrs2oQVC2V2tbnuZt_OXXlOBW56Y_pw-1XYZRPRnfZzO2cJPpPXr3UhcX5qSYlwjwTVX-AyF35rf_KdbJJ4-cQ-9hikUOe-qKzSEcOPiZ2kToJ0wVeVrbIFhrNrxdxPSzC8uDHA3tA4zwA3Kk814-gwEdgsEF7rA6pHML_u-2MvvVEUrPQlbBp4sA" 
                alt="Project Nexus" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 pointer-events-none"></div>
              <div className="absolute bottom-10 left-10 pointer-events-none">
                <h3 className="text-3xl font-black uppercase">Project Nexus</h3>
                <p className="text-white/60 font-bold tracking-widest text-sm mt-2">UI/UX • DEVELOPMENT</p>
              </div>
            </motion.div>
          </div>
          <div ref={addToRefs} className="lg:col-span-5 mt-12 lg:mt-24 cursor-pointer perspective-1000">
            <motion.div 
              whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02, boxShadow: "0px 15px 35px rgba(0,242,255,0.3)" }}
              className="aspect-square rounded-3xl overflow-hidden relative bg-black h-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="w-full h-full object-cover transition-transform duration-700 opacity-60" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8gvgUvmi0yKYUPFZjKdZccgOUew5PUYt29WBl0OSwQDII90nK76bBvezWbK0yByh2ShXDREdbCuWucmYqu6YPwB1JYwpP57OhQHIXgysMbS9LKxMb8rtnIT8YPZqfvsJEJ34v_HkT8RY_XNk8qmyi9GHlqUhJfeSUZBMSySr1RDSRjyUNrEkO77v1qf9l0goQyIRb3LWZsCAME1ruacAYLJjbKEOj5wj2vaJWKWyQXglhKAaxJHqxvP_U77nzwsVnhzB4ePFfv_g" 
                alt="Core Engine" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 pointer-events-none"></div>
              <div className="absolute bottom-10 left-10 pointer-events-none">
                <h3 className="text-3xl font-black uppercase">Core Engine</h3>
                <p className="text-white/60 font-bold tracking-widest text-sm mt-2">BACKEND • ARCHITECTURE</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
