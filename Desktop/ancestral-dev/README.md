# Ancestral Development — site

A black-and-white, minimalist marketing site built with React, TypeScript, Tailwind CSS, and shadcn-style components.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Static output lands in `dist/` — upload that folder to any static host (Vercel, Netlify, Cloudflare Pages, S3, etc.).

## Structure

- `src/components/ui/` — shadcn-style primitives (button, card, badge, separator, accordion)
- `src/components/` — page sections: Navbar, Hero, Services, Process, About, Contact, Footer
- `src/components/LineageMark.tsx` — the signature branching-line graphic (reads as both a family tree and a version-control branch graph)
- `src/index.css` — design tokens (all grayscale) and global styles

## Content

Copy is drafted from Ancestral Development's existing tagline (desktop apps, Android apps, Minecraft Spigot plugins). Update these before launch:

- `hello@ancestraldev.com` in `Contact.tsx` — swap for the real inbox
- The contact form currently just shows a "Sent" state — wire it to your form backend or email service (Formspree, Resend, etc.) of choice
- `About.tsx` — the tech badges are a guess; adjust to your actual stack
