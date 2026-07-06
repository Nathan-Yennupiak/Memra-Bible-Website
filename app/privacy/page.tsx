"use client";
import Link from "next/link";





export default function PrivacyPage() {
  return (
    <div className="bg-white text-black min-h-screen">

      <article className="max-w-3xl mx-auto px-6 lg:px-10 pt-40 pb-20 lg:pt-48 lg:pb-24" style={{ lineHeight: 1.75, fontSize: 16, color: "#333" }}>
        <div style={{ color: "#999", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Last updated: June 22, 2026
        </div>
        <h1 className="mt-6 font-serif text-[clamp(36px,5vw,52px)] font-bold text-black">
          Privacy Policy
        </h1>
        <p className="mt-6" style={{ color: "#555" }}>
          This page is maintained by the Memra Bible team to explain how we collect, use, and protect
          your information. It is not a substitute for legal advice.
        </p>

        <h2 className="mt-12 font-serif text-[24px] font-bold text-black">1. Information We Collect</h2>
        <p className="mt-3">
          Memra Bible is designed to work without an account. The app stores your reading position,
          bookmarks, highlights, and notes locally on your device. If you choose to enable optional
          cloud sync, this data is securely associated with your account.
        </p>

        <h2 className="mt-10 font-serif text-[24px] font-bold text-black">2. How We Use Information</h2>
        <p className="mt-3">
          We use anonymous, aggregated usage data to improve app stability and understand which
          features are most useful. We do not sell, rent, or share your personal information with
          third parties for marketing purposes.
        </p>

        <h2 className="mt-10 font-serif text-[24px] font-bold text-black">3. Permissions</h2>
        <p className="mt-3">
          The app requests only the permissions required for core functionality (such as storage for
          offline Bibles). You may revoke permissions at any time in your device settings.
        </p>

        <h2 className="mt-10 font-serif text-[24px] font-bold text-black">4. Children's Privacy</h2>
        <p className="mt-3">
          Memra Bible is appropriate for all ages and does not knowingly collect personal information
          from children under 13.
        </p>

        <h2 className="mt-10 font-serif text-[24px] font-bold text-black">5. Your Rights</h2>
        <p className="mt-3">
          You may request access to, correction of, or deletion of any data we hold about you by
          emailing <a href="mailto:info@memrabible.com" style={{ color: "#000", textDecoration: "underline" }}>info@memrabible.com</a>.
        </p>

        <h2 className="mt-10 font-serif text-[24px] font-bold text-black">6. Changes to This Policy</h2>
        <p className="mt-3">
          We may update this policy from time to time. Material changes will be communicated through
          the app or our website.
        </p>

        <h2 className="mt-10 font-serif text-[24px] font-bold text-black">7. Contact</h2>
        <p className="mt-3">
          Questions about this policy? Email us at{" "}
          <a href="mailto:info@memrabible.com" style={{ color: "#000", textDecoration: "underline" }}>
            info@memrabible.com
          </a>.
        </p>

        <div className="mt-16" style={{ borderTop: "1px solid #E5E5E5", paddingTop: 24, fontSize: 14, color: "#777" }}>
          See also: <Link href="/terms" style={{ color: "#000", textDecoration: "underline" }}>Terms of Service</Link>
        </div>
      </article>
    </div>
  );
}
