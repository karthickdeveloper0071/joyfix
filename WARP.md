# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
Joy Fix is a Next.js 15.5.3 business website for a software development company specializing in CRM solutions, AI-powered systems, and enterprise applications. The site serves as a marketing and lead generation platform targeting clients in USA, UK, Canada, and Australia.

## Common Development Commands

### Development
```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack 
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

### Package Management
```bash
# Install dependencies
npm install

# Add new dependency
npm install <package-name>

# Add dev dependency
npm install -D <package-name>
```

## Architecture & Structure

### Tech Stack
- **Framework**: Next.js 15.5.3 with App Router
- **Styling**: Tailwind CSS v4 with custom CSS variables and animations
- **Animations**: Framer Motion for page transitions and scroll animations
- **Icons**: Lucide React
- **UI Components**: Headless UI for accessible components
- **Typography**: Geist Sans and Geist Mono fonts from Google Fonts
- **Build Tool**: Turbopack (Next.js built-in)

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage with hero, stats, features
│   ├── about/page.tsx     # Company info, team, mission/vision
│   ├── contact/page.tsx   # Contact form and company details
│   ├── services/page.tsx  # Service offerings with detailed features
│   └── globals.css        # Global styles and Tailwind imports
└── components/
    └── layout/
        ├── Header.tsx     # Navigation with mobile menu and dropdowns
        └── Footer.tsx     # Site footer with links and contact info
```

### Key Architectural Patterns

**Component Architecture**:
- Client Components (`'use client'`) for interactive elements and animations
- Server Components for static content (layout.tsx uses both patterns)
- Responsive design with mobile-first approach
- Reusable motion patterns using Framer Motion

**Styling System**:
- Custom CSS variables for theme colors in `globals.css`
- Gradient utilities and custom button hover effects
- Responsive text sizing with custom media queries
- Accessibility-focused outline styles for keyboard navigation

**Business Logic**:
- Form handling with local state management (contact form)
- Simulated API calls (contact form submission)
- Animation orchestration with staggered delays
- Service data structure for dynamic rendering

### Data Models

**Services Data Structure** (services/page.tsx):
- Each service has: id, icon, title, description, features[], technologies[], color
- Used for dynamic rendering and anchor navigation

**Contact Form Schema**:
- Required: name, email, country, message
- Optional: company, phone, service selection

**Team/Stats Data**:
- Statistics with icon, label, value structure
- Team members with name, role, experience, specialties

## Development Guidelines

### Component Patterns
- Use Framer Motion for page animations with consistent timing (0.6s duration)
- Implement `whileInView` animations with `viewport={{ once: true }}`
- Follow the established gradient color scheme: `from-blue-600 to-purple-600`
- Use Lucide React icons consistently across components

### Styling Conventions
- Responsive grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Consistent spacing: `py-20` for sections, `mb-6` for titles
- Shadow system: `shadow-lg hover:shadow-xl` for cards
- Color palette: Blue-purple gradients for primary actions, gray scales for content

### Performance Considerations
- Uses Turbopack for fast development builds
- Next.js font optimization with Geist fonts
- Image optimization ready (public/ directory structure)
- CSS custom properties for theme consistency

### Form Handling
- Controlled components with local state
- Async form submission simulation
- Success/loading states with appropriate UI feedback
- Form validation and error handling patterns established

## Development Notes

### Animation System
The site uses a sophisticated animation system with Framer Motion:
- Page-level animations on mount
- Scroll-triggered animations with intersection observer
- Staggered animations for lists and grids
- Hover effects and transitions

### Responsive Design
- Mobile-first approach with breakpoint-specific layouts
- Custom mobile navigation with animated dropdown
- Responsive typography scaling
- Touch-friendly interactive elements

### Content Management
- Static content in component files (easily extractable to CMS)
- Structured data for services, team members, and features
- SEO-optimized with proper meta tags and semantic HTML

### Browser Compatibility
- Modern ES2017+ syntax (configured in tsconfig.json)
- CSS Grid and Flexbox layouts
- CSS custom properties with fallbacks
- Progressive enhancement for animations