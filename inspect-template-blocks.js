const fs = require('fs');

function inspectFile(file) {
  const html = fs.readFileSync('_webflow_backup/' + file, 'utf8');
  // strip scripts and head
  const bodyIdx = html.indexOf('<body');
  const footerIdx = html.indexOf('<footer');
  const mainContent = html.substring(bodyIdx, footerIdx);
  
  // Find all sections or major outer wrappers
  const matches = mainContent.match(/<(section|div)[^>]*class="(hero-[^"]*|section-spacing[^"]*)"[\s\S]*?<\/\1>/g) || [];
  console.log(`\n================== ${file} ==================`);
  console.log(`Found ${matches.length} major sections/blocks`);
  matches.forEach((m, i) => {
    const classMatch = m.match(/class="([^"]*)"/);
    console.log(`Block ${i}: class="${classMatch ? classMatch[1] : ''}" (length ${m.length})`);
  });
}

['about.html', 'case-studies.html', 'contact.html', 'faqs.html'].forEach(inspectFile);
