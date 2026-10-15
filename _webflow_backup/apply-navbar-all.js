const fs = require('fs');
const path = require('path');

function getNavbarHtml(activeRoute) {
  const isHome = activeRoute === '/' || activeRoute === 'home';
  const isAbout = activeRoute === '/about';
  const isCases = activeRoute === '/case-studies' || activeRoute.startsWith('/case-study/');
  const isBlog = activeRoute === '/blog' || activeRoute.startsWith('/blog/');
  const isFaqs = activeRoute === '/faqs';
  const isContact = activeRoute === '/contact';

  return `
<header class="site-navbar">
  <div class="site-navbar-container">
    <a href="/" class="site-navbar-brand" aria-label="Reels Home">
      <img src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a02df823bcadff2eaf1e6f5_logo.svg" alt="Reels Logo" class="site-navbar-logo"/>
    </a>

    <ul class="site-navbar-menu">
      <li><a href="/" class="site-navbar-link ${isHome ? 'active' : ''}">Home</a></li>
      <li><a href="/about" class="site-navbar-link ${isAbout ? 'active' : ''}">About</a></li>
      <li><a href="/case-studies" class="site-navbar-link ${isCases ? 'active' : ''}">Case studies</a></li>
      <li><a href="/blog" class="site-navbar-link ${isBlog ? 'active' : ''}">Blog</a></li>
      <li><a href="/faqs" class="site-navbar-link ${isFaqs ? 'active' : ''}">FAQs</a></li>
      <li><a href="/contact" class="site-navbar-link ${isContact ? 'active' : ''}">Contact</a></li>
    </ul>

    <div class="site-navbar-actions">
      <a href="/contact" class="site-navbar-cta">
        <span class="site-navbar-cta-icon">
          <img src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a02fc14b3709c0b95669297_call-icon.svg" alt="Call Icon"/>
        </span>
        <span>Book a call</span>
      </a>

      <button class="site-navbar-toggle" id="navbarMobileToggle" aria-label="Toggle navigation menu">
        <span class="toggle-bar"></span>
        <span class="toggle-bar"></span>
        <span class="toggle-bar"></span>
      </button>
    </div>
  </div>

  <div class="site-navbar-mobile-drawer" id="navbarMobileDrawer">
    <ul class="site-navbar-mobile-menu">
      <li><a href="/" class="site-navbar-mobile-link ${isHome ? 'active' : ''}">Home</a></li>
      <li><a href="/about" class="site-navbar-mobile-link ${isAbout ? 'active' : ''}">About</a></li>
      <li><a href="/case-studies" class="site-navbar-mobile-link ${isCases ? 'active' : ''}">Case studies</a></li>
      <li><a href="/blog" class="site-navbar-mobile-link ${isBlog ? 'active' : ''}">Blog</a></li>
      <li><a href="/faqs" class="site-navbar-mobile-link ${isFaqs ? 'active' : ''}">FAQs</a></li>
      <li><a href="/contact" class="site-navbar-mobile-link ${isContact ? 'active' : ''}">Contact</a></li>
    </ul>
    <a href="/contact" class="site-navbar-mobile-cta">
      <img src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a02fc14b3709c0b95669297_call-icon.svg" alt="Call Icon"/>
      <span>Book a call</span>
    </a>
  </div>
</header>
<script>
(function() {
  const toggle = document.getElementById('navbarMobileToggle');
  const drawer = document.getElementById('navbarMobileDrawer');
  const navbar = document.querySelector('.site-navbar');
  
  if (toggle && drawer) {
    toggle.addEventListener('click', function() {
      const isOpen = drawer.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
    });
  }

  window.addEventListener('scroll', function() {
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
})();
</script>
`;
}

function processFile(filePath, route) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // ensure navbar.css is in head
  if (!content.includes('navbar.css')) {
    content = content.replace('</head>', '  <link rel="stylesheet" href="/navbar.css">\n</head>');
  }

  // replace old navbar
  const oldNavStart = content.indexOf('<div data-animation="default"');
  if (oldNavStart === -1) {
    return;
  }

  let oldNavEnd = -1;
  const overlayTag = '<div class="nav-overlay"></div></div>';
  const overlayIdx = content.indexOf(overlayTag, oldNavStart);
  if (overlayIdx !== -1) {
    oldNavEnd = overlayIdx + overlayTag.length;
  } else {
    const heroIdx = content.indexOf('<section', oldNavStart);
    if (heroIdx !== -1) oldNavEnd = heroIdx;
  }

  if (oldNavEnd !== -1) {
    const newNav = getNavbarHtml(route);
    content = content.slice(0, oldNavStart) + newNav + content.slice(oldNavEnd);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated navbar in ${filePath}`);
  }
}

// Walk all html files
function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        walk(full);
      }
    } else if (file.endsWith('.html')) {
      const rel = path.relative(__dirname, full).replace(/\\/g, '/');
      let route = '/' + rel.replace(/\.html$/, '');
      if (route === '/index') route = '/';
      processFile(full, route);
    }
  }
}

walk(__dirname);
