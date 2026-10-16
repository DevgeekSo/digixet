const fs = require('fs');

const pages = [
  'src/components/HeroSection.tsx',
  'src/components/IntroBanner.tsx',
  'src/components/MarketingAssetSection.tsx',
  'src/components/ServiceCardsSection.tsx',
  'src/components/ResultsShowSection.tsx',
  'src/components/CompareSection.tsx',
  'src/components/StepSection.tsx',
  'src/components/GrowthShowcase.tsx',
  'src/components/TestimonialPhoneSection.tsx',
  'src/components/PricingSection.tsx',
  'src/components/CtaBottomSection.tsx',
  'src/components/FooterSection.tsx',
];

pages.forEach(p => {
  if (fs.existsSync(p)) {
    const c = fs.readFileSync(p, 'utf8');
    const scrollItems = (c.match(/scroll-item="show"/g) || []).length;
    const dataScroll = (c.match(/data-scroll="load"/g) || []).length;
    const dataShow = (c.match(/data="show"/g) || []).length;
    console.log(`${p}: scroll-item=${scrollItems}, data-scroll=${dataScroll}, data-show=${dataShow}`);
  }
});
