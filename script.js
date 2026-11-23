// CONTENT SETTINGS — add more items to any array; layout expands automatically.
// Keep personal profile and project URLs empty until you provide your actual links.
const portfolioContent = {
  // WEBSITE ICON / SIDEBAR LOGO: replace the SVG file in assets/branding,
  // or put your PNG/JPG/SVG there and change this path.
  // The same file is used in the sidebar, mobile header and browser favicon.
  "siteIcon": "assets/branding/site-icon.svg",
  // Add your actual PDF to assets/cv.pdf and set this to "assets/cv.pdf".
  // The download button remains disabled when empty to prevent broken links.
  "cvFile": "assets/cv.pdf",
  "learning": [
    {"category":"Frontend","symbol":"◩","subtitle":"Interfaces & user experience","topics":[
      {"title":"Semantic HTML & accessibility","status":"Practicing","note":"Structure, forms, landmarks, keyboard support."},
      {"title":"Responsive CSS layouts","status":"Learning","note":"Grid, Flexbox, spacing systems, and transitions."},
      {"title":"JavaScript DOM & events","status":"Practicing","note":"Dynamic interfaces and interactive behavior."},
      {"title":"React components","status":"Planned","note":"Reusable components and client-side state."}
    ]},
    {"category":"Backend","symbol":"⌘","subtitle":"APIs & application logic","topics":[
      {"title":"Node.js and Express","status":"Practicing","note":"Routing, middleware, and endpoint design."},
      {"title":"REST API patterns","status":"Learning","note":"Validation, request/response design, and errors."},
      {"title":"Authentication basics","status":"Planned","note":"Sessions, identity, and access control."},
      {"title":"Backend testing","status":"Planned","note":"Automated tests and dependable deployments."}
    ]},
    {"category":"Database","symbol":"▤","subtitle":"Storage & data modeling","topics":[
      {"title":"PostgreSQL queries","status":"Learning","note":"Select, join, constraints, and migrations."},
      {"title":"Supabase integration","status":"Learning","note":"Schema, SDK, and row-level security basics."},
      {"title":"Relationships & indexes","status":"Planned","note":"Normalization and efficient retrieval."},
      {"title":"Backups & data integrity","status":"Planned","note":"Resilient data workflows."}
    ]},
    {"category":"Cybersecurity","symbol":"⬡","subtitle":"Safer systems & fundamentals","topics":[
      {"title":"Web security fundamentals","status":"Learning","note":"Threat models and secure defaults."},
      {"title":"OWASP Top 10","status":"Planned","note":"Common application risks and mitigations."},
      {"title":"Session & token safety","status":"Planned","note":"Authentication protection and permissions."},
      {"title":"Secure deployment","status":"Planned","note":"Secrets, environment configuration, and headers."}
    ]}
  ],

  "projects": [
    {
      "name": "CampusPass",
      "category": "FULL-STACK / SCHEDULING",
      "description": "An appointment scheduling experience with a guided enrollment flow, reference codes, and admin workflows.",
      "role": "Your role / contribution",
      "contribution": "Replace this text with the specific features YOU implemented, such as the form UI, API routes, reference-code logic, or database integration.",
      "image": "",
      "url": "",
      "tags": [
        "Node.js",
        "Express",
        "Supabase",
        "REST API"
      ]
    },
    {
      "name": "Student Grade Calculator",
      "category": "WEB APPLICATION / EDUCATION",
      "description": "A responsive grade tool with weighted categories, instant recalculation, and easy-to-understand results.",
      "role": "Your role / contribution",
      "contribution": "Describe your personal work here, such as designing the interface, building the grade computation, fixing responsive behavior, or testing the application.",
      "image": "",
      "url": "",
      "tags": [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive UI"
      ]
    }
  ],
  "testimonials": [
    {
      "quote": "Add a real testimonial about your communication, collaboration, or ability to deliver a working project.",
      "name": "Client or collaborator",
      "position": "Verified role / organization",
      "project": "PROJECT OR CONTEXT",
      "label": "SAMPLE \u2014 REPLACE WITH REAL FEEDBACK"
    },
    {
      "quote": "Replace this example with an authentic comment about the quality of your development work and attention to detail.",
      "name": "Project collaborator",
      "position": "Verified role / team",
      "project": "PROJECT OR CONTEXT",
      "label": "SAMPLE \u2014 REPLACE WITH REAL FEEDBACK"
    },
    {
      "quote": "Add a genuine testimonial describing how your contribution helped the project or improved the final result.",
      "name": "Mentor or client",
      "position": "Verified role / company",
      "project": "PROJECT OR CONTEXT",
      "label": "SAMPLE \u2014 REPLACE WITH REAL FEEDBACK"
    }
  ],
  "socials": [
    {
      "name": "Facebook",
      "logo": "assets/social/facebook.svg",
      "url": "https://www.facebook.com/profile.php?id=61589911470975"
    },
    {
      "name": "TikTok",
      "logo": "assets/social/tiktok.svg",
      "url": "https://www.tiktok.com/@benedict_lamoglia"
    },
    {
      "name": "GitHub",
      "logo": "assets/social/github.svg",
      "url": "https://github.com/benedictlamoglia"
    },
    {
      "name": "LinkedIn",
      "logo": "assets/social/linkedin.svg",
      "url": "https://www.linkedin.com/in/john-benedict-5179692b0/"
    }
  ],
  "techStack": [
    {
      "category": "Front-end",
      "items": [
        {
          "name": "HTML5",
          "icon": "tech-html"
        },
        {
          "name": "CSS3",
          "icon": "tech-css"
        },
        {
          "name": "JavaScript",
          "icon": "tech-javascript"
        },
        {
          "name": "Responsive UI",
          "icon": "tech-responsive"
        }
      ]
    },
    {
      "category": "Back-end",
      "items": [
        {
          "name": "Node.js",
          "icon": "tech-node"
        },
        {
          "name": "Express.js",
          "icon": "tech-express"
        },
        {
          "name": "REST APIs",
          "icon": "tech-rest"
        }
      ]
    },
    {
      "category": "Data & Auth",
      "items": [
        {
          "name": "PostgreSQL",
          "icon": "tech-postgres"
        },
        {
          "name": "Supabase",
          "icon": "tech-supabase"
        },
        {
          "name": "Authentication",
          "icon": "tech-auth"
        }
      ]
    },
    {
      "category": "Tools & Deployment",
      "items": [
        {
          "name": "Git",
          "icon": "tech-git"
        },
        {
          "name": "GitHub",
          "icon": "tech-github"
        },
        {
          "name": "Vercel",
          "icon": "tech-vercel"
        },
        {
          "name": "Render",
          "icon": "tech-render"
        }
      ]
    }
  ],
  "certifications": [
    {
      "title": "Certification title",
      "issuer": "Issuing organization",
      "year": "YEAR",
      "image": "",
      "credentialUrl": "",
      "description": "Add your certificate image and its verified details."
    },
    {
      "title": "Training or course certificate",
      "issuer": "Learning provider",
      "year": "YEAR",
      "image": "",
      "credentialUrl": "",
      "description": "Replace this example with an actual qualification."
    }
  ]
};


// SHARED PAGE BEHAVIOR — sidebar, theme switching, and learning journal.
(() => {
  const root = document.documentElement;
  const page = document.body.dataset.page || 'home';

  // One editable icon path controls both the sidebar logo and browser tab favicon.
  const customSiteIcon = typeof portfolioContent.siteIcon === 'string' ? portfolioContent.siteIcon.trim() : '';
  const favicon = document.querySelector('link[data-site-favicon]');
  if (customSiteIcon) {
    document.querySelectorAll('img[data-site-icon]').forEach(img => {
      img.addEventListener('error', () => img.classList.add('is-broken'), { once: true });
      img.src = customSiteIcon;
    });
    if (favicon) {
      favicon.href = customSiteIcon;
      favicon.type = /\.svg(?:$|[?#])/i.test(customSiteIcon) ? 'image/svg+xml' : /\.png(?:$|[?#])/i.test(customSiteIcon) ? 'image/png' : /\.(?:jpe?g)(?:$|[?#])/i.test(customSiteIcon) ? 'image/jpeg' : 'image/x-icon';
    }
  }

  let savedTheme = null;
  try { savedTheme = localStorage.getItem('portfolio-theme'); } catch (_) {}
  function setTheme(next) {
    const theme = next === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f5f5f3' : '#0b0c0e');
    document.querySelectorAll('.theme-icon').forEach(el => { el.textContent = theme === 'light' ? '☾' : '☼'; });
    document.querySelectorAll('.theme-toggle-label').forEach(el => { el.textContent = theme === 'light' ? 'Dark mode' : 'Light mode'; });
    document.querySelectorAll('.theme-toggle').forEach(el => el.setAttribute('aria-label',theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'));
    try { localStorage.setItem('portfolio-theme',theme); } catch (_) {}
  }
  setTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  document.querySelectorAll('.theme-toggle').forEach(button => button.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark')));

  const nav = document.getElementById('siteSidebar');
  const toggle = document.getElementById('sidebarToggle');
  const scrim = document.getElementById('sidebarScrim');
  let lastFocus = null;
  function closeSidebar() {
    const wasOpen = document.body.classList.contains('sidebar-open');
    document.body.classList.remove('sidebar-open');
    toggle?.setAttribute('aria-expanded','false');
    toggle?.setAttribute('aria-label','Open navigation');
    toggle?.querySelector('span')?.replaceChildren('☰');
    if(wasOpen && lastFocus && window.innerWidth <= 920) lastFocus.focus();
  }
  toggle?.addEventListener('click',() => {
    const isOpen = document.body.classList.contains('sidebar-open');
    if(isOpen) closeSidebar();
    else {
      lastFocus = toggle;
      document.body.classList.add('sidebar-open');
      toggle.setAttribute('aria-expanded','true');
      toggle.setAttribute('aria-label','Close navigation');
      toggle.querySelector('span')?.replaceChildren('✕');
      nav.querySelector('.side-link')?.focus();
    }
  });
  scrim?.addEventListener('click',closeSidebar);
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click',() => {
    if (document.body.classList.contains('sidebar-open')) closeSidebar();
  }));
  document.addEventListener('keydown', event => { if(event.key === 'Escape' && document.body.classList.contains('sidebar-open')) closeSidebar(); });
  window.addEventListener('resize',() => { if(window.innerWidth > 920) closeSidebar(); });

  const links = [...(nav?.querySelectorAll('a[data-section]') || [])];
  if(page === 'learning') {
    const active = links.find(x => x.dataset.section === 'learning');
    active?.classList.add('is-current');
  } else {
    const byId = new Map(links.filter(x => x.dataset.section !== 'learning').map(x => [x.dataset.section,x]));
    const activeLink = (id) => { for(const a of links) a.classList.toggle('is-current',a.dataset.section === id); };
    activeLink('home');
    if('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        const inView = entries.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
        if(inView.length) activeLink(inView[0].target.id);
      }, {rootMargin:'-15% 0px -58% 0px',threshold:[0,.1,.3,.6]});
      byId.forEach((_,id) => { const section=document.getElementById(id);if(section) observer.observe(section); });
    }
  }
  const year = document.getElementById('year');
  if(year) year.textContent=String(new Date().getFullYear());

  // The learning page reads topic data from portfolioContent.learning.
  if(page !== 'learning') return;
  const grid = document.getElementById('learningGrid');
  const filters = [...document.querySelectorAll('.learning-filter')];
  const content = Array.isArray(portfolioContent.learning) ? portfolioContent.learning : [];
  function make(tag,className,value) {
    const e=document.createElement(tag);
    if(className)e.className=className;
    if(value!==undefined)e.textContent=String(value);
    return e;
  }
  function draw(filter='all') {
    grid.replaceChildren();
    for(const group of content) {
      const topics=(Array.isArray(group.topics)?group.topics:[]).filter(t=>filter==='all'||t.status===filter);
      if(!topics.length)continue;
      const card=make('article','learning-card');
      const head=make('div','learning-card-head');
      const icon=make('span','learning-card-icon',group.symbol||'◈');icon.setAttribute('aria-hidden','true');
      const txt=make('div','learning-card-intro');
      txt.append(make('h3','',group.category||'Learning'),make('p','',group.subtitle||'Learning topics'));
      head.append(icon,txt,make('span','learning-topic-count',String(topics.length).padStart(2,'0')+' TOPICS'));
      const list=make('div','learning-topic-list');
      topics.forEach(topic => {
        const item=make('div','learning-topic');
        const top=make('div','learning-topic-top');
        top.append(make('strong','',topic.title||'Topic'), make('span','learning-status '+String(topic.status||'Planned').toLowerCase(),topic.status||'Planned'));
        item.append(top,make('p','',topic.note||''));
        if(topic.resource && /^https:\/\//i.test(topic.resource)) {
          const a=make('a','learning-resource','Learning resource ↗');a.href=topic.resource;a.rel='noopener noreferrer';a.target='_blank';item.append(a);
        }
        list.append(item);
      });
      card.append(head,list);grid.append(card);
    }
    if(!grid.childElementCount)grid.append(make('p','learning-empty','No topics match this filter. Add an entry in script.js or choose another filter.'));
  }
  filters.forEach(button=>button.addEventListener('click',()=>{
    filters.forEach(b=>{const active=b===button;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
    draw(button.dataset.filter);
  }));
  draw();
})();

// Home-only behavior is isolated so the learning page can share this script safely.
if (document.body.dataset.page === 'home') {

// WEBSITE BEHAVIOR
    // Set your photo at assets/profile.jpg. The illustration is displayed if the file is absent.
    const profilePhoto = document.getElementById('portraitPhoto');
    const portraitFrame = document.getElementById('portraitFrame');
    profilePhoto.addEventListener('load', () => portraitFrame.classList.add('has-photo'));
    profilePhoto.addEventListener('error', () => portraitFrame.classList.remove('has-photo'));
    if (profilePhoto.complete && profilePhoto.naturalWidth > 0) portraitFrame.classList.add('has-photo');
    // V11: smooth 3D portrait parallax. Also works after you replace profile.jpg.
    (() => {
      const stage = document.getElementById('portraitStage');
      const tilt = document.getElementById('portraitTilt');
      if (!stage || !tilt || !window.matchMedia('(hover:hover) and (pointer:fine)').matches ||
          window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      let raf = 0;
      stage.addEventListener('pointermove', event => {
        const box = stage.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (event.clientX-box.left)/box.width));
        const y = Math.max(0, Math.min(1, (event.clientY-box.top)/box.height));
        stage.classList.add('is-interacting');
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          tilt.style.setProperty('--portrait-rx', `${((.5-y)*12).toFixed(2)}deg`);
          tilt.style.setProperty('--portrait-ry', `${((x-.5)*16).toFixed(2)}deg`);
          portraitFrame.style.setProperty('--face-shift-x', `${((x-.5)*-9).toFixed(2)}px`);
          portraitFrame.style.setProperty('--face-shift-y', `${((y-.5)*-7).toFixed(2)}px`);
        });
      }, {passive:true});
      const reset = () => {
        cancelAnimationFrame(raf);
        stage.classList.remove('is-interacting');
        for (const key of ['--portrait-rx','--portrait-ry']) tilt.style.removeProperty(key);
        for (const key of ['--face-shift-x','--face-shift-y']) portraitFrame.style.removeProperty(key);
      };
      stage.addEventListener('pointerleave',reset);
      stage.addEventListener('pointercancel',reset);
    })();
    document.getElementById('contactForm').addEventListener('submit',event=>{event.preventDefault();document.getElementById('formStatus').textContent='Preview mode: no email was sent. Connect a secure API + email service before publishing.';});

    // CONTENT RENDERER: add as many technology groups/items and certifications as you like.
    (() => {
      const content = portfolioContent;
      const techRoot = document.getElementById('stackList');
      const certRoot = document.getElementById('certificationsGrid');
      const svgNamespace = 'http://www.w3.org/2000/svg';
      const titles = (name) => String(name ?? '').trim();
      const initials = (name) => titles(name).split(/\s+/).map(p => p[0]).join('').slice(0,2).toUpperCase() || '◈';
      function el(tag, className, value) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (value !== undefined) node.textContent = String(value);
        return node;
      }
      function fallbackLogo(node, label) { node.replaceChildren(el('span','tech-fallback',initials(label))); }
      for (const group of (Array.isArray(content.techStack) ? content.techStack : [])) {
        const card = el('article','stack-group stack-tilt-card');
        const heading = el('div','stack-group-heading');
        heading.append(el('small','',titles(group.category) || 'Tools'), el('span','group-heading-arrow','↗'));
        heading.lastChild.setAttribute('aria-hidden','true');
        const list = el('ul','tech-items');
        for (const item of (Array.isArray(group.items) ? group.items : [])) {
          const name = titles(item.name);
          if (!name) continue;
          const li = el('li','tech-item tech-item-depth');
          const logo = el('span','tech-logo');
          if (typeof item.logo === 'string' && item.logo.trim()) {
            const img = el('img');
            img.alt = '';
            img.loading = 'lazy';
            img.onerror = () => fallbackLogo(logo,name);
            img.src = item.logo.trim();
            logo.append(img);
          } else if (typeof item.icon === 'string' && /^tech-[a-z0-9-]+$/.test(item.icon) && document.getElementById(item.icon)) {
            const svg = document.createElementNS(svgNamespace,'svg');
            svg.setAttribute('class','tech-icon');
            svg.setAttribute('aria-hidden','true');
            const use = document.createElementNS(svgNamespace,'use');
            use.setAttribute('href','#'+item.icon);
            svg.append(use);
            logo.append(svg);
          } else {
            fallbackLogo(logo,name);
          }
          li.append(logo,el('span','tech-label',name));
          list.append(li);
        }
        card.append(heading,list);
        techRoot.append(card);
      }
      if (!techRoot.childElementCount) techRoot.append(el('p','cert-empty','Add a technology category in the portfolio content block.'));

      const certs = Array.isArray(content.certifications) ? content.certifications : [];
      document.getElementById('certCount').textContent = `${certs.length} ${certs.length === 1 ? 'ENTRY' : 'ENTRIES'}`;
      const dialog = document.getElementById('certificateDialog');
      const dialogImage = document.getElementById('certificateDialogImage');
      let lastPreviewButton = null;
      function closePreview() { dialog.close(); dialogImage.removeAttribute('src'); if (lastPreviewButton) lastPreviewButton.focus(); }
      document.getElementById('certificateClose').addEventListener('click', closePreview);
      dialog.addEventListener('click', (e) => { if (e.target === dialog) closePreview(); });
      dialog.addEventListener('close', () => { dialogImage.removeAttribute('src'); });
      for (const cert of certs) {
        const title = titles(cert.title) || 'Certification';
        const issuer = titles(cert.issuer) || 'Issuer to add';
        const year = titles(cert.year) || 'YEAR';
        const imagePath = typeof cert.image === 'string' ? cert.image.trim() : '';
        const card = el('article','cert-card');
        const media = el(imagePath ? 'button' : 'div','cert-media');
        if (imagePath) {
          media.type = 'button';
          media.setAttribute('aria-label',`View certificate image: ${title}`);
          const pic = el('img');
          pic.alt = `Certificate image for ${title}`;
          pic.loading = 'lazy';
          const placeHolder = certPlaceholder();
          pic.style.opacity = '0';
          media.append(pic, placeHolder);
          pic.addEventListener('load', () => {pic.style.opacity = '1'; placeHolder.remove();});
          pic.addEventListener('error', () => {
            const staticPlaceholder = el('div','cert-media');
            staticPlaceholder.append(certPlaceholder());
            media.replaceWith(staticPlaceholder);
          });
          pic.src = imagePath;
          media.addEventListener('click', async () => {
            // A lazy-loaded certificate may still be downloading after scrolling into view.
            try { await pic.decode(); } catch { return; }
            if (!pic.naturalWidth || !media.isConnected) return;
            lastPreviewButton = media;
            dialogImage.src = imagePath;
            dialogImage.alt = `Full-size image: ${title}`;
            document.getElementById('certificateDialogTitle').textContent = title;
            document.getElementById('certificateDialogSubtitle').textContent = `${issuer} · ${year}`;
            dialog.showModal();
          });
        } else { media.append(certPlaceholder()); }
        const body = el('div','cert-card-body');
        const meta = el('div','cert-meta');
        meta.append(el('span','',issuer),el('span','',year));
        body.append(meta,el('h4','',title));
        if (titles(cert.description)) body.append(el('p','',cert.description));
        if (typeof cert.credentialUrl === 'string' && /^https:\/\//i.test(cert.credentialUrl)) {
          const link = el('a','cert-credential','View credential ↗');
          link.href = cert.credentialUrl;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          body.append(link);
        }
        card.append(media,body);
        certRoot.append(card);
      }
      if (!certs.length) certRoot.append(el('p','cert-empty','Your certifications will appear here once you add them.'));
      function certPlaceholder() {
        const holder = el('div','cert-image-placeholder');
        holder.innerHTML = '<svg viewBox="0 0 48 48" fill="none" stroke-width="1.5" aria-hidden="true"><rect x="9" y="5" width="30" height="38" rx="3"/><path d="M16 14h16M16 20h12M16 26h16M16 32h8"/><path d="m28 38 4-6 4 6"/></svg><span>ADD CERTIFICATE IMAGE</span>';
        return holder;
      }
    })();

    // Subtle 3D parallax for stack cards; animation is intentionally pointer-only.
    (() => {
      const canTilt = window.matchMedia('(hover:hover) and (pointer:fine)').matches &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!canTilt) return;
      document.querySelectorAll('#stack .stack-tilt-card').forEach(card => {
        let frame = 0;
        card.addEventListener('pointermove', event => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            card.style.setProperty('--rx', `${((.5-y)*11).toFixed(2)}deg`);
            card.style.setProperty('--ry', `${((x-.5)*12).toFixed(2)}deg`);
            card.style.setProperty('--mx', `${(x*100).toFixed(1)}%`);
            card.style.setProperty('--my', `${(y*100).toFixed(1)}%`);
          });
        }, {passive:true});
        card.addEventListener('pointerleave', () => {
          cancelAnimationFrame(frame);
          card.style.removeProperty('--rx');
          card.style.removeProperty('--ry');
          card.style.removeProperty('--mx');
          card.style.removeProperty('--my');
        });
      });
    })();


// VERSION 08: Project showcases, personal contributions, socials, and layered testimonials.
// Edit ONLY portfolioContent at the top to add items. User-provided content is rendered as text.
(() => {
  'use strict';
  const make = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = String(text);
    return node;
  };
  const clean = (value) => String(value ?? '').trim();
  const publicUrl = value => {
    try {
      const parsed = new URL(clean(value));
      return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed.href : '';
    } catch { return ''; }
  };

  // Personal social profile links below the animated portrait.
  const socialRoot = document.getElementById('socialLinks');
  for (const social of (Array.isArray(portfolioContent.socials) ? portfolioContent.socials : [])) {
    const name = clean(social.name);
    if (!name) continue;
    const url = publicUrl(social.url);
    const node = make(url ? 'a' : 'span', 'social-chip' + (url ? '' : ' is-unset'));
    const icon = make('img');
    icon.alt = '';
    icon.width = 21;
    icon.height = 21;
    if (clean(social.logo)) icon.src = clean(social.logo);
    else icon.hidden = true;
    icon.addEventListener('error', () => { icon.hidden = true; });
    node.append(icon, make('span','social-name',name));
    if (url) {
      node.href = url;
      node.target = '_blank';
      node.rel = 'noopener noreferrer';
      node.setAttribute('aria-label', `Visit my ${name} profile (opens new tab)`);
    } else {
      node.title = `Add your ${name} profile URL in script.js`;
      node.setAttribute('aria-label',`${name} profile URL not configured`);
    }
    socialRoot.append(node);
  }
  if (!socialRoot.children.length) socialRoot.append(make('p','empty-copy','Add your social platforms in script.js.'));


  // CV download: configure portfolioContent.cvFile after adding your real PDF.
  const cvSlot=document.getElementById('cvDownloadSlot');
  const cvFile=String(portfolioContent.cvFile ?? '').trim();
  const safeCV = cvFile && !cvFile.startsWith('//') && !cvFile.startsWith('\\') && !/^\s*(javascript:|data:)/i.test(cvFile) && (/^https:\/\//i.test(cvFile) || /^(\.\/)?assets\/[a-z0-9_./-]+\.pdf$/i.test(cvFile));
  const cvLink=document.createElement(safeCV ? 'a' : 'span');
  cvLink.className='cv-download-button'+(safeCV?'':' is-unset');
  cvLink.innerHTML='<span class="cv-icon" aria-hidden="true">⇩</span><span>Download my CV<small>PDF document</small></span><span class="cv-button-arrow" aria-hidden="true">↗</span>';
  if(safeCV) {
    cvLink.href=cvFile;
    cvLink.download='Developer-CV.pdf';
    cvLink.setAttribute('aria-label','Download my CV (PDF)');
  } else {
    cvLink.title='Add your actual CV PDF and update cvFile in script.js';
    cvLink.setAttribute('aria-label','CV download will be available when configured');
    cvLink.querySelector('small').textContent='Add your PDF to activate';
  }
  cvSlot.append(cvLink);

  // Project cards with image, individual contributions, technology labels, and a real link button.
  const projectRoot = document.getElementById('projectsGrid');
  const projectDialog = document.getElementById('projectDialog');
  const projectDialogImage = document.getElementById('projectDialogImage');
  let lastProjectTrigger = null;
  function closeProjectDialog() { projectDialog.close(); projectDialogImage.removeAttribute('src'); lastProjectTrigger?.focus(); }
  document.getElementById('projectDialogClose').addEventListener('click',closeProjectDialog);
  projectDialog.addEventListener('click',ev => { if (ev.target === projectDialog) closeProjectDialog(); });
  projectDialog.addEventListener('close',() => projectDialogImage.removeAttribute('src'));
  function placeholder() {
    const wrap = make('div','project-placeholder');
    const frame = make('div','project-mock-browser');
    const top = make('div','project-mock-top');
    const circles = make('span','project-mock-lights');
    for(let i=0;i<3;i++) circles.append(make('i'));
    top.append(circles,make('span','project-mock-url','your-project-preview.app'));
    const body = make('div','project-mock-body');
    const side = make('div','project-mock-sidebar');
    for(let i=0;i<4;i++) side.append(make('span','project-mock-line'));
    const content = make('div','project-mock-content');
    content.append(make('div','project-mock-title'),make('div','project-mock-text'),make('div','project-mock-text short'));
    const mini = make('div','project-mock-boxes');
    for(let i=0;i<3;i++) mini.append(make('span'));
    content.append(mini);
    body.append(side,content);
    frame.append(top,body);
    wrap.append(frame,make('span','project-placeholder-label','ADD PROJECT SCREENSHOT'));
    return wrap;
  }
  for (const project of (Array.isArray(portfolioContent.projects) ? portfolioContent.projects : [])) {
    const title = clean(project.name);
    if (!title) continue;
    const card = make('article','project-showcase-card');
    const media = make('div','project-media');
    media.append(make('span','project-media-category',clean(project.category) || 'PROJECT'));
    const visual = make('div','project-media-visual');
    const fall = placeholder();
    visual.append(fall);
    const image = clean(project.image);
    if (image) {
      const button = make('button','project-image-button');
      button.type = 'button';
      button.setAttribute('aria-label',`Expand screenshot of ${title}`);
      const img = make('img','project-image');
      img.alt = `${title} project screenshot`;
      img.loading = 'lazy';
      img.addEventListener('load',() => { if(img.naturalWidth) fall.remove(); });
      img.addEventListener('error',() => { button.remove(); });
      button.append(img,make('span','project-zoom-label','EXPAND IMAGE ↗'));
      img.src = image;
      visual.append(button);
      button.addEventListener('click', () => {
        if(!img.naturalWidth) return;
        lastProjectTrigger = button;
        projectDialogImage.src = image;
        projectDialogImage.alt = `Full size screenshot of ${title}`;
        document.getElementById('projectDialogTitle').textContent = title;
        projectDialog.showModal();
      });
    }
    media.append(visual);
    const body = make('div','project-showcase-body');
    const headline = make('div','project-headline');
    headline.append(make('h3','',title), make('span','project-card-symbol','↗'));
    body.append(headline,make('p','project-description',clean(project.description)));
    const details = make('div','project-contribution');
    details.append(make('div','project-contribution-heading','MY CONTRIBUTION'),make('strong','project-contribution-role',clean(project.role) || 'Your role'));
    details.append(make('p','',clean(project.contribution) || 'Describe the parts of the project you personally developed.'));
    body.append(details);
    const tags = make('div','project-tags');
    for(const tag of (Array.isArray(project.tags) ? project.tags : [])) {
      if(clean(tag)) tags.append(make('span','tag',clean(tag)));
    }
    body.append(tags);
    const link = publicUrl(project.url);
    if (link) {
      const anchor = make('a','project-live-button','View project');
      anchor.href = link;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.append(make('span','','↗'));
      anchor.setAttribute('aria-label',`Open ${title} project in a new tab`);
      body.append(anchor);
    } else {
      const empty = make('span','project-live-button is-unset','Project link coming soon');
      empty.append(make('span','','↗'));
      empty.title = 'Add this project URL in script.js to activate the button';
      body.append(empty);
    }
    card.append(media,body);
    projectRoot.append(card);
  }
  if (!projectRoot.children.length) projectRoot.append(make('p','empty-copy','Add a project in script.js to display it here.'));

  // Layered testimonial carousel; all sample text is explicitly labeled as unverified.
  const testimonials = (Array.isArray(portfolioContent.testimonials) ? portfolioContent.testimonials : []).filter(item=>clean(item.quote));
  const stage = document.getElementById('testimonialStage');
  const dots = document.getElementById('testimonialDots');
  const count = document.getElementById('testimonialCount');
  const prev = document.getElementById('testimonialPrev');
  const next = document.getElementById('testimonialNext');
  if (!testimonials.length) {
    stage.append(make('p','empty-copy','Add authentic testimonials in script.js to display them here.'));
    prev.hidden = next.hidden = true;
  } else {
    let active = 0;
    const cards = testimonials.map((review,index) => {
      const card = make('button','testimonial-deck-card');
      card.type = 'button';
      card.dataset.index = index;
      card.append(make('div','testimonial-chip',clean(review.label) || 'TESTIMONIAL'));
      card.append(make('div','testimonial-quote-mark','“'));
      card.append(make('p','testimonial-body',clean(review.quote)));
      const byline = make('div','testimonial-author');
      const avatar = make('span','testimonial-avatar',clean(review.name).split(/\s+/).map(x=>x[0]).join('').slice(0,2).toUpperCase() || '•');
      const person = make('span','testimonial-author-meta');
      person.append(make('strong','',clean(review.name) || 'Anonymous'),make('small','',clean(review.position) || 'Role not specified'));
      byline.append(avatar,person);
      card.append(byline);
      if(clean(review.project)) card.append(make('div','testimonial-project-tag',clean(review.project)));
      card.addEventListener('click',() => { if(index!==active) setActive(index); });
      stage.append(card);
      const dot = make('button','testimonial-dot');
      dot.type = 'button';
      dot.setAttribute('aria-label',`Show testimonial ${index+1}`);
      dot.addEventListener('click',()=>setActive(index));
      dots.append(dot);
      return card;
    });
    function setActive(nextIndex) {
      active = (nextIndex + testimonials.length)%testimonials.length;
      cards.forEach((card,i) => {
        const offset = (i-active+testimonials.length)%testimonials.length;
        const state = offset === 0 ? 'is-active' : offset === 1 ? 'is-next' : offset === testimonials.length-1 ? 'is-prev' : 'is-hidden';
        card.className = `testimonial-deck-card ${state}`;
        card.tabIndex = offset===0 ? 0 : -1;
        card.setAttribute('aria-label',`${i+1} of ${testimonials.length}: ${clean(testimonials[i].name)}`);
        card.setAttribute('aria-hidden',offset===0 ? 'false' : 'true');
      });
      [...dots.children].forEach((dot,i)=>{
        dot.classList.toggle('active',i===active);
        dot.setAttribute('aria-current',i===active ? 'true':'false');
      });
      count.textContent = `${String(active+1).padStart(2,'0')} / ${String(testimonials.length).padStart(2,'0')}`;
    }
    prev.addEventListener('click',()=>setActive(active-1));
    next.addEventListener('click',()=>setActive(active+1));
    stage.addEventListener('keydown',event => {
      if (event.key === 'ArrowLeft') { event.preventDefault();setActive(active-1);cards[active].focus(); }
      if (event.key === 'ArrowRight') { event.preventDefault();setActive(active+1);cards[active].focus(); }
    });
    let touchStart = null;
    stage.addEventListener('touchstart',ev => {touchStart = ev.touches[0]?.clientX ?? null;},{passive:true});
    stage.addEventListener('touchend',ev => {
      if(touchStart === null) return;
      const change = (ev.changedTouches[0]?.clientX ?? touchStart) - touchStart;
      if(Math.abs(change)>55) setActive(active+(change<0?1:-1));
      touchStart=null;
    },{passive:true});
    if(testimonials.length===1) prev.hidden=next.hidden=true;
    setActive(0);
  }
})();

}
