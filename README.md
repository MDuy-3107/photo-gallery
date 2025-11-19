# Picsum Photo Gallery

A beautiful, modern photo gallery web application built with React, TypeScript, and Tailwind CSS. This app fetches and displays photos from the Lorem Picsum API with infinite scrolling and detailed photo views.

## Features

- 📸 **Photo Grid**: Responsive grid layout displaying photos in elegant cards
- ♾️ **Infinite Scroll**: Automatically loads more photos as you scroll down
- 🎨 **Modern Dark UI**: Sleek dark theme with smooth animations and hover effects
- 🔍 **Photo Details**: Detailed view with photo information and full-size image access
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎯 **TypeScript**: Fully typed for better developer experience and code safety

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lorem Picsum API** - Source for beautiful photos

## Project Structure

```
photo-gallery/
├── src/
│   ├── api/
│   │   └── picsum.ts              # API service for Lorem Picsum
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.tsx         # Header component
│   │   │   └── Layout.tsx         # Main layout wrapper
│   │   └── PhotoCard.tsx          # Photo card component for grid
│   ├── hooks/
│   │   └── useInfinitePhotos.ts   # Custom hook for infinite scrolling
│   ├── routes/
│   │   ├── PhotosList.tsx         # Main photo list page
│   │   └── PhotoDetail.tsx        # Photo detail page
│   ├── styles/
│   │   └── global.css             # Global styles and Tailwind
│   ├── App.tsx                    # Main app component with routes
│   └── main.tsx                   # Application entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**

```powershell
cd "c:\Users\ADMIN\OneDrive - VNU-HCMUS\HK7\WAD\W07\photo-gallery"
```

2. **Install dependencies:**

```powershell
npm install
```

This will install all required dependencies including React, React Router, Tailwind CSS, and development tools.

### Development

To start the development server:

```powershell
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is busy).

The dev server includes:
- Hot Module Replacement (HMR)
- Fast refresh for instant updates
- TypeScript type checking

### Building for Production

To create an optimized production build:

```powershell
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```powershell
npm run preview
```

## Usage

### Photo List Page (`/photos`)

- Browse through a grid of beautiful photos
- Scroll down to automatically load more photos (infinite scroll)
- Click on any photo card to view details
- Hover over cards to see smooth lift animations

### Photo Detail Page (`/photos/:id`)

- View a large, responsive version of the selected photo
- See photo metadata: author, dimensions, description
- Click "View original" to open the full-size image in a new tab
- Use "← Back to Photos" link to return to the gallery

## API

This app uses the official Lorem Picsum API:

- **List photos**: `https://picsum.photos/v2/list?page={page}&limit={limit}`
- **Photo details**: `https://picsum.photos/id/{id}/info`
- **Photo URLs**: `https://picsum.photos/id/{id}/{width}/{height}`

## Customization

### Colors

Edit `tailwind.config.js` to customize the dark theme colors:

```javascript
colors: {
  'dark-bg': '#050b1f',      // Page background
  'dark-card': '#0f172a',    // Card background
  'dark-card-hover': '#1e293b', // Card hover state
}
```

### Photos Per Page

Adjust the `limit` parameter in `useInfinitePhotos` hook:

```typescript
const { photos, loading, error, hasMore, sentinelRef } = useInfinitePhotos(30); // Change 30 to desired limit
```

### Grid Columns

Modify the grid classes in `PhotosList.tsx`:

```typescript
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for educational purposes.

## Acknowledgments

- Photos provided by [Lorem Picsum](https://picsum.photos/)
- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Happy coding! 🚀**
