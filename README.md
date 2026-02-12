# Datalyica - Business Analytics Consulting Website

A professional business analytics consulting website built with React, Tailwind CSS, and Vite.

## Features

- **Modern Design**: Clean, minimal design inspired by Tailwind CSS aesthetic
- **Fully Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized with Vite for lightning-fast load times
- **Accessible**: Built with WCAG 2.1 AA compliance in mind
- **SEO Friendly**: Semantic HTML and proper meta tags

## Tech Stack

- **React 18**: Modern React with functional components and hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory, ready to deploy to any static hosting service.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Navigation.jsx
│   ├── Section.jsx
│   └── ServiceCard.jsx
├── pages/              # Page components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Portfolio.jsx
│   └── Services.jsx
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Deployment

This site can be deployed to any static hosting service:

- **Vercel**: Connect your Git repository or run `vercel` in the project directory
- **Netlify**: Connect your Git repository or drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions or deploy the `dist` folder
- **AWS S3 + CloudFront**: Upload the `dist` folder to S3 and configure CloudFront

## Customization

### Updating Contact Information

Edit the contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

### Updating Content

All content is in the page components:
- `src/pages/Home.jsx` - Homepage content
- `src/pages/About.jsx` - About page content
- `src/pages/Services.jsx` - Services page content
- `src/pages/Portfolio.jsx` - Case studies and portfolio
- `src/pages/Contact.jsx` - Contact form and information

### Styling

The design system uses Tailwind CSS. Key design tokens:
- Primary color: `blue-600`
- Text colors: `slate-900`, `slate-700`, `slate-600`
- Backgrounds: `white`, `slate-50`
- Borders: `slate-200`, `slate-300`

## Form Submission

The contact form currently uses a simulated submission. To connect to a real backend:

1. Update the `handleSubmit` function in `src/pages/Contact.jsx`
2. Replace the setTimeout with an actual API call
3. Consider using services like:
   - Formspree
   - Netlify Forms
   - EmailJS
   - Custom backend API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2024 Datalyica. All rights reserved.
