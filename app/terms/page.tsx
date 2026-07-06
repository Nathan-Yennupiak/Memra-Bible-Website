"use client";
import Link from "next/link";





export default function TermsPage() {
  return (
    <div className="bg-white text-black min-h-screen">

      <article className="max-w-3xl mx-auto px-6 lg:px-10 pt-40 pb-20 lg:pt-48 lg:pb-24" style={{ lineHeight: 1.75, fontSize: 16, color: "#333" }}>
        <div style={{ color: "#999", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Last updated: June 22, 2026
        </div>
        <h1 className="mt-6 font-serif text-[clamp(36px,5vw,52px)] font-bold text-black">
          Terms of Service
        </h1>
        <p className="mt-6" style={{ color: "#555" }}>
          These terms govern your use of the Memra Bible app and website. By using our services, you
          agree to these terms.
        </p>

        <h2 className="mt-12 font-serif text-[24px] font-bold text-black">1. Use of the Service</h2>
        <p className="mt-3">
          Memra Bible is provided free of charge for personal, devotional, and study use. You agree
          not to misuse the service, attempt to disrupt it, or use it for any unlawful purpose.
        </p>

        <h2 className="mt-10 font-serif text-[24px] font-bold text-black">2. Content & Translations</h2>
        <p className="mt-3">
          Scripture texts are licensed from their respective copyright holders. You may read, copy,
          and share verses for personal and non-commercial use, subject to the terms of each
          translation's license.
        </p>

        <h2 className="mt-10 font-serif text-[24px] font-bold text-black">3. User Content</h2>
        <p className="mt-3">
          Notes, highlights, and bookmarks you create belong to you. If you opt into cloud sync, you
          grant us a limited license to store and transmit this content solely to provide the
          service.
        </p>

        <h2 className="mt-10 font-serif text-[24px] font-bold text-black">4. Donations</h2>
        <p className="mt-3">
          Donations to Memra Bible are voluntary and non-refundable except where required by law.
        </p>

        <h2 className="mt-10 font-serif text-[24px] font-bold text-black">5. Disclaimers of Warranties</h2>
        <p className="mt-3">
          The service is provided "as is" without warranties of any kind. We do not guarantee that
          the service will be uninterrupted or error-free.
        </p>

        <h2 className="mt-10 font-serif text-[24px] font-bold text-black">6. Limitation of Liability</h2>
        <p className="mt-3">
          To the maximum extent permitted by law, Memra Bible shall not be liable for any indirect,
          incidental, or consequential damages arising from your use of the service.
        </p>

        <h2 className="mt-10 font-serif text-[24px] font-bold text-black">7. Changes to Terms</h2>
        <p className="mt-3">
          We may update these terms from time to time. Continued use of the service after changes
          constitutes acceptance of the new terms.
        </p>

        <h2 className="mt-10 font-serif text-[24px] font-bold text-black">8. Contact</h2>
        <p className="mt-3">
          Questions? Email{" "}
          <a href="mailto:info@memrabible.com" style={{ color: "#000", textDecoration: "underline" }}>
            info@memrabible.com
          </a>.
        </p>

        <div className="mt-16" style={{ borderTop: "1px solid #E5E5E5", paddingTop: 24, fontSize: 14, color: "#777" }}>
          See also: <Link href="/privacy" style={{ color: "#000", textDecoration: "underline" }}>Privacy Policy</Link>
        </div>
      </article>
    </div>
  );
}
