import type { Metadata } from "next";

// COMPONENTS
import Intro from "@/components/Intro";
import CEOQuote from "@/components/CEOQuote";
import GraphQLPower from "@/components/GraphQLPower";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";

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
  const parseLdJson = () => {
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
    return data;
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(parseLdJson()) }}
      />
      <Intro />
      <GraphQLPower />
      <CEOQuote />
      <Faq faqProps={faq} />
      <Footer />
    </main>
  );
}

const faq = [
  {
    id: 1,
    title: "What are the benefits of using your API dashboard?",
    description: `
      <p>
       Our dashboard offers a suite of features to optimize your key management. Categorize keys by project, such as <strong>'production'</strong> or <strong>'development'</strong>, to enhance organization. Collaborate seamlessly with team members by assigning roles and permissions. Gain valuable insights into key usage with our comprehensive metrics.
      </p>
    `,
  },
  {
    id: 2,
    title: "What kind of support do you offer?",
    description: `<p>Free plan users can contact our support team via email. Pro plan users have the advantage of contacting our support team directly within the dashboard, ensuring a higher priority response.</p>`,
  },
  {
    id: 3,
    title: "How do I upgrade my plan?",
    description: `<p>Ready to upgrade? It's easy! Head over to the "Upgrade plan" section, pick the price that fits you best, and pay securely with PayPal.</p>`,
  },
  {
    id: 4,
    title: "What happens if I exceed my plan's limits?",
    description: `<p>You may encounter errors when querying the API. We'll notify you by email at 70% and 100% usage to help you plan accordingly.</p>
    `,
  },
  {
    id: 5,
    title: "What authentication methods do you support?",
    description: `<p>To authenticate with the API, generate an API Key from the dashboard and use it to access the API.</p>
    `,
  },
];
