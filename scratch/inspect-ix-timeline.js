const https = require('https');

https.get('https://cdn.prod.website-files.com/6a018c163190c0cf03857405/js/webflow.ae5bb349.bb882b5f4ad9a603.js', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Look for timelines, animations, triggers
    const idx = data.indexOf('scroll-item');
    if (idx !== -1) {
      console.log('--- Context around scroll-item ---');
      console.log(data.substring(Math.max(0, idx - 400), Math.min(data.length, idx + 800)));
    }
  });
});
