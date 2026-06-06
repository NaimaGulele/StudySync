# StudySync

StudySync is a small static study planner web app. This repository is pre-configured to deploy to GitHub Pages.

Quick start

1. Ensure the repository is pushed to GitHub (this repo already has changes pushed).
2. GitHub Actions will build and publish the site automatically when you push to `main`.

Icons

- The app includes `icons/icon.svg` as the primary logo.
- For best results on Android and iOS add raster PNG icons at `icons/icon-192.png` and `icons/icon-512.png`.

You can generate these using ImageMagick locally:

```bash
magick convert icons/icon.svg -resize 192x192 icons/icon-192.png
magick convert icons/icon.svg -resize 512x512 icons/icon-512.png
```

After adding the PNG icons, commit and push; Chrome on Android will offer an install prompt (or use the in-app install banner).

Notes about install behavior

- The site must be served over HTTPS for the browser to offer installation.
- iOS requires the user to use Safari's "Add to Home Screen" action; full PWA support is limited on older iOS versions.
