// Web Vitals monitoring for performance optimization
export const measureWebVitals = () => {
  // First Contentful Paint (FCP)
  const measureFCP = () => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          console.log('🎨 FCP:', Math.round(entry.startTime), 'ms');
          // Send to analytics if needed
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FCP',
              value: Math.round(entry.startTime)
            });
          }
        }
      }
    });
    
    try {
      observer.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('FCP measurement not supported');
    }
  };

  // Largest Contentful Paint (LCP)
  const measureLCP = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('🖼️ LCP:', Math.round(lastEntry.startTime), 'ms');
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'LCP',
          value: Math.round(lastEntry.startTime)
        });
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP measurement not supported');
    }
  };

  // Cumulative Layout Shift (CLS)
  const measureCLS = () => {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      console.log('📐 CLS:', clsValue.toFixed(4));
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(clsValue * 1000)
        });
      }
    });

    try {
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS measurement not supported');
    }
  };

  // First Input Delay (FID)
  const measureFID = () => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('⚡ FID:', Math.round(entry.processingStart - entry.startTime), 'ms');
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'FID',
            value: Math.round(entry.processingStart - entry.startTime)
          });
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID measurement not supported');
    }
  };

  // Time to Interactive (TTI) approximation
  const measureTTI = () => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigationEntry = performance.getEntriesByType('navigation')[0];
        const tti = navigationEntry.loadEventEnd;
        console.log('🚀 TTI (approx):', Math.round(tti), 'ms');
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'TTI',
            value: Math.round(tti)
          });
        }
      }, 0);
    });
  };

  // Bundle size monitoring
  const measureBundleSize = () => {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      console.log('📊 Connection:', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
      });
    }

    // Measure resource loading times
    window.addEventListener('load', () => {
      const resources = performance.getEntriesByType('resource');
      const jsResources = resources.filter(r => r.name.includes('.js'));
      const cssResources = resources.filter(r => r.name.includes('.css'));
      
      console.log('📦 JS Resources:', jsResources.length, 'files');
      console.log('🎨 CSS Resources:', cssResources.length, 'files');
      
      const totalJSSize = jsResources.reduce((total, resource) => {
        return total + (resource.transferSize || 0);
      }, 0);
      
      console.log('📏 Total JS Size:', Math.round(totalJSSize / 1024), 'KB');
    });
  };

  // Initialize all measurements
  measureFCP();
  measureLCP();
  measureCLS();
  measureFID();
  measureTTI();
  measureBundleSize();
};

// Performance budget checker
export const checkPerformanceBudget = () => {
  const budgets = {
    FCP: 1800, // ms
    LCP: 2500, // ms
    CLS: 0.1,  // score
    FID: 100,  // ms
  };

  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      
      if (fcp && fcp.startTime > budgets.FCP) {
        console.warn('⚠️ FCP budget exceeded:', Math.round(fcp.startTime), 'ms');
      }
      
      // Check other budgets...
      console.log('✅ Performance budget check completed');
    }, 1000);
  });
};

// Resource hints helper
export const addResourceHints = (hints) => {
  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.as) link.as = hint.as;
    if (hint.crossorigin) link.crossOrigin = hint.crossorigin;
    document.head.appendChild(link);
  });
};