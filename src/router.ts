import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree';

// Initialize router with proper configuration
export const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
});

// Register router for TypeScript
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}