"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu, IconClose } from "./Icons";

/**
 * Header Component
 * Provides responsive top navigation for the site.
 * Includes a sticky scroll effect (white background on scroll) and a mobile hamburger menu.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Track hash changes from clicks
    setCurrentHash(window.location.hash);
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    let observer: IntersectionObserver;

    // Scroll Spy Observer only on the home page
    if (pathname === "/") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target.id === "home") {
                setCurrentHash("");
              } else {
                setCurrentHash("#" + entry.target.id);
              }
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" } // trigger when section is nicely in view
      );

      ["home", "features", "faq", "download"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  const isActive = (href: string) => {
    // Special case: if on home with no hash, match "/"
    if (pathname === "/" && currentHash === "" && href === "/") return true;
    // Otherwise require exact match of pathname + hash
    return pathname + currentHash === href;
  };

  const display = { fontFamily: "'Playfair Display', serif" };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "FAQ", href: "/#faq" },
    { label: "Download", href: "/#download" },
    { label: "Foundation", href: "/foundation" },
    { label: "Donate", href: "/donate" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
        "fixed top-0 w-full z-50 flex flex-col justify-center transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm",
        scrolled ? "border-b border-[#E5E5E5]" : "border-b border-transparent"
      )}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-[20px] font-bold text-black">
            Memra Bible
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={cn(
                  "transition-colors text-[14px]",
                  isActive(l.href) ? "text-black font-semibold border-b-2 border-black pb-1" : "text-[#555] hover:text-black"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link
              href="/#download"
              className="inline-flex items-center transition-all duration-300 hover:opacity-80 hover:-translate-y-0.5 active:translate-y-0 text-[14px] text-white bg-black border-2 border-solid border-black rounded-none py-[10px] px-[24px]"
            >
              Download Now
            </Link>
          </div>
          <button
            className="md:hidden text-black"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white border-t border-solid border-[#E5E5E5] w-full"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-[15px]",
                      isActive(l.href) ? "text-black font-bold" : "text-[#555]"
                    )}
                  >
                    {l.label}
                  </Link>
                ))}

                <Link
                  href="/#download"
                  onClick={() => setMobileOpen(false)}
                  className="transition-all duration-300 hover:opacity-80 hover:-translate-y-0.5 active:translate-y-0 block text-[14px] text-white bg-black border-2 border-solid border-black py-[12px] px-[24px]"
                >
                  Download Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
