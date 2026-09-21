# Rahul Prasad — Portfolio

A personal portfolio site for an entry-level AI / Data Science professional
transitioning from Mechanical Engineering. Built with React, Vite, and
Tailwind CSS v4.

## Tech stack

- React 19 + Vite (rolldown build)
- Tailwind CSS v4 (CSS-first config, class-based dark mode)
- Framer Motion (hero entrance animation)
- lucide-react (icons) + two small local SVGs for GitHub/LinkedIn, since
  current lucide-react no longer ships those brand glyphs

## Project structure

```
portfolio/
├── index.html
├── public/
│   ├── favicon.svg
│   └── resume/
│       └── README.txt        ← put your real resume PDF here
├── src/
│   ├── data/
│   │   └── content.js        ← ALL editable text/links/projects live here
│   ├── hooks/
│   │   └── useTheme.js       ← dark/light mode logic
│   ├── components/
│   │   ├── icons/BrandIcons.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx      ← category filtering
│   │   ├── Journey.jsx       ← timeline
│   │   ├── EducationCerts.jsx
│   │   ├── GithubSection.jsx
│   │   ├── Contact.jsx       ← UI-only form, see note below
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             ← design tokens (color/type) live here
├── package.json
└── vite.config.js
```

## Installation

```bash
npm install
```

## Run locally (dev server with hot reload)

```bash
npm run dev
```

Then open the URL it prints (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Deploying

The `dist/` folder is static and can be deployed as-is to Vercel, Netlify,
GitHub Pages, Cloudflare Pages, or any static host. For Vercel/Netlify,
just point them at this repo — both auto-detect Vite (`npm run build`,
output directory `dist`).

---

## Before you publish — replace these placeholders

Everything below lives in **`src/data/content.js`** unless noted. Nothing
was invented on your behalf — these are intentionally left blank/placeholder
so the site never claims something that isn't true yet.

1. **LinkedIn URL** — `profile.linkedin` is currently `"REPLACE_ME_LINKEDIN_URL"`.
   Update it to your real profile URL.
2. **Email address** — `profile.email` is currently a placeholder. Update
   it to your real email.
3. **Resume PDF** — the download buttons link to
   `/resume/Rahul_Prasad_CV_Final.pdf`. Add your actual PDF at
   `public/resume/Rahul_Prasad_CV_Final.pdf` (see
   `public/resume/README.txt`). Until you do, that link will 404 —
   intentional, rather than faking a working download.
4. **Project GitHub links / live demos** — each project in the `projects`
   array has `github: "#"` and `demo: null`. Replace `"#"` with the real
   repo URL for each project once it's public, and set `demo` to a URL
   string if you have a live/hosted demo (otherwise leave it `null` — the
   Live Demo button only renders when `demo` is set).
5. **Contact form** — `src/components/Contact.jsx` is currently **UI only**;
   submitting it does not send an email anywhere. To make it functional,
   wire it to a service like Formspree (https://formspree.io/) or
   EmailJS (https://www.emailjs.com/) (both have simple client-side
   integrations), or point the `<form>` at your own backend endpoint.
6. **Favicon** — `public/favicon.svg` is the Vite default; swap it for
   your own mark if you'd like.

## Editing content

You should not need to touch component files to update your information —
almost everything (bio text, skills, experience, projects, timeline,
education, certifications) is defined in **`src/data/content.js`**. Open
that file, edit the arrays/objects, and the site updates automatically.

## Editing design tokens

Colors and fonts are defined once in `src/index.css` under the `@theme`
block (Tailwind v4's CSS-first config). Change a hex value there and it
propagates everywhere a `bg-*` / `text-*` / `border-*` utility uses that
token name (e.g. `--color-amber` maps to `bg-amber`, `text-amber`, etc.).

## Notes on content accuracy

This site was built to represent real, current experience only:
- The OSPYN role is presented as an internship, not a full-time job.
- The GITH Advanced Diploma is presented as training, not employment.
- No project includes invented accuracy/performance numbers, fake GitHub
  stars, fake testimonials, or fake company logos.
- The "Enterprise AI Knowledge Assistant" project explicitly separates
  implemented features from in-progress/learning-stage ones.

Keep this pattern when you add new projects or experience later.
