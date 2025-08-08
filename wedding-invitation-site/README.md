# Wedding Invitation Website

A beautiful, elegant wedding invitation website built with React featuring smooth scroll animations and elegant styling with bright red, emerald green, and ivory color scheme.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Scrolling**: Elegant scroll animations between sections
- **Interactive Navigation**: Fixed navigation dots for easy section jumping
- **Beautiful Animations**: Framer Motion powered animations
- **Elegant Typography**: Google Fonts integration with sophisticated font choices
- **Color Scheme**: Bright red (#DC143C), emerald green (#50C878), and ivory (#FFFFF0)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd wedding-invitation-site
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The website will open at `http://localhost:3000`

## Customization Guide

### 1. Personal Information

Edit `src/App.js` and replace the placeholder text with your information:

- `[Bride Name]` - Replace with the bride's name
- `[Father's Name]` & `[Mother's Name]` - Replace with parents' names
- `[profession/description]` - Add personal descriptions
- `[City]` - Replace with your cities
- `[Date]`, `[Time]`, `[Venue Name]`, `[Full Address]` - Add your wedding event details

### 2. Adding Your Background Image

1. Place your background image in the `public/images/` folder
2. Update the hero section in `src/App.js`:

```javascript
<section className="hero-section" style={{
  backgroundImage: 'linear-gradient(rgba(220, 20, 60, 0.3), rgba(80, 200, 120, 0.3)), url("/images/your-image.jpg")',
  // ... other styles
}}>
```

### 3. Adding Gallery Images

1. Place your gallery images in the `public/images/gallery/` folder
2. Update the gallery section in `src/App.js`

### 4. Customizing Colors

Update the color variables in `src/App.css`:

```css
:root {
  --bright-red: #dc143c;
  --emerald-green: #50c878;
  --ivory: #fffff0;
  --gold: #ffd700;
}
```

## Building for Production

To create a production build:

```bash
npm run build
```

## Technologies Used

- React
- Framer Motion (animations)
- React Intersection Observer (scroll detection)
- CSS3 with CSS Variables
- Google Fonts
- Responsive Design

Enjoy your beautiful wedding website! 💒✨

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
