# Quick Setup Guide

## Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Logo** (Optional)
   - Copy your logo image to the `public/` directory
   - Recommended name: `logo.png` or `logo.svg`
   - Update `components/Navigation.tsx` to use the actual logo image if desired

3. **Add Google Maps** (Required for Contact page)
   - Go to Google Maps
   - Search for your academy location
   - Click "Share" → "Embed a map"
   - Copy the iframe code
   - Open `app/contact/page.tsx`
   - Find the placeholder section (around line 60)
   - Replace the placeholder div with the iframe code

4. **Update Contact Information**
   - Open `app/contact/page.tsx`
   - Update phone, email, and address when available

5. **Run Development Server**
   ```bash
   npm run dev
   ```
   - Open http://localhost:3000

## Customization Tips

### Colors
- Gold accents: Edit `tailwind.config.js` → `colors.gold`
- Silver accents: Edit `tailwind.config.js` → `colors.silver`
- Dark theme: Edit `app/globals.css` → background colors

### Content Updates
- **Homepage**: `app/page.tsx`
- **About**: `app/about/page.tsx`
- **Facilities**: `app/facilities/page.tsx`
- **Coaches**: `app/coaches/page.tsx` (update the coaches array)
- **Contact**: `app/contact/page.tsx`

### Adding More Coaches
Edit `app/coaches/page.tsx` and add to the `coaches` array:
```typescript
{
  name: 'Coach Name',
  role: 'Coach Role',
  education: 'Education',
  achievements: ['Achievement 1', 'Achievement 2'],
  highlights: ['Highlight 1', 'Highlight 2'],
}
```

## Production Build

```bash
npm run build
npm start
```

For deployment to Vercel, Netlify, or other platforms, follow their Next.js deployment guides.
