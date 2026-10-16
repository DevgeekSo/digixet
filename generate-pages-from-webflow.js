const fs = require('fs');
const path = require('path');
const { htmlToJsx } = require('./html-to-jsx');

// Helper to extract content between navbar and footer
function extractPageBody(fileName) {
  const html = fs.readFileSync(path.join('_webflow_backup', fileName), 'utf8');
  const headerEnd = html.indexOf('</header>');
  const scriptEnd = html.indexOf('</script>', headerEnd);
  const startIdx = scriptEnd !== -1 ? scriptEnd + 9 : headerEnd + 9;
  const footerStart = html.indexOf('<footer');
  return html.substring(startIdx, footerStart).trim();
}

// Convert about.html
const aboutRaw = extractPageBody('about.html');
const aboutJsx = htmlToJsx(aboutRaw);

const aboutPageCode = `'use client';

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
`;

fs.writeFileSync(path.join('src', 'app', 'about', 'page.tsx'), aboutPageCode, 'utf8');
console.log('Generated src/app/about/page.tsx, length:', aboutPageCode.length);
