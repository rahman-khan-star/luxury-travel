import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Wadi Al Dhaid Tours LLC",
};

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-premium mx-auto max-w-3xl">
        <h1
          className="text-3xl sm:text-4xl font-bold text-text dark:text-white mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Privacy Policy
        </h1>
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-text-light dark:text-white/60">
          <p>Last updated: January 2026</p>
          <p>
            Wadi Al Dhaid Tours LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
            operates the website. This page informs you of our policies
            regarding the collection, use, and disclosure of personal
            information.
          </p>
          <h2 className="text-xl font-bold text-text dark:text-white">
            Information Collection
          </h2>
          <p>
            We collect information you provide directly to us, including name,
            email, phone number, travel preferences, and payment information.
            We also automatically collect certain information about your device
            and usage of our website.
          </p>
          <h2 className="text-xl font-bold text-text dark:text-white">
            Use of Information
          </h2>
          <p>
            We use your information to process bookings, communicate with you
            about your travel arrangements, send promotional materials (with
            your consent), and improve our services.
          </p>
          <h2 className="text-xl font-bold text-text dark:text-white">
            Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction.
          </p>
          <h2 className="text-xl font-bold text-text dark:text-white">
            Third-Party Sharing
          </h2>
          <p>
            We may share your information with airlines, hotels, and other
            travel service providers to fulfill your bookings. We do not sell
            your personal information to third parties.
          </p>
          <h2 className="text-xl font-bold text-text dark:text-white">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please
            contact us at info@luxurytravel.com or +92 342 900 5290.
          </p>
        </div>
      </div>
    </div>
  );
}
