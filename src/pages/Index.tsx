import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import AmbientLight from "@/components/AmbientLight";
import SEO from "@/components/SEO";

// Code splitting: Lazy load below-the-fold components
const KPICounters = lazy(() => import("@/components/KPICounters"));
const CaseStudies = lazy(() => import("@/components/CaseStudies"));
const ClientLogos = lazy(() => import("@/components/ClientLogos"));
const Blog = lazy(() => import("@/components/Blog"));
const Contact = lazy(() => import("@/components/Contact"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-12" aria-label="Loading content">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="RYT TechCorp — AI, Cybersecurity & Enterprise Software Solutions"
        description="Enterprise AI systems, cybersecurity solutions, cloud infrastructure, DevOps workflows, and full-stack software for modern businesses."
        canonical="https://ryttechcorp.online"
      />
      <AmbientLight />
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <KPICounters />
        </Suspense>
        <Services />
        <WhyChooseUs />
        <Suspense fallback={<LoadingFallback />}>
          <CaseStudies />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ClientLogos />
        </Suspense>
        <div id="blog">
          <Suspense fallback={<LoadingFallback />}>
            <Blog />
          </Suspense>
        </div>
        <div id="contact">
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
