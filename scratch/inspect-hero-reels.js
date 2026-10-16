const https = require('https');

https.get('https://cdn.prod.website-files.com/6a018c163190c0cf03857405/js/webflow.ae5bb349.bb882b5f4ad9a603.js', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    ['hero-reels-item', 'service-card.bg-primary-6', 'step-blur'].forEach(term => {
      const idx = data.indexOf(term);
      if (idx !== -1) {
        console.log(`\n=== ${term} ===`);
        console.log(data.substring(Math.max(0, idx - 100), Math.min(data.length, idx + 400)));
      }
    });
  });
});
