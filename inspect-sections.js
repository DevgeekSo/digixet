const fs = require('fs');
const html = fs.readFileSync('_webflow_backup/index.html', 'utf8');

const regex = /<section[^>]*class="([^"]*)"[^>]*>/g;
let match;
console.log('Sections in original:');
while ((match = regex.exec(html)) !== null) {
  console.log('Section class:', match[1]);
}
