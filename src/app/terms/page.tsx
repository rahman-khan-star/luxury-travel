import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Wadi Al Dhaid Tours LLC",
};

export default function TermsPage() {
  return (
    <div className="section-padding">
      <div className="container-premium mx-auto max-w-3xl">
        <h1
          className="text-3xl sm:text-4xl font-bold text-text dark:text-white mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Terms & Conditions
        </h1>
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-text-light dark:text-white/60">
          <p>Last updated: January 2026</p>
          <h2 className="text-xl font-bold text-text dark:text-white">
            Booking Terms
          </h2>
          <p>
            A deposit of 30% is required to confirm your booking. The
            remaining balance is due 14 days before departure. Bookings made
            within 14 days of departure require full payment.
          </p>
          <h2 className="text-xl font-bold text-text dark:text-white">
            Cancellation Policy
          </h2>
          <p>
            Full refund for cancellations made 14+ days before departure. 50%
            refund for cancellations within 7-14 days. Within 7 days, we offer
            free rescheduling. No-shows are non-refundable.
          </p>
          <h2 className="text-xl font-bold text-text dark:text-white">
            Travel Insurance
          </h2>
          <p>
            Comprehensive travel insurance is included in premium packages.
            For other packages, we strongly recommend purchasing travel
            insurance to protect against unexpected events.
          </p>
          <h2 className="text-xl font-bold text-text dark:text-white">
            Liability
          </h2>
          <p>
            Wadi Al Dhaid Tours LLC acts as an intermediary between travelers and travel
            service providers. We are not liable for the acts, errors, or
            omissions of third-party suppliers.
          </p>
          <h2 className="text-xl font-bold text-text dark:text-white">
            Changes to Itineraries
          </h2>
          <p>
            We reserve the right to modify itineraries due to weather, safety
            concerns, or other unforeseen circumstances. Alternative
            arrangements of equal or greater value will be provided.
          </p>
        </div>
      </div>
    </div>
  );
}
