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

  // Replace maxlength= with maxLength={number}
  jsx = jsx.replace(/\bmaxlength="(\d+)"/gi, 'maxLength={$1}');
  jsx = jsx.replace(/\bmaxLength="(\d+)"/g, 'maxLength={$1}');
  jsx = jsx.replace(/\btabindex="(-?\d+)"/gi, 'tabIndex={$1}');
  jsx = jsx.replace(/\btabIndex="(-?\d+)"/g, 'tabIndex={$1}');
  jsx = jsx.replace(/\brows="(\d+)"/gi, 'rows={$1}');
  jsx = jsx.replace(/\bcols="(\d+)"/gi, 'cols={$1}');

  // Replace boolean video attributes
  jsx = jsx.replace(/\bplaysinline(?=[>\s="])/gi, 'playsInline');
  jsx = jsx.replace(/\bautoplay(?=[>\s="])/gi, 'autoPlay');
  
  // Clean boolean attributes that have empty strings
  jsx = jsx.replace(/\bautoPlay=""/g, 'autoPlay');
  jsx = jsx.replace(/\bloop=""/g, 'loop');
  jsx = jsx.replace(/\bmuted=""/g, 'muted');
  jsx = jsx.replace(/\bplaysInline=""/g, 'playsInline');
  jsx = jsx.replace(/\b(hidden|disabled|required|readonly|checked|selected)=""/gi, '$1');
  jsx = jsx.replace(/\bdata-autoPlay=/g, 'data-autoplay=');
  jsx = jsx.replace(/\bdata-playsInline=/g, 'data-playsinline=');
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
