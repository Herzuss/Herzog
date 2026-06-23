<h1 align="center">HerzogWeb</h1>

<p align="center">
  Business & portfolio site for <b>HerzogWeb</b> — a freelance frontend studio building fast, modern websites for clients.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/license-proprietary-red?style=flat" alt="License" />
</p>

<p align="center">
  <a href="https://herzogweb.pl"><b>🔗 Live → herzogweb.pl</b></a>
</p>


<p align="center">
  <img src="./public/HERO SCREENSHOT.png" alt="HerzogWeb preview" width="800" />
</p>

---

## About

**HerzogWeb** is the brand under which I work as a freelance frontend developer, building websites and web apps for clients. This repository contains the source of the studio's own business site — the place where clients land, see what I do, and get in touch.

It's also a portfolio piece in its own right: the goal was a clean, fast, fully responsive marketing site built with a modern production stack.

## Features

- 🎨 **Modern, responsive UI** — looks sharp on mobile and desktop, built with TailwindCSS
- ⚡ **Fast by default** — server rendering, image optimization and good Core Web Vitals via Next.js
- 🔍 **SEO-ready** — proper metadata, semantic markup and Open Graph tags
- 📬 **Contact form** for client inquiries <!-- TODO: adjust to how you actually handle submissions (email API / form service) -->
- 🧩 **Sections for services & portfolio** showcasing past work <!-- TODO: tweak to match your real sections -->

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS |
| Hosting | Vercel |
| Animation | Framer Motion |
| E-mail| Resend |

<!-- TODO: add anything else you actually use — CMS, animation lib (Framer Motion?), analytics, email service -->

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
git clone https://github.com/Herzuss/herzogweb.git
cd herzogweb
npm install
```

### Environment variables

If the site uses a contact form or analytics, create a `.env.local` file:

```env
RESEND_API_KEY=...
```

> ⚠️ Keep `.env*` in `.gitignore`. If any key was ever committed in the past, it still lives in git history — rotate it or scrub the history before this repo is public.

### Run locally

```bash
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

## Deployment

Deployed on **Vercel**, connected to this repository for automatic deployments on push to `main`. Set the same environment variables in the Vercel project settings.

## License

This project is **proprietary**. The source is public for portfolio and evaluation purposes only — you may view it, but not use, copy, modify, or redistribute it. See [LICENSE](./LICENSE) for details.

## Contact

**Filip** — Frontend Developer
🌐 [herzogweb.pl](https://herzogweb.pl) · ✉️ filip.herzog05@gmail.com
