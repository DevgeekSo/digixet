const fs = require('fs');
const files = ['index.html', 'about.html', 'case-studies.html', 'blog.html', 'faqs.html', 'contact.html'];
const hrefs = new Set();
files.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const matches = content.matchAll(/href=["']([^"']+)["']/g);
    for (const m of matches) {
      if (m[1].startsWith('/') && !m[1].startsWith('//')) {
        hrefs.add(m[1]);
      }
    }
  }
});
console.log('Internal links:', Array.from(hrefs).sort());
