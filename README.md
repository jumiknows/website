# SFU Satellite Design Team Website

[![Deployment Status](https://img.shields.io/badge/deployment-active-success)](https://jumiknows.github.io/website/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)

> The official website for the Simon Fraser University Satellite Design Team, showcasing our mission to educate and inspire future generations of space explorers through technological development and educational outreach.

## 🚀 Live Website

Visit our live website: 
- **Primary**: [https://sfusat.org](https://sfusat.org)
- **GitHub Pages**: [https://jumiknows.github.io/website/](https://jumiknows.github.io/website/)

## 📖 About

The SFU Satellite Design Team is dedicated to:
- 🛰️ **Designing and building satellites** for educational and research purposes
- 🎓 **Educating students** in aerospace engineering and space technology
- 🌍 **Inspiring communities** through outreach events and presentations
- 🤝 **Collaborating with industry partners** and sponsors

## 🏗️ Technical Stack

- **Frontend Framework**: React 18.x with TypeScript
- **Styling**: CSS3 with responsive design
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages
- **Build Tool**: Create React App
- **Image Optimization**: Professional asset management system

## 📂 Project Structure

```
src/
├── components/           # React components
│   ├── Home.tsx         # Landing page with hero section
│   ├── About.tsx        # Team information and mission
│   ├── Projects.tsx     # Satellite projects showcase
│   ├── Outreach.tsx     # Community outreach events
│   ├── Sponsors.tsx     # Sponsor recognition page
│   ├── Contact.tsx      # Contact information
│   ├── Navbar.tsx       # Navigation component
│   └── Footer.tsx       # Site footer
├── App.tsx              # Main application component
└── index.tsx            # Application entry point

public/images/           # Optimized image assets
├── hero/                # Hero section images
├── icons/               # Site icons and logos
├── sponsors/sponsor/    # Sponsor logos
└── outreach/events/     # Outreach event photos
```

## 🛠️ Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jumiknows/website.git
   cd website/sfusat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   
   Opens [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs development server on localhost:3000 |
| `npm test` | Launches test runner in interactive mode |
| `npm run build` | Creates optimized production build |
| `npm run deploy` | Deploys to GitHub Pages |

## 🎨 Features

### ✨ Responsive Design
- Mobile-first approach with breakpoints at 768px and 480px
- Optimized for desktop, tablet, and mobile devices
- Professional typography and spacing

### 🖼️ Image Management
- **Professional directory structure** for organized asset management
- **Optimized images** (e.g., hero balloon reduced from 7.1MB to 290KB)
- **214 total images** efficiently organized (2.2MB total)

### 📱 User Experience
- **Fast loading times** with optimized assets
- **Smooth animations** and hover effects
- **Interactive slideshow** for outreach events (17 photos)
- **Professional sponsor showcase** with tier-based organization

### 🏢 Sponsor Integration
- **Platinum, Silver, Bronze** tier system
- **Detailed sponsor profiles** with descriptions
- **Logo showcase** on home page and dedicated sponsors page
- **Call-to-action** for potential sponsors

## 📊 Performance Metrics

- **Hero Image**: 24x performance improvement (7.1MB → 290KB)
- **Total Assets**: 214 images, 2.2MB optimized
- **Load Time**: Significantly improved with asset optimization
- **Mobile Performance**: Fully responsive across all devices

## 🚀 Deployment

The website is automatically deployed to GitHub Pages using:

```bash
npm run deploy
```

**Deployment Process:**
1. Builds production-ready application
2. Pushes to `gh-pages` branch
3. GitHub Pages serves the site at the live URL

## 🤝 Contributing

We welcome contributions from team members! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit changes**: `git commit -m "Add amazing feature"`
5. **Push to branch**: `git push origin feature/amazing-feature`
6. **Create Pull Request**

### Development Workflow
1. Make code changes
2. Test locally with `npm start`
3. Commit changes: `git add . && git commit -m "description"`
4. Push source code: `git push`
5. Deploy to live site: `npm run deploy`

## 📧 Contact

**SFU Satellite Design Team**
- 🌐 Website: [https://sfusat.org](https://sfusat.org)
- 📧 Email: Contact us through our website
- 🏫 Location: Simon Fraser University, Burnaby, BC

## 📜 License

This project is maintained by the SFU Satellite Design Team for educational and outreach purposes.

## 🙏 Acknowledgments

- **Simon Fraser University** for supporting our mission
- **Our Sponsors**: Momentus, MDA, AGI, Canadian Space Agency, and many others
- **React Community** for the amazing framework
- **GitHub Pages** for free hosting

---

**Built with ❤️ by the SFU Satellite Design Team**

*Inspiring future generations of space explorers through technology and education.*
