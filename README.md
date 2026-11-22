# Developer Portfolio — Version 11

A two-page, responsive developer portfolio with a non-scrolling fixed sidebar, 3D tech stack, project contributions, certification images, compact testimonial carousel, Learning Journal, dark/light theme, and social / CV controls.

## Files

- `index.html` — main portfolio page
- `learning.html` — Frontend, Backend, Database, and Cybersecurity learning journal
- `style.css` — both pages, including sidebar and both color themes
- `script.js` — theme persistence, navigation, interactions, and all editable data
- `assets/` — your photo, project screenshots, certification images, technology logos, social icons and CV file

## Open locally

Open `index.html` with VS Code Live Server (recommended), or a local static HTTP server. Both pages share the same CSS and JS and work without Node packages or a build step. For deployment, upload the full directory to Vercel, Netlify, or any static hosting platform.

## Customize content in `script.js`

Edit the `portfolioContent` object at the beginning of the file:

- `projects`: add project entries containing image path, your individual contribution, tech tags, and project URL
- `techStack`: add unlimited categories and technologies. Use built-in `icon`, custom `logo`, or automatically rendered fallback initials
- `certifications`: add scanned certificate images in `assets/certifications/`, credential details, and optional URL
- `testimonials`: replace the three clearly marked example testimonials with verified genuine comments
- `socials`: enter your full Facebook, TikTok, GitHub, and LinkedIn URLs. Missing links remain inactive
- `learning`: add / remove categories or topics, update title, note, and `status` (`Learning`, `Practicing`, or `Planned`). The filter buttons work automatically. You can add optional `resource: "https://..."` to a topic
- `cvFile`: after supplying your actual PDF in `assets/cv.pdf`, change the empty value to `"assets/cv.pdf"`. The button will then download the file. Do not publish an outdated or private CV unintentionally

### Change the website icon / logo (sidebar + browser tab)

The logo is stored in `assets/branding/site-icon.svg` (a visible code-symbol placeholder).

**Easiest:** replace `assets/branding/site-icon.svg` with your own SVG, keeping the filename.

**For PNG, JPEG, SVG or ICO:** put the new file into `assets/branding/`, then change the single `siteIcon` setting at the very beginning of `script.js`:

```js
"siteIcon": "assets/branding/my-logo.png",
```

This updates the desktop sidebar icon, mobile header logo and browser-tab favicon together. Refresh after changing it; favicons may need a hard refresh due to browser caching. A missing image shows a simple fallback mark instead of a broken picture in the navigation.

### Photo

Place your actual photo at `assets/profile.jpg` to replace the silhouette in the portrait.

### Example learning topic

```javascript
{"title": "Docker basics", "status": "Learning", "note": "Build images, containers, and Compose."}
```

### Theme switch

Click the sun/moon icon in the sidebar or mobile header. Selection is saved in localStorage when available. Initial visit follows your system's light/dark preference.

### Navigation

The desktop sidebar itself is fixed and does **not** have an internal scrollbar; clicking a section link moves the main page to that section. The Learning Journal opens `learning.html`. On mobile, the menu is a slide-out overlay. At shorter viewport heights, sidebar spacing shrinks automatically so the links remain visible.

### CV

There is no CV supplied in this prototype. The download button intentionally remains disabled until a legitimate PDF path is configured. To enable it: copy your real PDF to `assets/cv.pdf`, then change `cvFile` in `script.js` to `"assets/cv.pdf"`.

### Contact form

The contact form remains demo-only. It will not send email until a secure backend or email-service integration is added. Do not expose a personal email API key in public JavaScript.

### Notes

- Example projects, credentials, learning entries and testimonials are placeholders: edit before publishing
- Animations honor the user's reduced-motion preference
- The architecture diagram is conceptual
- Real photo and certificate images are NOT inverted by light mode

### Sidebar note

Only the main document scrolls. The sidebar has no independent scroll bar. The layout also compresses at short viewport heights, while keeping the theme switch accessible.

## Version 11 – compact layout and 3D photo

The sections for Projects, Tech Stack, Development Details, Architecture, and Contact use tighter spacing and smaller cards. The main portrait is smaller and gains a floating 3D frame, two slowly rotating depth rings, and pointer-responsive tilt and head/photo parallax. On touch devices it tilts very gently by itself. The effect remains when you add `assets/profile.jpg`. Reduced-motion preferences disable these animations.

All content, links, project screenshots, certification images, theme controls, sidebar, and the Learning Journal remain editable and available.
