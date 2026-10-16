const https = require('https');

https.get('https://cdn.prod.website-files.com/6a018c163190c0cf03857405/js/webflow.ae5bb349.bb882b5f4ad9a603.js', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Look for triggers
    const triggerIdx = data.indexOf('triggers:');
    if (triggerIdx !== -1) {
      console.log('--- TRIGGERS ---');
      console.log(data.substring(triggerIdx, triggerIdx + 2500));
    }
  });
});
