# Scale-R AI Website

A modern, premium SaaS website for Scale-R AI - Your External AI Department. Built with React, TypeScript, and Tailwind CSS.

## About Scale-R AI

Scale-R AI helps businesses scale smarter through AI integration, process automation, custom software development, and systems optimization. Based in Accra, Ghana, we provide enterprise-grade AI solutions to help you automate processes, optimize systems, and get time back.

## Features

- ✨ **Multi-page React Application** with client-side routing
- 📱 **Fully Responsive Design** - works seamlessly on all devices
- 🎨 **Modern UI/UX** with premium design aesthetics
- 🤖 **ElevenLabs Voice AI Chatbot** - Interactive voice-enabled assistant
- 📝 **Contact Forms** with accessibility features
- 🔒 **Complete Legal Pages** - Privacy Policy, Terms of Service, Cookie Policy
- ♿ **Accessible** - WCAG compliant with ARIA labels
- 🚀 **Performance Optimized** - Fast loading and smooth navigation
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- 📄 **404 Page** - Custom not found page

## Tech Stack

- **React 18.3** - Frontend framework
- **TypeScript 5.7** - Type-safe development
- **Tailwind CSS 4.1** - Utility-first styling
- **React Router 7.11** - Client-side routing
- **Vite 6.3** - Build tool and dev server
- **Lucide React** - Beautiful icon library
- **ElevenLabs** - Voice AI integration

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ScaleR-Sai/scale-r.git
cd scale-r
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Copy environment variables (optional):

```bash
cp .env.example .env
```

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
scale-r/
├── src/
│   ├── app/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/         # Shadcn UI components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Chatbot.tsx
│   │   │   └── ScrollToTop.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── HowWeWork.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── NotFound.tsx (404)
│   │   │   └── legal pages...
│   │   ├── types/          # TypeScript type definitions
│   │   └── App.tsx         # Main app component with routing
│   ├── assets/             # Images and static files
│   ├── styles/             # CSS and theme files
│   └── main.tsx            # Entry point
├── public/                 # Static assets (robots.txt, etc.)
├── .env.example            # Environment variables template
├── index.html              # HTML template with SEO meta tags
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Pages

- **Home (/)** - Landing page with hero, services, and philosophy sections
- **About (/about)** - Company story, mission, vision, and values
- **Services (/services)** - Detailed service offerings with benefits
- **How We Work (/how-we-work)** - Four-phase approach and methodology
- **Contact (/contact)** - Contact form with accessibility features
- **Privacy Policy (/privacy)** - Data privacy and protection information
- **Terms of Service (/terms)** - Legal terms and conditions
- **Cookie Policy (/cookies)** - Cookie usage and management
- **404 Page (\*)** - Custom not found page

## Key Features Implemented

### SEO & Accessibility

- ✅ Comprehensive meta tags (Open Graph, Twitter Cards)
- ✅ ARIA labels and semantic HTML
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ robots.txt file
- ✅ Proper heading hierarchy

### User Experience

- ✅ Smooth scroll to top on route change
- ✅ Mobile menu with escape key support
- ✅ Body scroll lock when mobile menu is open
- ✅ Loading states and form validation
- ✅ Success/error messaging
- ✅ Responsive design for all screen sizes

### Performance

- ✅ Optimized images from Unsplash
- ✅ Code splitting with React Router
- ✅ Vite for fast builds
- ✅ Minimal dependencies

## Customization

### Updating Contact Form

The contact form in [src/app/pages/Contact.tsx](src/app/pages/Contact.tsx) currently simulates submission. To connect to a real backend:

1. Replace the TODO section with your API endpoint
2. Update the fetch call with your backend URL
3. Handle responses appropriately

### Updating Chatbot

The ElevenLabs chatbot agent ID is in [src/app/components/Chatbot.tsx](src/app/components/Chatbot.tsx). To use your own:

1. Sign up at [ElevenLabs](https://elevenlabs.io/)
2. Create a conversational AI agent
3. Replace the `agent-id` in the component

### Changing Colors & Styles

- Primary theme colors are in [src/styles/theme.css](src/styles/theme.css)
- Custom animations are in [src/styles/tailwind.css](src/styles/tailwind.css)
- Tailwind configuration is handled by the @tailwindcss/vite plugin

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Other Platforms

Build the project with `npm run build` and deploy the `dist` folder to any static hosting service.

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_ELEVENLABS_AGENT_ID=your_agent_id_here
```

Note: All environment variables must be prefixed with `VITE_` to be accessible in the frontend.

- **Services** - Detailed service offerings
- **How We Work** - Process and methodology
- **Contact** - Contact form and information
- **Privacy Policy** - Data privacy information
- **Terms of Service** - Legal terms
- **Cookie Policy** - Cookie usage information

## Contact

- **Email**: scaleraigh@gmail.com
- **Phone**: +233 53 561 4913
- **Location**: Accra, Ghana

## License

© 2025 Scale-R AI. All rights reserved.
