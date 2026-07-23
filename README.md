# Najwa Almutairi — Interactive Portfolio

A premium single-page interactive portfolio built with **React, Vite, Tailwind CSS and Framer Motion**, designed for deployment to **GitHub Pages**.

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`). The site is fully functional even before any real images are added — every missing image shows a polished placeholder naming the file it expects.

Build for production:

```bash
npm run build
npm run preview   # test the production build locally
```

---

## 2. Deploy to GitHub Pages

1. Create a new GitHub repository (any name works — see below).
2. Push this project to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`.
5. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`.

### Changing the repository name

Nothing else needs to change. The project uses a **relative base path** (`base: './'` in `vite.config.js`), so it works under any repository name automatically. Just rename the repo in GitHub settings and the next deployment will work.

### Connecting a custom domain later

1. In **Settings → Pages → Custom domain**, enter your domain (e.g. `najwa.me`).
2. At your domain registrar, add a `CNAME` record pointing to `YOUR-USERNAME.github.io`.
3. GitHub creates a `CNAME` file automatically; keep it in the repo.
4. Enable **Enforce HTTPS** once the certificate is ready (usually within an hour).

---

## 3. How to Replace Images and Logos

Every image on the site is a **placeholder that displays its expected filename** (e.g. "Add image: knowledge-hub-01.png").

To replace any placeholder: **upload a file with the exact same filename into the matching folder** under `public/images/`. No code changes needed.

```
public/
  documents/
  images/
    profile/                      ← profile-photo.jpg, contact-photo.jpg, og-preview.png
    projects/                     ← knowledge-hub-01.png … dq-office-move-04.png
    communication/                ← ramadan-iftar-01.png … employee-engagement-03.png
    certificates/                 ← prosci-certificate.jpg, pmp-certificate.jpg, …
    education/                    ← effat-university-logo.png
    tools/                        ← canva-logo.png, copilot-logo.png, …
    logos/                        ← any extra brand logos
```

Tips:

- **Logos and certificates** display with `object-contain` and are never cropped — any aspect ratio works.
- **Profile photos** display with `object-cover` — use portrait images (roughly 4:5) for best results.
- To rename an image, update the matching path in `src/data/portfolioData.js`.
- `og-preview.png` (in `images/profile/`) is the preview image shown when the link is shared on LinkedIn — a 1200×630 image works best.

---

## 4. Editing portfolio content

**All text lives in one file:** `src/data/portfolioData.js`

You can edit, without touching any component:

- Name, headline, positioning and hero text
- The personal introduction ("Hi Muhammad, …")
- Why Marketing paragraphs (wrap a phrase in `*asterisks*` to highlight it with an animated underline)
- The four strength cards
- All projects, contributions and gallery labels
- Communication examples
- The experience timeline
- Education, certifications and their descriptions
- Tool categories and logo cards
- Professional capabilities tags
- The fit comparison lists
- The personal note and contact details

**Certificate titles:** two certificates (`Microsoft Business Analyst Certification` and `Power BI Certification`) should be updated to match the exact official titles once the real certificate images are added — there are comments marking them in the data file.

---

## 5. Updating contact links

In `src/data/portfolioData.js`, find the `contact` object and replace the placeholders:

```js
export const contact = {
  linkedin: '[ADD LINKEDIN URL]',   // e.g. 'https://www.linkedin.com/in/your-profile'
  email: '[ADD EMAIL]',             // e.g. 'name@example.com'
  phone: '[ADD PHONE NUMBER]',      // e.g. '+966 5X XXX XXXX'
}
```

Until real values are added, the LinkedIn and Email buttons stay on the page without navigating anywhere broken.


---

## 6. ⚠️ Privacy and confidentiality — read before publishing

GitHub Pages sites are **public**. Before publishing any screenshots or documents:

- Remove employee names
- Blur email addresses
- Remove phone numbers
- Remove financial values
- Remove job IDs
- Remove confidential project information
- Remove internal system links
- Remove document classification labels such as **Confidential** or **Restricted**
- Do **not** publish full internal documents
- Use selected, **anonymized excerpts only**

When in doubt, crop tighter or leave the placeholder in place.

---

## 7. Project structure

```
src/
  data/portfolioData.js        ← ALL content (edit here)
  hooks/useTheme.js            ← light/dark mode with localStorage
  components/
    Navbar.jsx                 ← sticky nav + mobile menu
    HeroSection.jsx            ← split hero with organic portrait
    AboutSections.jsx          ← intro, Why Marketing, strengths cards
    ProjectsSection.jsx        ← featured projects + gallery modal
    CommunicationAndTimeline.jsx
    EducationSection.jsx       ← degree + certificates + lightbox
    SkillsSections.jsx         ← toolkit tabs + capabilities tags
    ClosingSections.jsx        ← fit comparison, note, contact, footer
    Shared.jsx                 ← SmartImage, lightbox, headings, toggles
```

Built-in quality features: light/dark mode, scroll progress bar, back-to-top, keyboard-navigable lightbox, reduced-motion support, lazy-loaded images, error-safe image fallbacks, SEO + Open Graph metadata, custom 404 page.
