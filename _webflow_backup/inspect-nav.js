const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const startIdx = content.indexOf('role="banner" class="navbar');
const prevDiv = content.lastIndexOf('<div', startIdx);
const nextSection = content.indexOf('<section class="hero-section"', startIdx);

console.log('Navbar starts at:', prevDiv, 'ends before hero at:', nextSection);
const navHtml = content.slice(prevDiv, nextSection);
console.log(navHtml);
