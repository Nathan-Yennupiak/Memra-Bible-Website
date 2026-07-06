"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const childUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function DonatePage() {
  return (
    <div className="bg-[#FFFFFF] text-black min-h-screen">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="px-6 lg:px-10 pt-32 pb-12 lg:pt-40 lg:pb-16 bg-[#FAFAFA] border-b border-[#E5E5E5]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={childUp}
            className="text-[12px] text-[#999] tracking-[0.15em] uppercase font-bold"
          >
            Support the Mission
          </motion.div>
          <motion.h1
            variants={childUp}
            className="mt-6 font-serif text-[clamp(40px,6.5vw,64px)] font-bold leading-[1.1] text-black"
          >
            Help Keep Scripture Free
          </motion.h1>
          <motion.p
            variants={childUp}
            className="mt-6 mx-auto text-[18px] text-[#555] leading-[1.7] max-w-[620px]"
          >
            Memra Bible is built and maintained by a small team committed to making the Word of God
            beautifully accessible to everyone completely free of charge. Your generosity covers servers,
            translations, and continued development.
          </motion.p>
        </motion.div>
      </section>

      {/* PRIMARY CTA */}
      <section className="px-6 lg:px-10 py-16 bg-[#FFF]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0A0A0A] text-white p-10 sm:p-14 border border-[#222] shadow-2xl flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-linear-to-tr from-[#333] to-[#111] blur-[80px] rounded-full opacity-40 pointer-events-none mr-[-100px] mt-[-100px]" />
            
            <h2 className="relative z-10 font-serif text-[32px] sm:text-[40px] font-bold">
              Give Online
            </h2>
            <p className="relative z-10 mt-4 text-[#A1A1AA] text-[16px] max-w-xl mx-auto leading-relaxed">
              The fastest and most secure way to support Memra Bible. We accept all major Credit/Debit Cards, MTN Mobile Money, Telecel Cash, and ATMoney.
            </p>
            <a
              href="https://paystack.com/pay/memrabible" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-10 inline-flex items-center justify-center transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 text-[16px] font-medium text-black bg-[#FFF] py-[16px] px-[48px] shadow-lg"
            >
              Donate Now →
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECONDARY & LOCAL OPTIONS */}
      <section className="px-6 lg:px-10 py-20 bg-[#F9FAFB] border-t border-[#E5E5E5]">
        <div className="max-w-2xl mx-auto">
          
          {/* Local / Manual Methods */}
          <div>
            <h3 className="font-serif text-[24px] font-bold text-black border-b border-[#E5E5E5] pb-4 mb-8 text-center">
              Manual Transfers (Ghana)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-[#E5E5E5]">
                <div className="text-[12px] text-[#999] uppercase tracking-wider font-bold">MTN Mobile Money</div>
                <div className="font-bold text-black mt-2">+233 53 355 591</div>
                <div className="text-[14px] text-[#555] mt-1">Account Name: Memra Bible</div>
              </div>
              <div className="p-6 bg-white border border-[#E5E5E5]">
                <div className="text-[12px] text-[#999] uppercase tracking-wider font-bold">Bank Transfer</div>
                <div className="text-[16px] font-medium text-black mt-2">Contact info@memrabible.com</div>
                <div className="text-[14px] text-[#555] mt-1">For direct account routing details</div>
              </div>
            </div>
          </div>

        </div>

        <p className="mt-20 max-w-2xl mx-auto text-center text-[15px] text-[#777] italic leading-relaxed">
          "Each of you should give what you have decided in your heart to give, not reluctantly or
          under compulsion, for God loves a cheerful giver." <br/> <span className="not-italic text-[#555] font-medium mt-2 block">2 Corinthians 9:7</span>
        </p>
      </section>


    </div>
  );
}
