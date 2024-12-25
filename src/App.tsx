import React from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import { Footer } from './components/Footer';
import { AnalyticsProvider } from './components/AnalyticsProvider';

export default function App() {
  return (
    <AnalyticsProvider>
      <div className="min-h-screen bg-galaxy-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-galaxy-900 via-galaxy-950 to-galaxy-950 flex flex-col">
        <RouterProvider router={router} />
        <Footer />
      </div>
    </AnalyticsProvider>
  );
}