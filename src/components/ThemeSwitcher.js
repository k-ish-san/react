// src/components/ThemeSwitcher.js
import React, { useState, useEffect } from 'react';
import '../styles/ThemeSwitcher.css'; // For styling

const themes = {
  light: {
    '--primary': '#3b82f6',       // Bright Blue
    '--secondary': '#10b981',    // Emerald Green
    '--background': '#f9fafb',   // Soft White
    '--text': '#111827',         // Charcoal Black
    '--button': '#2563eb',       // Vivid Blue
    '--border': '#e5e7eb',       // Light Gray
    '--button-hover': '#1d4ed8'  // Deeper Blue
  },
  dark: {
    '--primary': '#60a5fa',       // Soft Blue
    '--secondary': '#34d399',    // Mint Green
    '--background': '#1f2937',   // Charcoal Gray
    '--text': '#f3f4f6',         // Light Grayish White
    '--button': '#3b82f6',       // Bright Blue
    '--border': '#4b5563',       // Muted Gray
    '--button-hover': '#2563eb'  // Vivid Blue
  },
  
  yellow: {
    '--primary': '#e67e22',       // Warm Orange
    '--secondary': '#f39c12',    // Golden Yellow
    '--background': '#fef6e4',   // Soft Cream
    '--text': '#2c3e50',         // Deep Navy
    '--button': '#e74c3c',       // Bright Red
    '--border': '#e5b882',       // Peachy Beige
    '--button-hover': '#d35400'  // Deep Orange
  },
  orange: {
    '--primary': '#f39c12',       // Golden Yellow
    '--secondary': '#d35400',    // Burnt Orange
    '--background': '#1e272e',   // Midnight Gray
    '--text': '#f1c40f',         // Bright Yellow
    '--button': '#e67e22',       // Warm Orange
    '--border': '#34495e',       // Dark Blue-Gray
    '--button-hover': '#e74c3c'  // Bright Red
  },
  green: {
    '--primary': '#2ecc71',       // Bright Green
    '--secondary': '#27ae60',    // Forest Green
    '--background': '#f6f8f3',   // Soft Off-White
    '--text': '#34495e',         // Deep Grayish Blue
    '--button': '#16a085',       // Teal Green
    '--border': '#95a5a6',       // Muted Gray
    '--button-hover': '#2ecc71'  // Bright Green
  },
  blue: {
    '--primary': '#00bcd4',       // Bright Cyan
    '--secondary': '#0288d1',    // Deep Sky Blue
    '--background': '#e0f7fa',   // Soft Cyan
    '--text': '#004d40',         // Deep Teal
    '--button': '#03a9f4',       // Vivid Blue
    '--border': '#b2ebf2',       // Pale Cyan
    '--button-hover': '#0288d1'  // Deep Blue

  },
  indigo: {
    '--primary': '#a29bfe',       // Lavender Blue
    '--secondary': '#00cec9',    // Teal Cyan
    '--background': '#2d3436',   // Deep Charcoal
    '--text': '#dfe6e9',         // Soft Gray
    '--button': '#6c5ce7',       // Vivid Indigo
    '--border': '#636e72',       // Muted Gray
    '--button-hover': '#74b9ff'  // Sky Blue
  },

};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  // Change theme colors on theme switch
  useEffect(() => {
    const root = document.documentElement;
    const themeColors = themes[theme];
    Object.keys(themeColors).forEach((key) => {
      root.style.setProperty(key, themeColors[key]);
    });
  }, [theme]);

  return (
    <div className="theme-switcher">
      <button onClick={() => setTheme('light')} style={{ backgroundColor: 'white' }}>

      </button>
      <button onClick={() => setTheme('dark')} style={{ backgroundColor: 'black' }}>

      </button>
       <button onClick={() => setTheme('yellow')} style={{ backgroundColor: 'yellow' }}>
        
      </button>
      <button onClick={() => setTheme('orange')} style={{ backgroundColor: 'orange' }}>
       
      </button>
      <button onClick={() => setTheme('green')} style={{ backgroundColor: 'green' }}>

      </button>
      <button onClick={() => setTheme('blue')} style={{ backgroundColor: 'blue' }}>
        
      </button>
       <button onClick={() => setTheme('indigo')} style={{ backgroundColor: 'indigo' }}>
  
      </button>
    </div>
  );
};

export default ThemeSwitcher;
