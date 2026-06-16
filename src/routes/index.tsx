import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Hero, TrustStats, Services, FeaturedProperties, WhyChoose,
  AdvisoryBanner, Categories, Testimonials, ScheduleTour, Insights, FinalCTA,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahalo Properties Limited — Property for sale & management in Kenya" },
      { name: "description", content: "Property sales, land investments, property management and real estate advisory in Kenya. Trusted guidance for homeowners, landlords and investors." },
      { property: "og:title", content: "Mahalo Properties Limited — Real estate in Kenya" },
      { property: "og:description", content: "Property sales, land, management and advisory services across Kenya." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <Services />
        <FeaturedProperties />
        <WhyChoose />
        <AdvisoryBanner />
        <Categories />
        <Testimonials />
        <ScheduleTour />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
