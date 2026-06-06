# StudySync

StudySync is a small static study planner web app. This repository is pre-configured to deploy to GitHub Pages.

Quick start

1. Ensure the repository is pushed to GitHub (this repo already has changes pushed).
2. GitHub Actions will build and publish the site automatically when you push to `main`.

Icons

- The app includes `icons/icon.svg` as the primary logo.
- For best results on Android and iOS add raster PNG icons at `icons/icon-192.png` and `icons/icon-512.png`.

The repo includes a Node helper to generate PNG icons automatically using `sharp`.

Run these commands locally to generate the icons:

```bash
npm install
npm run icons
```

This will create `icons/icon-192.png` and `icons/icon-512.png` from `icons/icon.svg`.

After generating and committing the PNGs, push to GitHub; GitHub Pages serves over HTTPS and Chrome on Android will offer installation (iOS requires Safari Add to Home Screen).

Notes about install behavior

- The site must be served over HTTPS for the browser to offer installation.
- iOS requires the user to use Safari's "Add to Home Screen" action; full PWA support is limited on older iOS versions.
