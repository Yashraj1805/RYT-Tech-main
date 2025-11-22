import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import KPICounters from "@/components/KPICounters";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AmbientLight from "@/components/AmbientLight";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AmbientLight />
      <Navigation />
      <main>
        <Hero />
        <KPICounters />
        <Services />
        <WhyChooseUs />
        <CaseStudies />
        {/* <Testimonials /> */}
        <ClientLogos />
        <div id="blog">
          <Blog />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
