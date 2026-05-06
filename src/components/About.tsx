"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef1 = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Illustration floating
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Header fade
    gsap.from(".about-header", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Split text animation for paragraphs
    [textRef1.current, textRef2.current].forEach((textEl) => {
      if (textEl) {
        const split = new SplitType(textEl, { types: "lines" });
        
        gsap.from(split.lines, {
          scrollTrigger: {
            trigger: textEl,
            start: "top 85%",
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="px-6 py-20 lg:px-20 bg-background-dark" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <h2 className="about-header text-5xl font-black tracking-tighter mb-8 uppercase">About Me</h2>
          <div className="space-y-6 text-xl text-white/70 leading-relaxed font-light">
            <p ref={textRef1}>
              I am <span className="text-white font-bold">Joyshree Roy</span>,I’m a software developer focused on building high-performance, scalable web applications. I enjoy creating clean user interfaces and seamless user experiences using modern web technologies. My goal is to turn ideas into efficient, reliable, and user-friendly digital products.
            </p>
            <p ref={textRef2}>
              With over 6 months of experience in the industry, I&apos;ve helped startups and established brands alike push the boundaries of what&apos;s possible on the web. I specialize in turning complex problems into elegant, user-centric solutions.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2 perspective-1000">
          <div className="relative w-full aspect-square glass-card rounded-full overflow-hidden border-8 border-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              ref={imageRef}
              className="w-full h-full object-cover scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi52j3gcCbpyAuiAY5XyJgWfwa5soeqXcA34cBj5V0bkkGopJ6g5IrqoscMzNM2DSMEMWUotu1HUOJEYbD-gLId9Kl6vtcx5N3ZFYRWN09ZGcHRLiwpt4DI_IRFUa92Tn4H5qK21KFFM-xaqFxtcjCm7epsDlHgBx9zQ4dMGMwiAcBA0C5GkzapHYsp3gtsgekR4CbMCsTXg71cMmgLo50wSVwUyPpbQHcbdZExmdJrRlmvuhciGWlHaC5dewq5tqIPrS4QUP1twU" 
              alt="About Me Workstation" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
