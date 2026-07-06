import Link from "next/link";
import { IconFacebook, IconX, IconInstagram, IconYouTube } from "./Icons";

export default function Footer() {
  const display = { fontFamily: "'Playfair Display', serif" };

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "Foundation", href: "/foundation" },
    { label: "Download", href: "/#download" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="text-white bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-2 lg:col-span-1">
          <div className="font-serif text-[22px] font-bold text-white">
            Memra Bible
          </div>
          <p className="mt-4 text-[14px] leading-[1.7] text-[#999]">
            Discover Scripture. Experience the Word. Memra Bible provides an immersive, distraction-free environment designed to help you deepen your faith and study without interruption.
          </p>
        </div>

        <div>
          <div className="label text-[13px] font-medium text-white tracking-[0.08em] uppercase">Quick Links</div>
          <ul className="mt-5 flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="hover:text-white transition-colors text-[14px] text-[#999]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/donate" className="hover:text-white transition-colors text-[14px] text-[#999]">
                Donate
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="label text-[13px] font-medium text-white tracking-[0.08em] uppercase">Social</div>
          <div className="mt-5 flex gap-5 text-[#999]">
            {[IconFacebook, IconX, IconInstagram, IconYouTube].map((I, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-white transition-colors text-inherit"
                aria-label="social"
              >
                <I />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="label text-[13px] font-medium text-white tracking-[0.08em] uppercase">Legal</div>
          <ul className="mt-5 flex flex-col gap-3">
            <li>
              <Link href="/privacy" className="hover:text-white transition-colors text-[14px] text-[#999]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition-colors text-[14px] text-[#999]">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:text-white transition-colors text-[14px] text-[#999]">
                Support Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-solid border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-[13px] text-[#999] text-center">
          © 2026 Memra Bible. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
