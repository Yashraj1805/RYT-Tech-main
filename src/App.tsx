import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import CaseStudy from "./pages/CaseStudy";
import Documentation from "./pages/Documentation";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import Cybersecurity from "./pages/solutions/Cybersecurity";
import AISolutions from "./pages/solutions/AISolutions";
import EnterpriseSoftware from "./pages/solutions/EnterpriseSoftware";
import CloudServices from "./pages/solutions/CloudServices";
import FullStackDevelopment from "./pages/solutions/FullStackDevelopment";
import DevOps from "./pages/solutions/DevOps";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/case-studies/:slug" element={<CaseStudy />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/security" element={<Security />} />
          <Route path="/solutions/cybersecurity" element={<Cybersecurity />} />
          <Route path="/solutions/ai-solutions" element={<AISolutions />} />
          <Route path="/solutions/enterprise-software" element={<EnterpriseSoftware />} />
          <Route path="/solutions/cloud-services" element={<CloudServices />} />
          <Route path="/solutions/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/solutions/devops" element={<DevOps />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
