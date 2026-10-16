const fs = require('fs');

const html = fs.readFileSync('_webflow_backup/about.html', 'utf8');

// Find after </header> and before <footer
const headerEnd = html.indexOf('</header>');
const scriptEndAfterHeader = html.indexOf('</script>', headerEnd);
const startIdx = scriptEndAfterHeader !== -1 ? scriptEndAfterHeader + 9 : headerEnd + 9;
const footerStart = html.indexOf('<footer');

const mainBody = html.substring(startIdx, footerStart).trim();
console.log('about.html mainBody length:', mainBody.length);

const sections = mainBody.match(/<section[\s\S]*?<\/section>/g) || [];
console.log('Sections count:', sections.length);
sections.forEach((s, i) => {
  const cls = (s.match(/class="([^"]*)"/) || [])[1] || '';
  const h = (s.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/) || [])[1] || '';
  const heading = h.replace(/<[^>]+>/g, '').trim().slice(0, 50);
  console.log(`[${i}] ${cls} | "${heading}" (${s.length} bytes)`);
});
