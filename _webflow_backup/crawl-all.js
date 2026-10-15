const https = require('https');
const fs = require('fs');
const path = require('path');

const routes = [
  '/blog/5-ugc-mistakes-that-are-killing-conversion',
  '/blog/brand-consistency-drives-long-term-success',
  '/blog/how-brands-approach-influencers-today',
  '/blog/how-brands-are-winning-with-short-form-content',
  '/blog/stay-consistent-on-social-media-without-stress',
  '/blog/whats-working-in-creator-marketing-in-2026',
  '/blog/why-content-systems-are-replacing-campaigns',
  '/case-study/duskline-apparel',
  '/case-study/mintwave-drinks',
  '/case-study/noire-feeling',
  '/case-study/oralyn-skincare',
  '/privacy-policy',
  '/utility-pages/changelog',
  '/utility-pages/instructions',
  '/utility-pages/licenses',
  '/utility-pages/style-guide'
];

function download(route) {
  return new Promise((resolve) => {
    const url = 'https://reels-wbs.webflow.io' + route;
    let localPath = path.join(__dirname, route.replace(/^\//, '')) + '.html';
    
    // ensure dir exists
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        fs.writeFileSync(localPath, data, 'utf8');
        console.log(`Saved ${route} -> ${localPath} (${data.length} bytes, status ${res.statusCode})`);
        resolve();
      });
    }).on('error', (e) => {
      console.error(`Error on ${route}:`, e.message);
      resolve();
    });
  });
}

(async () => {
  for (const r of routes) {
    await download(r);
  }
  console.log('All routes downloaded successfully!');
})();
