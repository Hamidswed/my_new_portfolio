import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/critical.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import './i18n.js';
import { measureWebVitals, checkPerformanceBudget } from './utils/webVitals.js';

// Register Service Worker
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered');
    } catch (error) {
      console.log('SW registration failed');
    }
  }
};

// Preload critical resources
const preloadCriticalResources = () => {
  // Preload critical images
  const criticalImages = [
    '/src/assets/hamid-sm.webp',
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Initialize app
const initApp = async () => {
  preloadCriticalResources();
  await registerServiceWorker();
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
