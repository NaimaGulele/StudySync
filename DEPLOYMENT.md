# StudySync - Deployment & Installation Guide

## What's Included

StudySync is a fully functional, accessible, multilingual student study planner with PWA (Progressive Web App) capabilities that works on all devices.

### Features Implemented

1. **Three Languages Supported**
   - English (EN)
   - Portuguese (PT)
   - Changana (CH) - From Mozambique

2. **Accessibility Features**
   - WCAG 2.1 compliant
   - Screen reader support
   - Keyboard navigation
   - High contrast mode support
   - Reduced motion support
   - Skip-to-content link
   - Proper ARIA labels

3. **Mobile Responsive**
   - Works perfectly on all screen sizes
   - Touch-friendly interface
   - Optimized for phones, tablets, and desktop
   - Tested on iPhone 14, Android devices, and desktop browsers

4. **Progressive Web App (PWA)**
   - Install as app on Android devices
   - Install as app on iOS devices (via "Add to Home Screen")
   - Works offline with Service Worker
   - Native app-like experience
   - Standalone display mode

5. **No Dependencies**
   - Pure HTML/CSS/JavaScript
   - No npm packages required
   - No build process needed
   - Works in any web server

## Installation Methods

### Method 1: Direct File Access (Simplest)
Just open `index.html` in your web browser:
```
Open: file:///path/to/StudySync/index.html
```

### Method 2: Local Web Server (Recommended for PWA)
```bash
# Using Python 3
python3 -m http.server 3000

# Using Node.js
npx http-server -p 3000

# Using PHP
php -S localhost:3000
```
Then visit: http://localhost:3000

### Method 3: Deploy to Vercel (Production)
```bash
# Push to your GitHub repo
git push origin main

# Go to vercel.com and connect your repo
# Automatic deployments on every push
```

## How to Install as App

### On Android
1. Open the app in Chrome/Edge browser
2. Tap the menu (three dots) → "Install app"
3. Tap "Install"
4. App appears on your home screen

### On iOS (iPhone/iPad)
1. Open the app in Safari browser
2. Tap Share button (bottom center)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" in top right
5. App appears on your home screen

### On Mac/Windows
1. Open the app in Chrome/Edge browser
2. Click the Install icon in the address bar
3. Click "Install"
4. App opens in standalone window

## File Structure

```
StudySync/
├── index.html          # Main app (all UI)
├── manifest.json       # PWA configuration
├── sw.js              # Service Worker (offline support)
├── css/
│   └── style.css      # All styling & responsive design
├── js/
│   └── app.js         # All functionality & translations
└── DEPLOYMENT.md      # This file
```

## Key Features Explained

### Language Switching
Click the language buttons (EN, PT, CH) at the top left to switch languages instantly. All text updates in real-time.

### Add Tasks
- Click "+ Add Task" button
- Fill in task name, subject, due date, and priority
- Tasks appear in your dashboard and task list

### Manage Subjects
- Create study subjects (e.g., Mathematics, History)
- Track progress and tasks per subject
- Color-coded for easy organization

### Add Resources
- Save links to study materials
- Add notes and PDFs
- Organize by subject

### Edit Profile
- Click "Edit Profile" (top left)
- Add your name, email, and bio
- Data saved locally in browser

### Responsive Design Features
- **Mobile**: Single column, touch-friendly buttons, horizontal navigation
- **Tablet**: Two-column layout, optimized spacing
- **Desktop**: Full layout with sidebar and main content area

### Accessibility Features
- **Keyboard Navigation**: Use Tab to move between elements, Enter to activate
- **Screen Readers**: All content properly labeled with ARIA attributes
- **High Contrast Mode**: Automatically activates on Windows High Contrast
- **Reduced Motion**: Respects prefers-reduced-motion preference
- **Focus Indicators**: Clear blue outlines on focused elements

## Data Storage

All data is stored locally in your browser using localStorage:
- Tasks and subjects persist when you close the app
- Data is private to your device
- No server connection needed for basic functionality

## Browser Support

- Chrome/Edge: ✅ Full support including PWA install
- Firefox: ✅ Full support (PWA install via add-on)
- Safari: ✅ Full support (PWA via "Add to Home Screen")
- All modern browsers: ✅ Supported

## PWA Capabilities

When installed as an app:
- Standalone window without browser chrome
- Offline access to previously viewed content
- Fast loading from cache
- Push notifications (future feature)
- Home screen icon with app name
- Splash screen on launch
- Native app store compatible

## Troubleshooting

### Install button not appearing?
- Make sure you're using HTTPS (required for PWA)
- On iOS, use Safari browser
- On Android, use Chrome/Edge browser
- For localhost, install prompt still works

### Data not saving?
- Check browser's localStorage settings
- Some private browsing modes disable localStorage
- Clear browser cache and reload

### App looks small on phone?
- Check viewport settings in browser
- Pinch to zoom if needed (app is responsive)
- Rotate phone to see landscape layout

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Media Queries, CSS Variables
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **Service Worker API**: Offline functionality
- **Web App Manifest**: PWA installation
- **localStorage API**: Data persistence

## Future Enhancements

- Cloud sync for multiple devices
- Collaborative study groups
- AI-powered study recommendations
- Push notifications
- Dark mode toggle
- Export to PDF/Calendar
- Time tracking for study sessions

## License & Credits

StudySync - A Student Study Planner
Developed for accessibility and mobile-first design

---

**Ready to use!** Just open the app in your browser and start planning your studies.
