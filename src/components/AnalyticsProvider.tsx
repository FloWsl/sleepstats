import React, { useEffect } from 'react';
import { router } from '../router';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Track initial page view
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }

    // Track subsequent page views
    const unsubscribe = router.subscribe('onNavigationComplete', () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <>{children}</>;
}