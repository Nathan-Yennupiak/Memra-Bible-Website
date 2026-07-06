"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const childUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ContactPage() {
  return (
    <div className="bg-white text-black pt-32 pb-16 lg:pt-40 lg:pb-24">      
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* HEADER */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div variants={childUp} className="text-[13px] font-medium tracking-widest uppercase text-[#999]">
            Get in Touch
          </motion.div>
          <motion.h1
            variants={childUp}
            className="mt-6 font-serif text-[clamp(40px,6vw,56px)] font-bold leading-[1.15]"
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={childUp}
            className="mt-6 text-[18px] leading-[1.7] text-[#555]"
          >
            Have questions, feedback, or need support? We would love to hear from you.
          </motion.p>
        </motion.div>

        {/* LAYOUT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-20 max-w-4xl mx-auto"
        >
          
          {/* CONTACT DETAILS */}
          <motion.div variants={childUp} className="flex flex-col gap-12">
            <div>
              <h3 className="text-[14px] font-bold tracking-widest uppercase text-[#999] mb-12 border-b border-[#E5E5E5] pb-4 text-center">
                Direct Contact
              </h3>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 max-w-2xl mx-auto">
                
                {/* Email Info */}
                <a href="mailto:info@memrabible.com" className="group flex flex-col items-center text-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-[#E5E5E5] rounded-full group-hover:border-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[14px] md:text-[16px] font-bold text-black mt-2">Inquiries/App Support</div>
                    <div className="text-[13px] md:text-[15px] text-[#555] mt-1 group-hover:text-black transition-colors">info@memrabible.com</div>
                  </div>
                </a>



                {/* Phone Info */}
                <a href="tel:+23353355591" className="group flex flex-col items-center text-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-[#E5E5E5] rounded-full group-hover:border-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[14px] md:text-[16px] font-bold text-black mt-2">Call Us</div>
                    <div className="text-[13px] md:text-[15px] text-[#555] mt-1 group-hover:text-black transition-colors">+233 53 355 591</div>
                  </div>
                </a>

              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
