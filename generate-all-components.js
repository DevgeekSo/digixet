const fs = require('fs');
const path = require('path');
const { htmlToJsx } = require('./html-to-jsx');

const html = fs.readFileSync('_webflow_backup/index.html', 'utf8');

// Find all sections
const sectionRegex = /<section[\s\S]*?<\/section>/g;
const sections = html.match(sectionRegex) || [];

console.log(`Extracting ${sections.length} sections...`);

const compConfigs = [
  { file: 'HeroSection.tsx', name: 'HeroSection', idx: 0 },
  { file: 'IntroBanner.tsx', name: 'IntroBanner', idx: 1 },
  { file: 'MarketingAssetSection.tsx', name: 'MarketingAssetSection', idx: 2 },
  { file: 'ServiceCardsSection.tsx', name: 'ServiceCardsSection', idx: 3 },
  { file: 'ResultsShowSection.tsx', name: 'ResultsShowSection', idx: 4 },
  { file: 'CompareSection.tsx', name: 'CompareSection', idx: 5 },
  { file: 'StepSection.tsx', name: 'StepSection', idx: 6 },
  { file: 'GrowthShowcase.tsx', name: 'GrowthShowcase', idx: 7 },
  { file: 'TestimonialPhoneSection.tsx', name: 'TestimonialPhoneSection', idx: 8 },
  { file: 'PricingSection.tsx', name: 'PricingSection', idx: 9 },
  { file: 'CtaBottomSection.tsx', name: 'CtaBottomSection', idx: 10 },
];

compConfigs.forEach(({ file, name, idx }) => {
  if (idx < sections.length) {
    const rawSection = sections[idx];
    const jsxContent = htmlToJsx(rawSection);
    const componentCode = `'use client';

import React from 'react';

export default function ${name}() {
  return (
    ${jsxContent}
  );
}
`;
    const targetPath = path.join(__dirname, 'src', 'components', file);
    fs.writeFileSync(targetPath, componentCode, 'utf8');
    console.log(`Generated component: ${file} (${jsxContent.length} bytes)`);
  }
});

// Also extract Footer
const footerRegex = /<footer[\s\S]*?<\/footer>/;
const footerMatch = html.match(footerRegex);
if (footerMatch) {
  const jsxFooter = htmlToJsx(footerMatch[0]);
  const footerCode = `'use client';

import React from 'react';

export default function FooterSection() {
  return (
    ${jsxFooter}
  );
}
`;
  fs.writeFileSync(path.join(__dirname, 'src', 'components', 'FooterSection.tsx'), footerCode, 'utf8');
  console.log('Generated component: FooterSection.tsx');
}
