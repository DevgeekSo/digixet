const fs = require('fs');

const files = ['about.html', 'case-studies.html', 'contact.html', 'faqs.html', 'blog.html'];

files.forEach(f => {
  const filePath = '_webflow_backup/' + f;
  if (!fs.existsSync(filePath)) return;
  const html = fs.readFileSync(filePath, 'utf8');
  
  // Find where body starts and footer starts
  const bodyStart = html.indexOf('<body');
  const footerStart = html.indexOf('<footer');
  
  if (bodyStart !== -1 && footerStart !== -1) {
    const bodyContent = html.substring(bodyStart, footerStart);
    // Find top-level tags like <header>, <section>, <div class="...">
    const topLevelMatches = bodyContent.match(/<(header|section|div)\s+class="([^"]*)"/g) || [];
    console.log(`\n=== ${f} ===`);
    console.log(`Body to footer length: ${bodyContent.length}`);
    topLevelMatches.slice(0, 15).forEach(m => console.log('  ' + m));
  }
});
