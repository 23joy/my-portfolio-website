"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="px-6 py-20 lg:px-20 lg:py-40 bg-charcoal" id="contact">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6">
          Let&apos;s <span className="gradient-text">Build</span>
        </h2>
        <p className="text-xl text-white/60">Have a project in mind? Let&apos;s turn your vision into a digital reality.</p>
      </div>
      <div className="max-w-3xl mx-auto glass-card p-12 rounded-3xl relative overflow-hidden">
        {/* Subtle background glow for the form card */}
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>

        <form action="#" className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputGroup label="Full Name" type="text" placeholder="Jensen Ortega" />
            <InputGroup label="Email Address" type="email" placeholder="hello@jensen.dev" />
          </div>
          <InputGroup label="Your Message" type="textarea" placeholder="Tell me about your project..." />
          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 25px 5px rgba(191,0,255,0.6)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-white py-6 rounded-xl text-xl font-black uppercase tracking-[0.2em] transition-colors"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}

function InputGroup({ label, type, placeholder }: { label: string, type: string, placeholder: string }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-2 relative">
      <label className="text-sm font-black uppercase tracking-widest text-primary block">
        {label}
      </label>
      <div className="relative">
        {type === "textarea" ? (
          <textarea 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none transition-colors relative z-10" 
            placeholder={placeholder} 
            rows={5}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          ></textarea>
        ) : (
          <input 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none transition-colors relative z-10" 
            placeholder={placeholder} 
            type={type} 
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        )}
        
        {/* Animated Focus Glow Border using Framer Motion */}
        <AnimatePresence>
          {isFocused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                boxShadow: "0 0 15px 2px rgba(0, 242, 255, 0.4)",
                border: "2px solid #00f2ff",
                margin: "-1px"
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
