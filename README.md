# 🚀 ByteSpace — Modern E-Learning Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://byte-space-assignment.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/mdemong87/byte-space)
[![Assignment](https://img.shields.io/badge/Project-Doin%20Tech%20Assignment-orange?style=for-the-badge)](https://github.com/mdemong87/byte-space)

> **ByteSpace** is a modern, high-performance, and visually captivating e-learning platform web application developed as an assignment for **Doin Tech**. It features a 100% pixel-perfect implementation of Figma designs, complete with customized 3D elements, CSS blend modes, dynamic animations, and a strict design system.

---

## 🌐 Live Preview & Repository

- **Live Deployment:** [https://byte-space-assignment.vercel.app/](https://byte-space-assignment.vercel.app/)
- **GitHub Repository:** [https://github.com/mdemong87/byte-space](https://github.com/mdemong87/byte-space)

---

## 📌 Project Overview

This project was developed as a front-end evaluation assignment for **Doin Tech**. The goal was to transform complex Figma design specifications into a responsive, clean, and interactive Next.js application adhering strictly to:
- Precise typography scales (Poppins & Satoshi).
- Custom neutral, primary, and secondary color palettes.
- Realistic 3D clay-render shapes with dynamic CSS `mix-blend-mode` color overlays and masking.
- Seamless responsiveness across all modern device viewports (Mobile, Tablet, Desktop).
- Interactive course filtering tabs and sticky navigation with backdrop filters.

---

## ✨ Key Features

- **🎯 Pixel-Perfect Figma Implementation:** Every section meticulously matches the Figma design down to typography line-heights, letter-spacing, and color codes.
- **🎨 3D Graphic Integration & Blend Modes:** Custom 3D spiral coils, cones, cylinders, and toruses tinted dynamically with CSS `mix-blend-color-burn` and `mask-image` masking.
- **📚 Dynamic Course Explorer:** Filter courses dynamically by skill category (Featured, UI/UX, Design, etc.) with smooth layout transitions.
- **🛡️ Reusable Design System / Style Guide:** Fully organized `:root` tokens and utility classes (`.heading-l/m/s/xs`, `.body-l/m/s/xs`, `.label-l/m/s/xs`) defined in `globals.css`.
- **🔐 Unified Authentication Layout:** Dedicated, responsive `/signin` and `/signup` pages sharing a reusable `AuthLayout`.
- **✨ Micro-Animations & Fluid UX:** Floating 3D shapes, smooth scroll behaviors, sticky glassmorphism header, and interactive hover states.

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Server & Client Components) |
| **Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Design Tokens |
| **Typography** | [Poppins](https://fonts.google.com/specimen/Poppins) (Headings) & [Satoshi](https://www.fontshare.com/fonts/satoshi) (Body & Labels) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (Hi, Fa, Io) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Folder Structure

```plaintext
byte-space/
├── public/
│   ├── font/
│   │   └── Satoshi_Complete/      # Local Satoshi webfonts (.woff2)
│   ├── images/
│   │   ├── hero-section/          # 3D masks, hero graphic assets
│   │   ├── creator-teacher.jpg    # Creator profile imagery
│   │   ├── growth-student.jpg     # Student growth image
│   │   └── hero-student.jpg       # Hero section student image
│   ├── header_logo.png            # Main brand logo
│   └── footer_logo.png            # Footer brand logo
├── src/
│   ├── app/
│   │   ├── signin/
│   │   │   └── page.jsx           # Sign In page
│   │   ├── signup/
│   │   │   └── page.jsx           # Sign Up page
│   │   ├── globals.css            # Style Guide, :root tokens & Tailwind imports
│   │   ├── layout.jsx             # Root layout with font imports & metadata
│   │   └── page.jsx               # Landing page assembling all sections
│   └── components/
│       ├── AuthLayout.jsx         # Shared layout for auth pages
│       ├── Button.jsx             # Reusable button component
│       ├── CategoriesSection.jsx  # Learning categories grid
│       ├── CoursesSection.jsx     # Filterable courses library
│       ├── CreatorsSection.jsx    # Top creators showcase
│       ├── CTASection.jsx         # Call to action section with 3D elements
│       ├── Footer.jsx             # Global website footer
│       ├── GrowthSection.jsx      # Statistics & career growth section
│       ├── HeroSection.jsx        # Hero banner with search & 3D floating shapes
│       ├── Navbar.jsx             # Sticky navigation header
│       ├── PartnersSection.jsx    # Trusted partner logos
│       └── TestimonialsSection.jsx# Student & creator reviews
├── package.json
├── README.md
└── next.config.mjs
```

---

## 💻 Getting Started (Run Locally)

Follow these steps to set up and run the project locally on your machine:

### 1. Prerequisites
Ensure you have **Node.js** (v18.18 or higher recommended) and **npm** installed:
```bash
node -v
npm -v
```

### 2. Clone the Repository
```bash
git clone https://github.com/mdemong87/byte-space.git
cd byte-space
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot reloading enabled.

### 5. Build for Production
To test or build the production bundle:
```bash
npm run build
npm run start
```

---

## 🎨 Style Guide & Design Tokens

The project utilizes a dedicated design system in `src/app/globals.css`:

### Typography
- **Headings:** Poppins (SemiBold 600, Line Height: 120%) — `.heading-l` (72px), `.heading-m` (44px), `.heading-s` (36px), `.heading-xs` (20px)
- **Body:** Satoshi (Regular 400, Line Height: 160%) — `.body-l` (18px), `.body-m` (16px), `.body-s` (14px), `.body-xs` (12px)
- **Labels:** Satoshi (Medium 500, Line Height: 120%) — `.label-l` (18px), `.label-m` (16px), `.label-s` (14px), `.label-xs` (12px)

### Colors
- **Neutral:** `#f5f5f6` (50) to `#242528` (950)
- **Primary:** `#e7f6ff` (50) to `#071e5f` (950)
- **Secondary (Lime):** `#fdffe4` (50) to `#243300` (950)

---

## 🙏 Thank You!

Thank you for reviewing the **ByteSpace** project! Special thanks to the team at **Doin Tech** for the opportunity to work on this exciting assignment.

If you have any questions, suggestions, or feedback, feel free to connect or open an issue on the [GitHub repository](https://github.com/mdemong87/byte-space).

**Happy Coding! ✨**
