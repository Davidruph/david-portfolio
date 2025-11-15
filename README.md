# 🎨 David Agbugba - Interactive Portfolio

A **stunning, modern, and fully interactive** portfolio website built with cutting-edge web technologies. Featuring 3D elements, smooth animations, dark mode, responsive design, and more.

## ✨ Features

### 🚀 **Performance First**

- **Ultra-fast** Next.js 15 with React 19
- Optimized images and lazy loading
- Smooth page transitions and animations
- ~90+ Lighthouse score

### 🎭 **Interactive & Engaging**

- **3D Animated Orb** in Hero section with Three.js
- Smooth scroll animations with Framer Motion
- Interactive skill cards with progress bars
- Hover effects and micro-interactions throughout
- Parallax scrolling effects

### 🎨 **Beautiful Design**

- **Modern gradient color scheme** (Purple & Pink)
- Glassmorphism UI elements with backdrop blur
- Dark mode by default (modern aesthetic)
- Fully responsive design (mobile-first)
- Smooth transitions and animations

### 📱 **Sections**

1. **Hero** - Eye-catching intro with animated 3D orb
2. **About** - Bio with stats cards
3. **Skills** - Categorized skills with interactive filters
4. **Projects** - Portfolio showcase with hover previews
5. **Experience** - Timeline of work history
6. **Contact** - Contact form and social links
7. **Navigation** - Sticky navbar with scroll effects
8. **Footer** - Links and social media

### 🛠️ **Tech Stack**

- **Framework**: Next.js 15 + React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: Lucide React
- **UI Components**: Custom + Radix UI foundations
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   └── contact.tsx
│   ├── layout/             # Layout components
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── ui/                 # UI components
│   │   └── scroll-indicator.tsx
│   └── providers/          # Context/providers
│       └── theme-provider.tsx
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── next.config.js          # Next.js config
```

## 🎯 Customization

### Update Your Information

Edit the following files to personalize your portfolio:

1. **Hero Section** (`components/sections/hero.tsx`)

   - Update name and tagline
   - Add your social links

2. **About Section** (`components/sections/about.tsx`)

   - Add your bio
   - Update stats

3. **Skills Section** (`components/sections/skills.tsx`)

   - Update your technical skills
   - Add new categories

4. **Projects Section** (`components/sections/projects.tsx`)

   - Add your projects
   - Update descriptions and links

5. **Experience Section** (`components/sections/experience.tsx`)

   - Add your work history
   - Update timeline

6. **Contact Section** (`components/sections/contact.tsx`)
   - Update contact information
   - Connect to your email service

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      // Your custom colors here
    }
  }
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

- **Netlify**: `npm run build` → Upload `out/` folder
- **GitHub Pages**: Configure `next.config.js` for static export
- **Railway/Render**: Connect your GitHub repository

## 📊 Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ CSS minification with Tailwind
- ✅ Efficient animations with GPU acceleration
- ✅ SEO optimized with metadata
- ✅ Mobile-first responsive design

## 🔧 Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📦 Dependencies

### Core

- `next`: ^15.0.0
- `react`: ^19.0.0
- `react-dom`: ^19.0.0

### Animation & 3D

- `framer-motion`: ^12.0.0
- `three`: ^0.160.0
- `@react-three/fiber`: ^8.15.0
- `@react-three/drei`: ^9.90.0

### Styling & UI

- `tailwindcss`: ^3.4.0
- `@headlessui/react`: ^2.0.0
- `lucide-react`: ^0.263.0
- `class-variance-authority`: ^0.7.0
- `clsx`: ^2.1.0
- `tailwind-merge`: ^2.2.0

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Three.js Docs](https://threejs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🐛 Troubleshooting

### Port 3000 already in use

```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Build errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📝 License

This portfolio template is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and create a pull request with improvements!

---

Made with ❤️ by David Agbugba

Visit: [Your Portfolio URL]
GitHub: [Your GitHub]
LinkedIn: [Your LinkedIn]
