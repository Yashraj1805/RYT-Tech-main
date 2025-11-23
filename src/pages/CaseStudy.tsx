import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/case-study/HeroSection';
import SectionDivider from '@/components/case-study/SectionDivider';
import TwoColumnSection from '@/components/case-study/TwoColumnSection';
import TimelineSection from '@/components/case-study/TimelineSection';
import BeforeAfter from '@/components/case-study/BeforeAfter';
import NumberStats from '@/components/case-study/NumberStats';
import TechStackGrid from '@/components/case-study/TechStackGrid';
import CTASection from '@/components/case-study/CTASection';
import { caseStudyContent } from '@/case-studies/content';
import PageBackground from '@/components/PageBackground';
import SEO from '@/components/SEO';

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const content = slug ? caseStudyContent[slug] : undefined;

  const caseStudyDescription = content 
    ? `${content.heroTitle} - ${content.heroSubtitle}. Learn how RYT TechCorp delivered results.`
    : 'Case study not found';
  const optimizedDescription = caseStudyDescription.length > 155 
    ? caseStudyDescription.substring(0, 152) + '...' 
    : caseStudyDescription;

  return (
    <PageBackground>
      <SEO
        title={content ? `${content.heroTitle} | RYT TechCorp Case Study` : 'Case Study Not Found | RYT TechCorp'}
        description={optimizedDescription}
        keywords={content ? `${content.heroTitle}, case study, enterprise solutions, RYT TechCorp` : 'case study'}
        canonical={`https://ryttechcorp.online/case-studies/${slug || ''}`}
        breadcrumbs={content ? [
          { name: 'Home', url: 'https://ryttechcorp.online' },
          { name: 'Case Studies', url: 'https://ryttechcorp.online/#case-studies' },
          { name: content.heroTitle, url: `https://ryttechcorp.online/case-studies/${slug}` },
        ] : undefined}
        noindex={!content}
      />
      <Navigation />
      <main className="container mx-auto px-4 lg:px-8 py-24">
        <div className="mb-12 flex flex-col gap-4">
          <Button
            variant="ghost"
            className="w-fit px-0 text-sm text-muted-foreground hover:text-neon"
            onClick={() => navigate(-1)}
          >
            ← Back
          </Button>
        </div>

        {!content && (
          <div className="rounded-xl border border-border-neon/40 p-8 text-center">
            <p className="text-lg font-semibold text-foreground">Case study not found.</p>
            <p className="text-muted-foreground mt-2">
              Please return to the homepage or select another story.
            </p>
            <Button className="mt-6" onClick={() => navigate('/')}>
              Go Home
            </Button>
          </div>
        )}

        {content && (
          <div className="space-y-12">
            <HeroSection title={content.heroTitle} subtitle={content.heroSubtitle} />
            <SectionDivider />
            <TwoColumnSection heading="Overview" text={content.overview} />
            <TimelineSection phases={content.timeline} />
            <SectionDivider />
            <TwoColumnSection heading="Challenge" text={content.challenge} />
            <TwoColumnSection heading="Insights" text={content.insights} />
            <BeforeAfter beforeList={content.beforeList} afterList={content.afterList} />
            <SectionDivider />
            <TwoColumnSection heading="Solution" text={content.solution} />
            <NumberStats stats={content.stats} />
            <SectionDivider />
            <TwoColumnSection heading="Technologies Used" text={content.technologiesText} />
            <TechStackGrid items={content.techStack} />
            <CTASection
              title="Build Something Exceptional with RYT TechCorp"
              subtitle="Get a future-proof, enterprise-grade digital experience."
            />
          </div>
        )}
      </main>
      <Footer />
    </PageBackground>
  );
};

export default CaseStudy;

