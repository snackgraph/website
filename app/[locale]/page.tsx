import type { Metadata } from "next";
import { faq } from "@/components/Faq/faq";

// COMPONENTS
import Intro from "@/components/Home/Intro";
import CEOQuote from "@/components/Home/CEOQuote";
import GraphQLPower from "@/components/Home/GraphQLPower";
import Faq from "@/components/Faq";
import TryForFree from "@/components/Home/TryForFree";

const title = "SnackGraph - Supercharge Your Projects with Our APIs";
const description =
  "We offer a set of APIs designed for developers and data enthusiasts who want to access to information easily.";

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
      <Intro />
      <GraphQLPower />
      <CEOQuote />
      <Faq />
      <TryForFree />
    </main>
  );
}
