# Lakshman Velaga — Portfolio v2

A responsive React + Vite portfolio with:
- Refined light mode as the default theme
- Dark mode toggle with saved preference
- Animated role typing effect
- About, Experience, Projects and Contact sections
- Resume PDF included at `/resume.pdf`
- Responsive desktop and mobile navigation
- Approved professional suit portrait integrated into the responsive hero portrait frame

## Run locally

1. Extract the ZIP.
2. Open the `lakshman-portfolio` folder in VS Code.
3. Open a terminal in the folder containing `package.json`.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL Vite prints, usually `http://localhost:5173`.

Production check:

```bash
npm run build
npm run preview
```

## Before public launch

- The approved professional suit portrait is stored at `src/assets/lakshman-portrait-placeholder.jpg`. Its crop is controlled by the `.portrait-card img` rule in `src/styles.css`.
- Review all experience wording and confirm role details.
- Add actual GitHub repository and live deployment URLs for Movie Explorer and Recipe Finder after source review.
- Confirm the 20% internship performance improvement claim and be ready to explain the measurement.
- Verify the satellite project's reported accuracy and processing-time improvements before presenting those metrics in an interview. They are intentionally not used as headline claims in this version.
- Confirm the skill labels reflect what you can confidently explain in an interview.

## Notes

Movie Explorer and Recipe Finder are listed as projects based on the user's described work, but their source folders and deployed builds have not yet been reviewed. Links are intentionally left pending rather than fabricated.

Keep API keys out of public source code. Use environment variables and provider-side restrictions where applicable.


## Portfolio V1 scroll effects
- Scroll reveals use the browser's `IntersectionObserver`; no animation library is required.
- Sections and cards fade in with a small upward movement as they enter the viewport.
- Project and skill cards use a subtle stagger delay.
- `prefers-reduced-motion` is respected for accessibility.
- Featured projects: KFC Landing Page, Movie Explorer, and Recipe Finder.
