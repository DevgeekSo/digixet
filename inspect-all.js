const fs = require('fs');

const files = ['about.html', 'case-studies.html', 'contact.html', 'faqs.html', 'blog.html'];

files.forEach(f => {
  const filePath = '_webflow_backup/' + f;
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf8');
    const sections = html.match(/<section[\s\S]*?<\/section>/g) || [];
    console.log(`\n=== ${f} (${sections.length} sections) ===`);
    sections.forEach((s, i) => {
      const cls = (s.match(/class="([^"]*)"/) || [])[1] || '';
      const h = (s.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/) || [])[1] || '';
      const heading = h.replace(/<[^>]+>/g, '').trim().slice(0, 50);
      console.log(`  [${i}] ${cls} | "${heading}" (${s.length} bytes)`);
    });
  }
});
