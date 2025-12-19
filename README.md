# Portfolio Project Page (added)

This directory adds a standalone project portfolio page with a responsive image gallery and a lightbox.

Files:
- `index.html` — the portfolio page (static HTML)
- `css/styles.css` — styles for layout, gallery, and lightbox
- `images/` — place your image files here:
  - recommended naming: `project-1-thumb.jpg`, `project-1-large.jpg`, etc.
  - use smaller thumbnail images for quick gallery load and larger images for the lightbox

How to preview locally:
1. Clone the repo (or checkout the branch where these files are added).
2. Open `index.html` in a browser (no server required). For full feature testing use a local server (e.g., `npx http-server`).

Image recommendations:
- Thumbnails: 800px wide (JPEG/WebP) compressed — used in the grid.
- Large images for lightbox: 1600px width or WebP for better compression.
- Use `loading="lazy"` (already set) to defer offscreen images.

If you'd like, I can:
- Push these files to a new branch in `sharifsagar80/UWA-Agent` (suggested branch: `add-portfolio-page`).
- Or adapt this into a React/Next component or into your existing site structure.
Tell me which option you prefer and whether to push — I'll create the branch and commit the files.
