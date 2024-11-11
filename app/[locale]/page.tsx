import Intro from "@/components/Intro";
import Services from "@/components/services";
import CEOQuote from "@/components/CEOQuote";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <main>
      <Intro />
      <Services />
      <Brands />
      <CEOQuote />
    </main>
  );
}
