const fs = require('fs');

['case-studies.html', 'contact.html', 'faqs.html'].forEach(f => {
  const html = fs.readFileSync('_webflow_backup/' + f, 'utf8');
  const headerEnd = html.indexOf('</header>');
  const scriptEnd = html.indexOf('</script>', headerEnd);
  const startIdx = scriptEnd !== -1 ? scriptEnd + 9 : headerEnd + 9;
  const footerStart = html.indexOf('<footer');
  const mainBody = html.substring(startIdx, footerStart).trim();

  console.log(`\n================== ${f} (length: ${mainBody.length}) ==================`);
  console.log(mainBody.slice(0, 500));
});
