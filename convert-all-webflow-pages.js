const fs = require('fs');
const path = require('path');
const { htmlToJsx } = require('./html-to-jsx');

function extractBody(file) {
  const html = fs.readFileSync(file, 'utf8');
  const headerEnd = html.indexOf('</header>');
  const scriptEnd = html.indexOf('</script>', headerEnd);
  const startIdx = scriptEnd !== -1 ? scriptEnd + 9 : (headerEnd !== -1 ? headerEnd + 9 : html.indexOf('<body') + 6);
  const footerStart = html.indexOf('<footer');
  return html.substring(startIdx, footerStart !== -1 ? footerStart : html.length).trim();
}

// 1. About
const aboutRaw = extractBody('_webflow_backup/about.html');
const aboutJsx = htmlToJsx(aboutRaw);
fs.writeFileSync(
  path.join('src', 'app', 'about', 'page.tsx'),
  `'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export default function AboutPage() {
  return (
    <main className="main">
      <Navbar />
      ${aboutJsx}
      <FooterSection />
    </main>
  );
}
`,
  'utf8'
);
console.log('Generated AboutPage');

// 2. Case Studies
const caseStudiesRaw = extractBody('_webflow_backup/case-studies.html');
const caseStudiesJsx = htmlToJsx(caseStudiesRaw);
fs.writeFileSync(
  path.join('src', 'app', 'case-studies', 'page.tsx'),
  `'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export default function CaseStudiesPage() {
  return (
    <main className="main">
      <Navbar />
      ${caseStudiesJsx}
      <FooterSection />
    </main>
  );
}
`,
  'utf8'
);
console.log('Generated CaseStudiesPage');

// 3. Contact
const contactRaw = extractBody('_webflow_backup/contact.html');
const contactJsx = htmlToJsx(contactRaw);
fs.writeFileSync(
  path.join('src', 'app', 'contact', 'page.tsx'),
  `'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="main">
      <Navbar />
      ${contactJsx}
      <FooterSection />
    </main>
  );
}
`,
  'utf8'
);
console.log('Generated ContactPage');

// 4. FAQs
const faqsRaw = extractBody('_webflow_backup/faqs.html');
const faqsJsx = htmlToJsx(faqsRaw);
fs.writeFileSync(
  path.join('src', 'app', 'faqs', 'page.tsx'),
  `'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export default function FaqsPage() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <main className="main">
      <Navbar />
      ${faqsJsx}
      <FooterSection />
    </main>
  );
}
`,
  'utf8'
);
console.log('Generated FaqsPage');

// 5. Blog
if (!fs.existsSync(path.join('src', 'app', 'blog'))) {
  fs.mkdirSync(path.join('src', 'app', 'blog'), { recursive: true });
}
const blogRaw = extractBody('_webflow_backup/blog.html');
const blogJsx = htmlToJsx(blogRaw);
fs.writeFileSync(
  path.join('src', 'app', 'blog', 'page.tsx'),
  `'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export default function BlogPage() {
  return (
    <main className="main">
      <Navbar />
      ${blogJsx}
      <FooterSection />
    </main>
  );
}
`,
  'utf8'
);
console.log('Generated BlogPage');

// 6. Services Page using genuine Webflow Reel components
fs.writeFileSync(
  path.join('src', 'app', 'services', 'page.tsx'),
  `'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import IntroBanner from '@/components/IntroBanner';
import ServiceCardsSection from '@/components/ServiceCardsSection';
import MarketingAssetSection from '@/components/MarketingAssetSection';
import CompareSection from '@/components/CompareSection';
import StepSection from '@/components/StepSection';
import ResultsShowSection from '@/components/ResultsShowSection';
import CtaBottomSection from '@/components/CtaBottomSection';
import FooterSection from '@/components/FooterSection';

export default function ServicesPage() {
  return (
    <main className="main">
      <Navbar />
      <section className="hero-simple-section">
        <div className="container-medium">
          <div className="hero-simple-content">
            <h1 data="show" className="hero-simple-title">Our Services</h1>
            <p data="show" className="hero-simplen-description">
              From full-funnel creator UGC production to micro-seeding and paid social scale, discover how we grow leading DTC brands.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Banner */}
      <IntroBanner />

      {/* How We Grow You (4 Bento Cards) */}
      <ServiceCardsSection />

      {/* Marketing Asset Section */}
      <MarketingAssetSection />

      {/* Compare Section */}
      <CompareSection />

      {/* Step Section */}
      <StepSection />

      {/* Results Show Section */}
      <ResultsShowSection />

      {/* Bottom CTA */}
      <CtaBottomSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
`,
  'utf8'
);
console.log('Generated ServicesPage');

// 7. Pricing Page using genuine Webflow Reel components
fs.writeFileSync(
  path.join('src', 'app', 'pricing', 'page.tsx'),
  `'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSection';
import CompareSection from '@/components/CompareSection';
import CtaBottomSection from '@/components/CtaBottomSection';
import FooterSection from '@/components/FooterSection';

export default function PricingPage() {
  return (
    <main className="main">
      <Navbar />
      <section className="hero-simple-section">
        <div className="container-medium">
          <div className="hero-simple-content">
            <h1 data="show" className="hero-simple-title">Pricing plan</h1>
            <p data="show" className="hero-simplen-description">
              Honest pricing. No hidden fees. Choose the creative engine that matches your ad spend and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Real Webflow Pricing Section */}
      <PricingSection />

      {/* Compare Section */}
      <CompareSection />

      {/* Bottom CTA */}
      <CtaBottomSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
`,
  'utf8'
);
console.log('Generated PricingPage');

// 8. Individual Case Studies
const caseStudySlugs = ['oralyn-skincare', 'duskline-apparel', 'mintwave-drinks', 'noire-feeling'];
const caseStudyDir = path.join('src', 'app', 'case-study', '[slug]');
if (!fs.existsSync(caseStudyDir)) {
  fs.mkdirSync(caseStudyDir, { recursive: true });
}

const caseStudyMap = {};
caseStudySlugs.forEach(slug => {
  const filePath = path.join('_webflow_backup', 'case-study', slug + '.html');
  if (fs.existsSync(filePath)) {
    caseStudyMap[slug] = htmlToJsx(extractBody(filePath));
  }
});

fs.writeFileSync(
  path.join(caseStudyDir, 'page.tsx'),
  `'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const caseStudiesData: Record<string, string> = ${JSON.stringify(caseStudyMap)};

export default function SingleCaseStudyPage() {
  const params = useParams();
  const slug = (params?.slug as string) || 'oralyn-skincare';
  const content = caseStudiesData[slug] || caseStudiesData['oralyn-skincare'];

  return (
    <main className="main">
      <Navbar />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <FooterSection />
    </main>
  );
}
`,
  'utf8'
);
console.log('Generated SingleCaseStudyPage');
