# Adira Badminton Academy Website

A modern, premium website for Adira Badminton Academy showcasing world-class badminton coaching facilities and expertise.

## Features

- **Home Page**: Hero banner with key features and training programs
- **About Page**: Vision, mission, and academy structure
- **Facilities Page**: Comprehensive showcase of all amenities (8 courts, gym, dormitories, etc.)
- **Coaches Page**: Detailed profiles of expert coaches with achievements
- **Contact Page**: Contact information with Google Maps integration
- **Responsive Design**: Fully responsive across all devices
- **Premium UI**: Dark theme with gold/silver accents matching the academy logo

## Technology Stack

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Modern Design**: Premium dark theme with gradient effects

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── coaches/        # Coaches page
│   ├── contact/        # Contact page
│   ├── facilities/     # Facilities page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Footer.tsx      # Footer component
│   └── Navigation.tsx   # Navigation component
└── public/             # Static assets
```

## Customization

### Adding Google Maps

1. Go to Google Maps and search for your academy location
2. Click "Share" → "Embed a map"
3. Copy the iframe code
4. Replace the placeholder in `app/contact/page.tsx` with the embed code

### Updating Coach Information

Edit the coaches array in `app/coaches/page.tsx` to add or update coach profiles.

### Updating Contact Information

Update contact details in `app/contact/page.tsx` when available.

### Adding Logo Image

1. Place your logo image in the `public/` directory
2. Update the logo references in `components/Navigation.tsx` to use Next.js Image component

## Future Enhancements

- Slot booking system with API integration
- Online registration form
- Tournament schedule and results
- Photo gallery
- News and updates blog

## License

© 2026 Adira Badminton Academy. All rights reserved.
