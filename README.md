# Orebi E-Commerce Store

A modern, professional e-commerce store built with React, Redux, and Tailwind CSS. This fully responsive online store features product browsing, cart management, and a sleek user interface.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Redux](https://img.shields.io/badge/Redux-9.2.0-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Product Catalog**: Browse products by category, brand, and price range
- **Shopping Cart**: Add, remove, and manage products in cart
- **State Management**: Redux Toolkit for efficient state management
- **Responsive Design**: Fully responsive across all devices
- **Form Validation**: Robust form validation with Formik and Yup
- **Contact Form**: Professional contact page with validation
- **Product Details**: Detailed product pages with related items
- **Smooth Navigation**: React Router for seamless page transitions

## Tech Stack

- **Frontend**: React 18.2.0
- **State Management**: Redux Toolkit + Redux Persist
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router DOM 6.6.0
- **Forms**: Formik + Yup
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Carousel**: React Slick

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Aitzazhassan21/Eccomerce-web.git
```

2. Navigate to the project directory:
```bash
cd Eccomerce-web
```

3. Install dependencies:
```bash
npm install
```

## Running the Project

Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Build for Production

Create an optimized production build:
```bash
npm run build
```

The build files will be in the `build` directory, ready for deployment.

## Project Structure

```
Eccomerce-web/
├── public/              # Static files
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── redux/           # Redux store and slices
│   ├── constants/       # Constants and configuration
│   ├── App.js           # Main App component
│   └── index.js         # Entry point
├── package.json         # Project dependencies
└── tailwind.config.js   # Tailwind configuration
```

## Key Components

- **Header**: Navigation with responsive menu
- **Banner**: Hero slider with featured products
- **Product Cards**: Display products with hover effects
- **Cart**: Shopping cart with item management
- **Contact Form**: Professional contact page with validation
- **Footer**: Site information and links

## Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`.

### Redux
State management is handled by Redux Toolkit with persistence using `redux-persist`.

## Pages

- **Home**: Featured products and categories
- **Shop**: Full product catalog with filters
- **About**: Company information
- **Contact**: Contact form and information
- **Cart**: Shopping cart management
- **Product Details**: Individual product pages

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

**Aitzaz Hassan**

## Contact

For any inquiries or support, please use the contact form on the website.

## Deployment

This project can be deployed to various platforms:
- Vercel
- Netlify
- AWS Amplify
- GitHub Pages

Simply run `npm run build` and deploy the contents of the `build` folder.
