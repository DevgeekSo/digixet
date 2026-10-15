const fs = require('fs');

function htmlToJsx(html) {
  let jsx = html;

  // Remove <noscript> tags
  jsx = jsx.replace(/<noscript>[\s\S]*?<\/noscript>/gi, '');

  // Replace class= with className=
  jsx = jsx.replace(/\bclass="/g, 'className="');
  
  // Replace for= with htmlFor=
  jsx = jsx.replace(/\bfor="/g, 'htmlFor="');
  
  // Replace tabindex= with tabIndex=
  jsx = jsx.replace(/\btabindex="/g, 'tabIndex="');

  // Replace maxlength= with maxLength=
  jsx = jsx.replace(/\bmaxlength="/g, 'maxLength="');

  // Replace crossorigin= with crossOrigin=
  jsx = jsx.replace(/\bcrossorigin=/gi, 'crossOrigin=');

  // Replace boolean video attributes
  jsx = jsx.replace(/\bplaysinline(?=[>\s="])/gi, 'playsInline');
  jsx = jsx.replace(/\bautoplay(?=[>\s="])/gi, 'autoPlay');
  
  // Clean up style="..."
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleContent) => {
    // If it's just background-image on video, skip it
    if (styleContent.includes('background-image:url(&quot;')) {
      return '';
    }
    const rules = styleContent.split(';').map(r => r.trim()).filter(Boolean);
    const properties = [];
    
    rules.forEach(rule => {
      const colonIdx = rule.indexOf(':');
      if (colonIdx > 0) {
        const prop = rule.slice(0, colonIdx).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        let val = rule.slice(colonIdx + 1).trim().replace(/&quot;/g, '').replace(/"/g, "'");
        properties.push(`"${prop}": "${val}"`);
      }
    });

    if (properties.length === 0) return '';
    return `style={{ ${properties.join(', ')} }}`;
  });

  // Self close void elements: img, input, br, hr, source
  jsx = jsx.replace(/<(img|input|br|hr|source)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

  // Replace HTML comments
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

  return jsx;
}

module.exports = { htmlToJsx };
