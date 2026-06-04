# StudySync Accessibility & Inclusive Design Guide

StudySync is built with accessibility as a first-class feature, ensuring all students can effectively manage their studies regardless of their abilities.

## Audio Features (Text-to-Speech)

### How to Use Audio
1. Look for the speaker icon (🔊) on any page title
2. Click the icon to hear the content read aloud
3. Audio will play automatically in your selected language
4. Visual feedback shows when audio is playing (pulsing effect)
5. Click again to stop playback, or it will stop automatically when finished

### Supported Languages
- **English**: Natural US English pronunciation
- **Portuguese**: Brazilian Portuguese (pt-BR)
- **Changana**: Mozambican Portuguese (pt-MZ) for cultural authenticity

### Audio Benefits
- **Learning Diversity**: Supports auditory learners
- **Multisensory Learning**: Combines visual and audio information
- **Accessibility**: Helps users with reading difficulties (dyslexia)
- **On-the-Go Learning**: Listen while commuting or doing other activities
- **Pronunciation Guide**: Learn correct pronunciation in your language

## Visual Accessibility

### High Contrast Mode
- **Toggle Button**: Click the accessibility icon (♿) in the top-right corner
- **Benefits**: Easier to read for users with low vision or color blindness
- **Active State**: Button highlights when high contrast is enabled
- **Persistent**: Mode remains active during your session

### Color Contrast
- All text meets WCAG AA standards (4.5:1 ratio for normal text)
- Information is never conveyed by color alone
- Color-coding is supplemented with icons and labels
- Links are underlined in addition to color distinction

### Typography
- **Readable Fonts**: DM Sans for excellent readability
- **Font Size**: Minimum 14px for body text
- **Line Height**: 1.5 to 1.6 for comfortable reading
- **Letter Spacing**: Optimized for dyslexia-friendly reading

## Screen Reader Support

### Skip Link
- **Purpose**: Bypass navigation to jump to main content
- **Activation**: Use Tab key at page load or press Enter on "Skip to main content" link
- **Benefit**: Saves time for screen reader users

### Semantic HTML
- Proper heading hierarchy (H1, H2, H3, etc.)
- Landmark elements (&lt;main&gt;, &lt;nav&gt;, &lt;aside&gt;)
- Form labels associated with inputs
- List structures for grouped content

### ARIA Labels
All interactive elements have:
- Descriptive button labels
- Form input associations
- Dynamic status announcements
- Region landmarks identified

## Keyboard Navigation

### Full Keyboard Support
- **Tab Key**: Navigate between interactive elements
- **Shift + Tab**: Navigate backwards
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals and dialogs
- **Arrow Keys**: Navigate lists and dropdowns

### Focus Indicators
- Clear, visible focus rings on all interactive elements
- High contrast focus states for visibility
- Focus order follows logical page flow
- No keyboard traps preventing escape

## Mobile Accessibility

### Touch Targets
- **Minimum Size**: 44px × 44px for all buttons
- **Spacing**: 12px minimum spacing between targets
- **Error Prevention**: Confirmation for destructive actions
- **Responsive**: Adapts to different screen sizes

### Mobile Screen Readers
- **iOS VoiceOver**: Fully supported
- **Android TalkBack**: Fully supported
- **Gesture Navigation**: Works with screen reader gestures
- **Mobile-Specific Labels**: Touch-friendly announcements

## Language Accessibility

### Changana Language (Xichangana)
StudySync uses authentic Mozambican Changana, not machine-translated text:
- **Cultural Sensitivity**: Respects local language norms
- **Proper Terminology**: Authentic academic and study-related terms
- **Regional Accuracy**: Mozambique-specific pronunciation guides
- **Community Support**: Developed with native speakers

### Portuguese (Português)
- **Brazilian Portuguese**: pt-BR for audio pronunciation
- **Proper Translations**: Not literal word-for-word translations
- **Cultural Context**: Respects Portuguese-speaking traditions

### English
- **Clear English**: Simple, accessible language
- **No Jargon**: Technical terms explained when necessary
- **Logical Structure**: Organized for easy comprehension

## Inclusive Design Principles

### Universal Design
1. **Equitable Use**: Designed for users of all abilities
2. **Flexible Use**: Works for left-handed and right-handed users
3. **Simple & Intuitive**: Easy to understand without training
4. **Perceptible Information**: Provided in multiple modalities
5. **Error Tolerance**: Prevents and recovers from errors
6. **Low Physical Effort**: Minimizes repetitive actions
7. **Size & Space**: Appropriate for various user needs

### Cognitive Accessibility
- **Clear Navigation**: Consistent menu structure
- **Predictable Behavior**: Users know what will happen
- **Helpful Errors**: Clear error messages with solutions
- **Chunked Content**: Information in digestible sections
- **Progress Indicators**: Shows where user is in process

## Assistive Technology Support

### Tested With
- **NVDA** (Windows screen reader)
- **JAWS** (Windows screen reader)
- **VoiceOver** (macOS/iOS screen reader)
- **TalkBack** (Android screen reader)
- **Voice Control** (macOS/iOS voice control)
- **Switch Control** (iOS alternative input)

### Browser Extensions
- Fully compatible with accessibility browser extensions
- Works with color enhancement extensions
- Supports text enlargement tools
- Compatible with reading mode extensions

## Accessibility Checklist

### What We've Implemented ✅
- [x] Text-to-speech audio on all page titles
- [x] High contrast mode toggle
- [x] Skip to main content link
- [x] Semantic HTML structure
- [x] ARIA labels and attributes
- [x] Keyboard navigation support
- [x] Focus indicators on all elements
- [x] Proper heading hierarchy
- [x] Form label associations
- [x] Error prevention and recovery
- [x] Touch target sizing (44px minimum)
- [x] Color contrast compliance (WCAG AA)
- [x] Mobile screen reader support
- [x] Three language support with proper translations
- [x] Responsive design for all devices

## Testing Accessibility

### Test Text-to-Speech
1. Navigate to any page (Dashboard, Tasks, Subjects, Resources)
2. Click the speaker icon (🔊)
3. Verify audio plays in your selected language
4. Listen for natural pronunciation

### Test High Contrast
1. Click the accessibility icon (♿)
2. Verify colors are more distinct
3. Verify text is still readable
4. Click again to return to normal mode

### Test Keyboard Navigation
1. Press Tab repeatedly to navigate
2. Verify focus is always visible
3. Test form completion with keyboard only
4. Press Escape to close any dialogs

### Test Screen Reader
1. Download and enable NVDA (Windows) or VoiceOver (Mac)
2. Navigate the page with screen reader
3. Verify all content is announced
4. Test form submission and confirmations

## Reporting Accessibility Issues

Found an accessibility problem? Please report it:
1. **GitHub Issues**: Open an issue on our repository
2. **Email**: Include specific steps to reproduce
3. **Screen Reader Used**: Mention which assistive technology
4. **Browser & OS**: Include your browser and operating system
5. **Expected vs. Actual**: Describe what should happen vs. what happened

## Resources

### Learn More
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Accessibility Initiative](https://www.w3.org/WAI/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Accessible Design at 18F](https://accessibility.18f.gov/)

### Assistive Technologies
- [NVDA Screen Reader](https://www.nvaccess.org/)
- [JAWS Screen Reader](https://www.freedomscientific.com/products/software/jaws/)
- [ChromeVox](https://chromewebstore.google.com/detail/chromevox-classic/gaopbnaggncdfeohmnbowendodnebajp)

## Commitment to Accessibility

StudySync is committed to being accessible to all users. We:
- Regularly test with assistive technologies
- Gather feedback from users with disabilities
- Update features based on accessibility research
- Train our team on inclusive design
- Maintain WCAG 2.1 AA compliance

---

**Last Updated**: June 2026
**Version**: 1.0

For questions about accessibility, please reach out to our team.
