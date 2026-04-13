# Griffin Davis Personal Website

Minimal one-page personal site built with Next.js App Router, TypeScript, CSS Modules, and global CSS.

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Keep the default Next.js settings and deploy.

## Update content and links

- Homepage structure and section content: `app/page.tsx`
- Header links: `components/Header.tsx`
- Experience entries: `components/ExperienceList.tsx`
- Contact links: `components/ContactBlock.tsx`
- Global theme, spacing, typography: `app/globals.css`
- Component-level styles: `components/*.module.css`
- Resume file served at `/resume.pdf`: `public/resume.pdf`
