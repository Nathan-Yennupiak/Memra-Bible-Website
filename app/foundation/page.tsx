"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const childUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const viewportOnce = { once: true, margin: "-100px" };

export default function FoundationPage() {
  return (
    <div className="bg-white text-black selection:bg-black selection:text-white pb-24">
      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/foundation/hero.png" 
            alt="Memra Foundation Mission" 
            className="w-full h-full object-cover grayscale opacity-90"
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for text contrast */}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pt-20"
        >
          <motion.div variants={childUp} className="text-[13px] font-bold tracking-[0.2em] uppercase text-white/70 mb-6">
            The Memra Foundation
          </motion.div>
          <motion.h1
            variants={childUp}
            className="font-serif text-[clamp(40px,6vw,64px)] font-bold leading-[1.1] tracking-tight"
          >
            Equipping Leaders.<br />
            <span className="italic font-normal">Caring for the Vulnerable.</span>
          </motion.h1>
          <motion.p
            variants={childUp}
            className="mt-8 text-[18px] md:text-[22px] leading-[1.6] text-white/90 max-w-2xl mx-auto font-light"
          >
            We believe that the transformation of the world begins with the Spirit-Word. But for that Word to take root, the hands that plant it must be strengthened.
          </motion.p>
        </motion.div>
      </section>

      {/* THE MISSION INTRODUCTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.h2 variants={childUp} className="text-[14px] font-bold tracking-widest uppercase text-[#999] mb-8">
            Our Calling
          </motion.h2>
          <motion.p variants={childUp} className="font-serif text-[clamp(24px,4vw,36px)] leading-[1.4] text-black italic">
            "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress..."
          </motion.p>
          <motion.div variants={childUp} className="mt-6 text-[14px] font-bold tracking-widest text-[#555] uppercase">
            — James 1:27
          </motion.div>
          
          <motion.div variants={childUp} className="mt-16 w-px h-24 bg-black/20 mx-auto" />
        </motion.div>
      </section>

      {/* PILLAR 1: RURAL PASTORS */}
      <section className="px-6 lg:px-10 py-16 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="w-full md:w-1/2"
          >
            <div className="w-full aspect-4/5 bg-[#111] relative overflow-hidden rounded-sm shadow-xl">
               <img 
                 src="/foundation/pastors.png" 
                 alt="Rural African Pastor" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                 loading="lazy"
               />
               <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="w-full md:w-1/2 flex flex-col justify-center py-4"
          >
            <motion.div variants={childUp} className="text-[13px] font-bold tracking-widest uppercase text-[#999] mb-4">
              Pillar One
            </motion.div>
            <motion.h2
              variants={childUp}
              className="font-serif text-[clamp(32px,5vw,48px)] font-bold leading-[1.15] text-black"
            >
              Equipping the Shepherds
            </motion.h2>
            <motion.div variants={childUp} className="mt-8 flex flex-col gap-6 text-[16px] leading-[1.8] text-[#555]">
              <p>
                In the most remote and challenging environments, faithful pastors labor tirelessly to bring hope and truth to their communities. Yet, many of these rural leaders operate with almost no resources, limited theological training, and profound financial hardship.
              </p>
              <p>
                The Memra Foundation is dedicated to empowering these frontline workers. We provide essential resources, training materials, and direct support to rural pastors and churches. 
              </p>
              <p>
                By strengthening the shepherd, we secure the flock. When a rural church is equipped, its entire community is transformed by the power of the Gospel.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PILLAR 2: ORPHANS & LESS PRIVILEGED */}
      <section className="px-6 lg:px-10 py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="w-full md:w-1/2"
          >
            <div className="w-full aspect-4/5 bg-[#111] relative overflow-hidden rounded-sm shadow-xl">
               <img 
                 src="/foundation/orphans.png" 
                 alt="Smiling Rural Child" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                 loading="lazy"
               />
               <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="w-full md:w-1/2 flex flex-col justify-center py-4"
          >
            <motion.div variants={childUp} className="text-[13px] font-bold tracking-widest uppercase text-[#999] mb-4">
              Pillar Two
            </motion.div>
            <motion.h2
              variants={childUp}
              className="font-serif text-[clamp(32px,5vw,48px)] font-bold leading-[1.15] text-black"
            >
              Caring for the Vulnerable
            </motion.h2>
            <motion.div variants={childUp} className="mt-8 flex flex-col gap-6 text-[16px] leading-[1.8] text-[#555]">
              <p>
                True ministry extends beyond the pulpit and into the streets. We cannot preach a Gospel of love while ignoring the desperate physical needs of those around us.
              </p>
              <p>
                Through the Memra Foundation, we actively seek out orphans, widows, and the less privileged in marginalized communities. We supply educational support, basic necessities, and a foundation of love and care.
              </p>
              <p>
                Every child deserves to know they are seen, valued, and fiercely loved by their Creator. We aim to be the hands and feet that prove it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 lg:px-10 py-24 bg-black text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={childUp}
            className="font-serif text-[clamp(36px,5vw,56px)] font-bold leading-[1.1]"
          >
            Join the Mission
          </motion.h2>
          <motion.p
            variants={childUp}
            className="mt-6 text-[18px] text-[#A1A1AA] leading-[1.6]"
          >
            Memra Bible is entirely free to the world, but our foundation's work relies on the incredible generosity of believers like you. Partner with us today to equip a pastor, educate a child, and advance the Kingdom.
          </motion.p>
          <motion.div variants={childUp} className="mt-12 flex justify-center">
            <a
              href="https://memrafoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[15px] font-bold tracking-wide uppercase text-black bg-white py-[16px] px-[40px] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Support the Foundation
            </a>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
