const fs = require('fs');
const html = fs.readFileSync('_webflow_backup/index.html', 'utf8');

// Check data-w-id
const wid = html.match(/data-w-id="[^"]*"/g) || [];
console.log('data-w-id count:', wid.length);
if (wid.length > 0) console.log('Sample data-w-id:', wid.slice(0, 10));

// Check any inline scripts or GSAP calls
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
scripts.forEach((s, i) => {
  if (s.includes('gsap') || s.includes('ScrollTrigger') || s.includes('webflow') || s.includes('animation') || s.includes('scroll')) {
    console.log(`\nScript ${i}:`);
    console.log(s.substring(0, 300));
  }
});
