import type { Metadata } from "next";
import { faq } from "@/components/Faq/faq";

// COMPONENTS
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";

const title = "SnackGraph - Pricing";
const description = "Prices designed for you";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "SnackGraph",
    url: "https://www.snackgraph.dev/",
  },
  keywords: [
    "API",
    "developers",
    "GraphQL",
    "Countries API",
    "Developer Tools",
  ],
};

export default function Home() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ title, description }) => {
      return {
        "@type": "Question",
        name: title,
        acceptedAnswer: {
          "@type": "Answer",
          text: description,
        },
      };
    }),
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <Pricing />
      <Faq />
    </main>
  );
}
