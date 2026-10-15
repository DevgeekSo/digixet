const fs = require('fs');
const html = fs.readFileSync('_webflow_backup/index.html', 'utf8');

// Find all sections
const sectionRegex = /<section[\s\S]*?<\/section>/g;
const sections = html.match(sectionRegex) || [];

console.log(`Found ${sections.length} sections:`);
sections.forEach((sec, idx) => {
  const classMatch = sec.match(/class="([^"]*)"/);
  const className = classMatch ? classMatch[1] : 'no-class';
  const headingMatch = sec.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/);
  const heading = headingMatch ? headingMatch[1].replace(/<[^>]+>/g, '').trim().slice(0, 50) : 'no-heading';
  console.log(`[${idx}] Class: "${className}" | Heading: "${heading}" | Length: ${sec.length} bytes`);
});
