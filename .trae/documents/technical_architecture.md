# Technical Architecture Document - Mármores e Granitos Website

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS for utility-first responsive design
- **State Management**: Zustand for lightweight state management
- **Routing**: React Router DOM v6 for client-side navigation
- **Icons**: Lucide React for consistent icon system

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── ui/            # Basic UI components (Button, Card, etc.)
│   └── sections/      # Page-specific sections
├── pages/              # Page components
│   ├── Home.tsx       # Homepage
│   ├── Serraria.tsx   # Cutting services page
│   ├── Chapas.tsx     # Slabs page
│   ├── Recortado.tsx  # Custom cutting page
│   └── Contact.tsx    # Contact page
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── data/               # Static data and content
└── assets/             # Images and static assets
```

### Component Architecture
- **Atomic Design**: Components built with atomic design principles
- **Composition Pattern**: Favor component composition over inheritance
- **Single Responsibility**: Each component has one specific purpose
- **TypeScript**: All components written with TypeScript for type safety

### State Management Strategy
- **Zustand Store**: Global state for navigation and UI state
- **Local State**: Component-level state using useState and useReducer
- **Props Drilling**: Avoided through proper component composition

### Routing Architecture
- **Client-Side Routing**: Single Page Application (SPA) approach
- **Route Structure**:
  - `/` - Homepage
  - `/serraria` - Cutting services
  - `/chapas` - Slabs catalog
  - `/recortado` - Custom cutting
  - `/contato` - Contact page

### Design System
- **Color Palette**: Neutral tones reflecting stone materials
  - Primary: Slate gray tones (#64748b, #475569)
  - Secondary: Warm earth tones (#a3a3a3, #d6d3d1)
  - Accent: Professional blue (#3b82f6)
  - Background: Clean whites and light grays
- **Typography**: Professional, readable font stack
- **Spacing**: Consistent 8px grid system
- **Breakpoints**: Mobile-first responsive design

### Performance Optimization
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Responsive images with proper formats
- **Lazy Loading**: Images and heavy components loaded on demand
- **Bundle Size**: Monitored and optimized for fast loading

### SEO Strategy
- **Meta Tags**: Dynamic meta tags for each page
- **Semantic HTML**: Proper HTML5 semantic structure
- **Structured Data**: JSON-LD for business information
- **Sitemap**: XML sitemap for search engines

### Accessibility
- **WCAG 2.1**: Level AA compliance
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and roles
- **Color Contrast**: Minimum 4.5:1 contrast ratio

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari, Chrome for Android
- **Progressive Enhancement**: Graceful degradation for older browsers

### Development Workflow
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Git Hooks**: Pre-commit quality checks

### Deployment Strategy
- **Static Hosting**: Optimized for static hosting platforms
- **CDN**: Assets served via CDN for global performance
- **Caching**: Aggressive caching strategy for static assets
- **HTTPS**: SSL certificate for security

### Security Considerations
- **Content Security Policy**: Protection against XSS attacks
- **HTTPS**: All communications encrypted
- **Input Validation**: Client-side validation for forms
- **No Sensitive Data**: No sensitive information in client-side code

### Testing Strategy
- **Unit Tests**: Component testing with Vitest
- **Integration Tests**: Page flow testing
- **Manual Testing**: Cross-browser and device testing
- **Performance Testing**: Lighthouse audits

### Maintenance Plan
- **Dependency Updates**: Regular updates for security and features
- **Content Updates**: Easy content management through data files
- **Monitoring**: Performance and error monitoring
- **Backup**: Regular backups of configuration and content