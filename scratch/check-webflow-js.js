const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const urls = [
    'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/js/webflow.ae5bb349.bb882b5f4ad9a603.js',
    'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/js/webflow.schunk.36b8fb49256177c8.js',
    'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/js/webflow.schunk.6158aac7fcc2b628.js',
    'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/js/webflow.schunk.4fc31f81b33965ef.js',
    'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/js/webflow.schunk.121b0d7ff03e0f4a.js'
  ];

  for (const url of urls) {
    try {
      const content = await fetch(url);
      console.log(`\nURL: ${url} (length: ${content.length})`);
      const terms = ['scroll-item', 'data-scroll', 'show', 'gsap', 'ScrollTrigger', 'ix2', 'ix3'];
      terms.forEach(term => {
        const count = (content.match(new RegExp(term, 'gi')) || []).length;
        console.log(`  ${term}: ${count}`);
      });
      // Find where scroll-item or data-scroll occurs
      const m = content.match(/.{0,50}(scroll-item|data-scroll).{0,100}/gi) || [];
      if (m.length > 0) {
        console.log('  Matches:');
        m.slice(0, 5).forEach(match => console.log('   ', match));
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

run();
