# React + Vite

This is an exercise with React working in Vite.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Terminal commands

Installing Vite for the first time (use this command in the path where you want to create the project): npm create vite@Latest

Installing dependencies (make sure you are inside the project directory): npm install

# Tailwind
Installing Tailwind:
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

This will create the tailwind.config.js and postcss.config.js files in the project root.

Modify the tailwind.config.js file to include the files where your code is located:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
In the src/index.css file, import the Tailwind styles:
@tailwind base;
@tailwind components;
@tailwind utilities;

# Framer Motion
I just wanted to try this library called Framer Motion for easy implementation of animations on the website.

Install Framer Motion: 
npm install framer-motion

Import the necessary functions in the src/App.jsx file:
import { motion } from "framer-motion";
