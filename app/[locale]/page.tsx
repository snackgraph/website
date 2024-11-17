import type { Metadata } from "next";

// COMPONENTS
import Intro from "@/components/Intro";
import CEOQuote from "@/components/CEOQuote";
import GraphQLPower from "@/components/GraphQLPower";
import Footer from "@/components/Footer";

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
  return (
    <main>
      <Intro />
      <GraphQLPower />
      <CEOQuote />
      <Footer />
    </main>
  );
}
