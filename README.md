# Thalia's Website

A beautiful, modern website for Thalia featuring pilates classes, clothing line, lifestyle blog, and product recommendations.

## Features

- **Pilates Classes**: Professional pilates instruction with class schedules, pricing, and booking
- **Clothing Line**: E-commerce section showcasing pilates and activewear
- **Lifestyle Blog**: Personal stories, wellness tips, and insights
- **Product Recommendations**: Curated product reviews with affiliate links
- **Contact**: Multiple ways to get in touch and studio information

## Tech Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Lucide React for icons
- Framer Motion for animations
- Responsive design for all devices

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   └── Navigation.tsx
├── pages/
│   ├── Home.tsx
│   ├── Pilates.tsx
│   ├── Clothing.tsx
│   ├── Blog.tsx
│   ├── Recommendations.tsx
│   └── Contact.tsx
├── App.tsx
├── index.tsx
└── index.css
```

## Customization

- Update colors in `tailwind.config.js`
- Modify content in individual page components
- Add new pages by creating components and updating the router
- Customize the navigation in `Navigation.tsx`

## Deployment

Build the project for production:

```bash
npm run build
```

The build folder will contain the production-ready files.

## License

This project is created for Thalia's personal use.
