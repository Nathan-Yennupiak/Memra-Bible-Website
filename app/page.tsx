"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState, useRef } from "react";
import screenshotHome from "@/assets/screenshots/home.jpg";
import screenshotReader from "@/assets/screenshots/reader.jpg";
import creatorImg from "@/assets/Nathan Yennupiak - Memra Bible.jpg";
import { IconApple, IconGooglePlay, IconChevron } from "@/components/Icons";
import { features, screens, stats, testimonials, faqs, versesOfTheDay } from "@/constants";



/**
 * Animation Variants for Framer Motion
 * These objects define the hidden and visible states for scroll-triggered animations.
 */

// A simple fade up animation for individual blocks
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// Staggered parent animation to reveal children sequentially
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Child animation used inside staggered parents
const childUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// Configuration to trigger animations only once when they enter the viewport
const viewportOnce = { once: true, margin: "-80px" };

/**
 * PhoneFrame Component
 * A reusable wrapper that renders a styled mobile device frame (iOS or Android).
 * It can display either an image screenshot or custom React nodes (children).
 */
const PhoneFrame = ({
  variant = "iphone",
  className = "",
  children,
  image,
  alt,
  width = 260,
  height = 540,
}: {
  variant?: "iphone" | "android";
  className?: string;
  children?: React.ReactNode;
  image?: any;
  alt?: string;
  width?: number | string;
  height?: number | string;
}) => {
  const isIphone = variant === "iphone";
  const imgSrc = image?.src || image;
  return (
    <div
      className={`relative bg-black border-[1.5px] border-[#1A1A1A] p-[10px] shadow-[0_60px_120px_rgba(0,0,0,0.18)] ${className}`}
      style={{
        width,
        height,
      }}
    >
      <div className="relative w-full h-full overflow-hidden bg-[#0D0D0D]">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={alt ?? "Memra Bible app screenshot"}
            className="w-full h-full object-cover block"
            loading="lazy"
          />
        ) : (
          <>
            {isIphone && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-2 z-10 bg-black rounded-[12px] w-[90px] h-[22px]"
              />
            )}
            <div className="w-full h-full pt-8 px-5 text-white">{children}</div>
          </>
        )}
      </div>
    </div>
  );
};

/**
 * ReaderMockup Component
 * Renders a stylized, static mockup of the Memra Bible reading interface.
 * Used visually within the PhoneFrame in the Hero and "Why Memra" sections.
 */
const ReaderMockup = () => (
  <div className="flex flex-col gap-3 text-[11px]">
    <div className="flex items-center justify-between text-[10px] text-[#666]">
      <span>JOHN 1</span>
      <span>KJV</span>
    </div>
    <div className="bg-[#222] h-px" />
    <p className="font-serif text-[13px] leading-[1.7]">
      <span className="text-[#666]">1</span>
      In the beginning was the Word, and the Word was with God, and the Word was God.
    </p>
    <p className="font-serif text-[13px] leading-[1.7]">
      <span className="text-[#666]">2</span>
      The same was in the beginning with God.
    </p>
    <p className="font-serif text-[13px] leading-[1.7]">
      <span className="text-[#666]">3</span>
      All things were made by him; and without him was not any thing made that was made.
    </p>
    <p className="font-serif text-[13px] leading-[1.7]">
      <span className="text-[#666]">4</span>
      In him was life; and the life was the light of men.
    </p>
  </div>
);

/* ---------- Screen variants for showcase ---------- */
const ScreenHome = () => (
  <div className="text-[11px] flex flex-col gap-3">
    <div className="font-serif text-[18px]">Good morning</div>
    <div className="text-[10px] text-[#777]">CONTINUE READING</div>
    <div className="border border-solid border-[#222] p-[10px]">
      <div className="text-[9px] text-[#A1A1AA]">JOHN 3</div>
      <div className="font-serif text-[12px] mt-[4px]">
        For God so loved the world...
      </div>
    </div>
    <div className="text-[10px] text-[#777] mt-[4px]">TODAY'S PLAN</div>
    <div className="text-[11px] border border-solid border-[#222] p-[10px]">Psalms 1–5</div>
  </div>
);

const ScreenReader = () => <ReaderMockup />;

const ScreenSearch = () => (
  <div className="text-[11px] flex flex-col gap-3">
    <div
      className="text-[11px] text-[#A1A1AA] border border-solid border-[#222] py-[8px] px-[10px]"
    >
      love
    </div>
    {["1 John 4:8", "John 3:16", "Romans 8:38", "1 Cor 13:4"].map((r) => (
      <div key={r} className="border-b border-b-solid border-b-[#1a1a1a]">
        <div className="text-[9px] text-[#A1A1AA]">{r}</div>
        <div className="font-serif text-[11px] mt-[2px]">
          ...God is love...
        </div>
      </div>
    ))}
  </div>
);

const ScreenNotes = () => (
  <div className="text-[11px] flex flex-col gap-3">
    <div className="text-[10px] text-[#777]">MY NOTES</div>
    {["Sermon — Sunday", "Romans Study", "Bible Group"].map((t) => (
      <div key={t} className="border border-solid border-[#222] p-[10px]">
        <div className="text-[11px]">{t}</div>
        <div className="text-[9px] text-[#777] mt-[4px]">Updated today</div>
      </div>
    ))}
  </div>
);

const ScreenHighlights = () => (
  <div className="text-[11px] flex flex-col gap-2">
    <div className="text-[10px] text-[#777]">HIGHLIGHTS</div>
    {[
      { c: "bg-[#F4D03F]", r: "Ps 23:1" },
      { c: "bg-[#5DADE2]", r: "Matt 5:8" },
      { c: "bg-[#58D68D]", r: "Phil 4:13" },
      { c: "bg-[#EC7AA8]", r: "Isa 40:31" },
    ].map((h) => (
      <div key={h.r} className={`text-[#FFF] p-[8px] ${h.c}`}>
        <div className="text-[9px]">{h.r}</div>
        <div className="font-serif text-[11px]">
          ...a verse worth remembering...
        </div>
      </div>
    ))}
  </div>
);

const ScreenPlans = () => (
  <div className="text-[11px] flex flex-col gap-3">
    <div className="text-[10px] text-[#777]">READING PLANS</div>
    {[
      { n: "Bible in a Year", d: "Day 142 of 365" },
      { n: "Gospel of John", d: "Day 5 of 21" },
      { n: "Proverbs Daily", d: "Day 12 of 31" },
    ].map((p) => (
      <div key={p.n} className="border border-solid border-[#222] p-[10px]">
        <div className="text-[11px]">{p.n}</div>
        <div className="text-[9px] text-[#777] mt-[4px]">{p.d}</div>
        <div className="bg-[#222] mt-[6px] h-[2px]">
          <div className="bg-[#1A1A1A] w-[40%] h-full" />
        </div>
      </div>
    ))}
  </div>
);



/**
 * Home Page Component
 * The main landing page for Memra Bible.
 * Orchestrates the layout of the Hero, Features, Stats, and Call-To-Action sections.
 */
export default function MemraLanding() {
  const [openFaq, setOpenFaq] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const verseToday = useMemo(() => {
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000,
    );
    return versesOfTheDay[dayOfYear % versesOfTheDay.length];
  }, []);

  const display = { fontFamily: "'Playfair Display', serif" };
  const body = { fontFamily: "'Inter', sans-serif" };

  return (
    <div className="overflow-x-hidden text-[#FFFFFF] bg-[#0A0A0A] max-w-[100vw]">
      <style>{`
        
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; }
        .label { font-size: 13px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* NAV */}
      {/* HERO */}
      <section
        id="home"
        className="relative px-6 lg:px-10 pt-32 lg:pt-24 pb-20 lg:pb-0 min-h-screen"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[45%_55%] gap-8 lg:gap-16 items-center min-h-[calc(100vh-128px)]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={childUp} className="label text-[#A1A1AA]">
              Scripture · Study · Community
            </motion.div>
            <motion.h1
              variants={childUp}
              className="mt-3 lg:mt-6 font-serif text-[clamp(40px,8vw,72px)] font-bold leading-[1.1] text-[#FFF]"
            >
              Experience the Bible Without Distractions
            </motion.h1>
            <motion.p
              variants={childUp}
              className="mt-3 lg:mt-6 max-w-xl text-[18px] leading-[1.7] text-[#A1A1AA]"
            >
              Read, study, search, highlight, and engage with Scripture through a beautifully
              designed experience built for believers, students, teachers, and ministers.
            </motion.p>
            <motion.div
              variants={childUp}
              className="mt-5 lg:mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 justify-center transition-all duration-300 hover:opacity-80 hover:-translate-y-0.5 active:translate-y-0 text-[15px] font-medium text-[#FFF] bg-[#222] border-2 border-solid border-[#444] rounded-none py-0 px-[32px] h-[52px]"
              >
                <IconGooglePlay />
                Download on Google Play
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 justify-center transition-all duration-300 hover:opacity-80 hover:-translate-y-0.5 active:translate-y-0 text-[15px] font-medium text-black bg-[#FFF] border-2 border-solid border-[#FFF] rounded-none py-0 px-[32px] h-[52px]"
              >
                <IconApple />
                Download on App Store
              </a>
            </motion.div>
            <motion.div
              variants={childUp}
              className="mt-3 lg:mt-5 text-[13px] text-[#A1A1AA]"
            >
              Free download · iOS & Android · No account required
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center items-center w-full overflow-hidden min-h-[600px]"
          >
            {/* Pronounced backlight glow behind the phones */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#FFFFFF] blur-[140px] rounded-full opacity-20 pointer-events-none z-0" />
            
            <div className="relative z-10 origin-center scale-[0.6] sm:scale-75 lg:scale-100 flex justify-center items-center">
              <div className="-rotate-4 translate-y-[40px]">
                <PhoneFrame variant="android" image={screenshotHome} alt="Memra Bible home screen" />
              </div>
              <div className="rotate-3 translate-y-[-20px] ml-[-40px]">
                <PhoneFrame variant="iphone" image={screenshotReader} alt="Memra Bible reader screen" />
              </div>
            </div>

            {/* Bottom fade gradient so the phones blend smoothly into the background */}
            <div className="absolute bottom-0 left-0 w-full h-[150px] bg-linear-to-t from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 lg:px-10 py-24 lg:py-32 text-black bg-[#F9FAFB] border-t border-t-solid border-t-[#E5E5E5]">

        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mx-auto max-w-3xl font-serif text-[clamp(32px,5vw,48px)] font-bold leading-[1.15]"
          >
            Everything You Need to Engage God's Word
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px mt-16 bg-[#E5E5E5] border border-solid border-[#E5E5E5]"
          >
            {features.map((f) => (
              <motion.div
                key={f.name}
                variants={childUp}
                className="bg-[#FFFFFF] p-[24px] sm:p-[32px] flex flex-col items-center text-center transition-all hover:translate-y-[-4px]"
              >
                <div className="flex items-center justify-center text-black bg-[#F3F4F6] rounded-full shrink-0 w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] [&>svg]:w-[20px] [&>svg]:h-[20px] sm:[&>svg]:w-[24px] sm:[&>svg]:h-[24px]">
                  {f.icon}
                </div>
                <h3 className="mt-4 sm:mt-6 text-[15px] sm:text-[16px] font-bold text-black text-center">
                  {f.name}
                </h3>
                <p className="mt-2 text-[13px] sm:text-[15px] leading-[1.6] text-[#555] text-center">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY MEMRA */}
      <section className="px-6 lg:px-10 py-24 lg:py-32 text-black bg-[#F3F4F6] border-t border-t-solid border-t-[#D1D5DB]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="flex justify-center order-2 lg:order-1"
          >
            <PhoneFrame variant="iphone" image={screenshotReader} alt="Memra Bible reader" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="order-1 lg:order-2"
          >
            <motion.div variants={childUp} className="label text-[#555]">
              Why Memra Bible
            </motion.div>
            <motion.h2
              variants={childUp}
              className="mt-6 font-serif text-[clamp(30px,4.4vw,42px)] font-bold leading-[1.15]"
            >
              Built for Serious Bible Readers
            </motion.h2>
            <motion.p
              variants={childUp}
              className="mt-6 text-[18px] leading-[1.7] text-[#555]"
            >
              Memra Bible combines simplicity, beauty, and powerful study tools into one seamless
              experience. Whether you're preparing a sermon, leading a Bible study, or spending
              quiet time in God's Word, Memra Bible helps you stay focused on Scripture — not the
              interface.
            </motion.p>
            <motion.ul variants={childUp} className="mt-8 flex flex-col gap-5">
              {[
                "Distraction-free reading environment",
                "Powerful search across all translations",
                "Offline-first — Scripture always available",
              ].map((b) => (
                <li
                  key={b}
                  className="text-[17px] text-black"
                >
                  {b}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* APP SCREENS SHOWCASE */}
      <section className="py-24 lg:py-32 text-black bg-[#FFFFFF] border-t border-t-solid border-t-[#D1D5DB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="font-serif text-[clamp(32px,5vw,48px)] font-bold"
          >
            See It In Action
          </motion.h2>
          
          <div className="flex gap-4">
            <button
              onClick={() => carouselRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
              className="flex items-center justify-center transition-opacity hover:opacity-70 text-black bg-[#F3F4F6] border border-solid border-[#D1D5DB] rounded-full w-[48px] h-[48px]"
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button
              onClick={() => carouselRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
              className="flex items-center justify-center transition-opacity hover:opacity-70 text-black bg-[#F3F4F6] border border-solid border-[#D1D5DB] rounded-full w-[48px] h-[48px]"
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          ref={carouselRef}
          className="mt-12 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          <div className="flex gap-6 px-6 lg:px-10 pb-8 w-max">
            {screens.map((s) => (
              <motion.div
                key={s.label}
                variants={childUp}
                className="snap-center bg-[#F9FAFB] border border-solid border-[#D1D5DB] p-[24px]"
              >
                <PhoneFrame variant="iphone" image={s.image} alt={`Memra Bible — ${s.label}`} width={230} height={480} />
                <div
                  className="label mt-5 text-center text-[13px] font-medium text-[#555] tracking-[0.08em] uppercase"
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="px-6 lg:px-10 py-24 border-t border-b border-zinc-800 bg-[#1A1A1A] border-t-solid border-t-[#2A2A2A]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="w-full flex flex-wrap justify-center items-center gap-12 lg:gap-24"
        >
          {stats.map((s) => (
            <motion.div key={s.l} variants={childUp} className="w-[150px] sm:w-[200px] flex flex-col items-center text-center">
              <div className="font-serif text-[clamp(28px,8vw,64px)] sm:text-[clamp(40px,6vw,64px)] font-bold leading-none text-[#FFF]">
                {s.n}
              </div>
              <div className="label mt-2 sm:mt-3 text-[#A1A1AA] text-[10px]! sm:text-[13px]!">
                {s.l}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 lg:px-10 py-24 lg:py-32 border-t border-t-solid border-t-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="text-center font-serif text-[clamp(32px,5vw,48px)] font-bold"
          >
            Trusted by Bible Readers Worldwide
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="mt-16 flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={childUp}
                className="w-[85vw] sm:w-[400px] shrink-0 snap-center bg-[#1A1A1A] border border-solid border-[#2A2A2A] p-[40px] flex flex-col justify-between"
              >
                <p className="text-[17px] leading-[1.8] text-[#EAEAEC] italic">
                  "{t.quote}"
                </p>
                <div className="mt-8">
                  <div className="text-[14px] font-bold text-[#FFF]">{t.name}</div>
                  <div className="text-[13px] text-[#A1A1AA] mt-[2px]">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Scroll Indicator for Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            className="mt-2 text-center text-[#888] text-[13px] flex sm:hidden items-center justify-center gap-2"
          >
            <span>←</span>
            <span>Swipe to read more</span>
            <span>→</span>
          </motion.div>
        </div>
      </section>

      {/* THE MIND BEHIND MEMRA */}
      <section className="px-6 lg:px-10 py-24 lg:py-32 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="w-full md:w-1/2 flex"
          >
            <div className="w-full h-full min-h-[400px] md:min-h-0 bg-[#111] relative border border-[#E5E5E5] overflow-hidden rounded-sm">
               <img 
                 src={creatorImg.src} 
                 alt="Nathan Yennupiak" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                 loading="lazy"
               />
               {/* Bottom fade gradient */}
               <div className="absolute bottom-0 left-0 w-full h-[150px] bg-linear-to-t from-[#0A0A0A] to-transparent z-20 pointer-events-none opacity-80" />
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
              The Vision
            </motion.div>
            <motion.h2
              variants={childUp}
              className="font-serif text-[clamp(32px,5vw,48px)] font-bold leading-[1.15] text-black"
            >
              The Mind Behind Memra
            </motion.h2>
            <motion.div variants={childUp} className="mt-8 flex flex-col gap-6 text-[16px] leading-[1.8] text-[#555]">
              <p>
                <strong>Nathan Yennupiak</strong> built Memra Bible out of a deep passion for God's Word and a frustration with cluttered, ad-filled Bible apps. The goal was simple: create an elegant, distraction-free environment that honors the sacred text.
              </p>
              <p>
                With a background as a Preacher, Software Engineer, and Author, Nathan sought to blend modern, beautiful design with robust offline study tools. As the Founder of the Memra Foundation, this project is a labor of love developed to serve the global church and equip believers to study the Scriptures deeply and without interruption.
              </p>
              <p>
                Having served in ministry and leadership for over a decade, Nathan is driven by a unique calling: <span className="italic font-serif text-black">"to inspire and transform lives through the Spirit-Word and technology."</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VERSE OF THE DAY */}
      <section className="px-6 lg:px-10 py-24 lg:py-32 text-black bg-[#F3F4F6]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={childUp}
            className="label text-[12px] text-[#555] tracking-[0.15em] uppercase"
          >
            Verse of the Day
          </motion.div>
          <motion.blockquote
            variants={childUp}
            className="mt-8 font-serif text-[clamp(28px,4.5vw,44px)] font-normal leading-[1.3] text-black italic"
          >
            "{verseToday.text}"
          </motion.blockquote>
          <motion.cite
            variants={childUp}
            className="mt-8 block text-[14px] text-[#555] tracking-widest not-italic"
          >
            {verseToday.ref}
          </motion.cite>
          <motion.div variants={childUp} className="mt-10">
            <a
              href="#download"
              className="inline-block text-[14px] text-black border border-solid border-black py-[12px] px-[28px] transition-all duration-300 hover:opacity-70 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a new verse every day →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 lg:px-10 py-24 lg:py-32 text-black bg-[#F9F9F9]">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="text-center font-serif text-[clamp(32px,5vw,48px)] font-bold"
          >
            Common Questions
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="mt-12 border-t border-t-solid border-t-[#D1D5DB]"
          >
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={f.q}
                  variants={childUp}
                  className="border-b border-b-solid border-b-[#D1D5DB]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between text-left py-6"
                  >
                    <span className="text-[18px] font-medium text-black">{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-black"
                    >
                      <IconChevron />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p
                          className="pb-6 pr-10 text-[16px] leading-[1.7] text-[#4B5563]"
                        >
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="download" className="px-6 lg:px-10 py-28 lg:py-36 bg-[#F3F4F6]">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={childUp}
            className="font-serif text-[clamp(40px,7vw,64px)] font-bold leading-[1.1] text-black"
          >
            Take God's Word Everywhere
          </motion.h2>
          <motion.p
            variants={childUp}
            className="mt-6 max-w-2xl mx-auto text-[18px] leading-[1.7] text-[#555]"
          >
            Download Memra Bible today and enjoy a beautiful Scripture reading experience designed
            for modern believers.
          </motion.p>
          <motion.div
            variants={childUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 justify-center transition-all duration-300 hover:opacity-80 hover:-translate-y-0.5 active:translate-y-0 text-[15px] font-medium text-[#FFF] bg-[#222] border-2 border-solid border-[#444] rounded-none py-0 px-[32px] h-[52px]"
            >
              <IconGooglePlay />
              Download on Google Play
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 justify-center transition-all duration-300 hover:opacity-80 hover:-translate-y-0.5 active:translate-y-0 text-[15px] font-medium text-black bg-transparent border-2 border-solid border-black rounded-none py-0 px-[32px] h-[52px]"
            >
              <IconApple />
              Download on App Store
            </a>
          </motion.div>


        </motion.div>
      </section>

    </div>
  );
}
