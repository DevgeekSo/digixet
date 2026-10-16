const https = require('https');

https.get('https://cdn.prod.website-files.com/6a018c163190c0cf03857405/js/webflow.ae5bb349.bb882b5f4ad9a603.js', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Look for all actions and properties
    const matches = data.match(/actions:\[[\s\S]*?\]/g) || [];
    console.log(`Found ${matches.length} actions blocks:`);
    matches.forEach((m, i) => {
      console.log(`\n--- Action ${i} ---`);
      console.log(m.substring(0, 500));
    });
  });
});
