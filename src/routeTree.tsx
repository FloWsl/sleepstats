import { createRootRoute, createRoute, Outlet, redirect } from '@tanstack/react-router';
import { Navigation } from './components/Navigation';
import { IndividualCalculator } from './pages/IndividualCalculator';
import { TeamCalculator } from './pages/TeamCalculator';
import { AirdropGuide } from './pages/AirdropGuide';
import { useAuthStore } from './store/authStore';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <Outlet />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AirdropGuide,
});

const calculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/calculator',
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated;
    if (!isAuthenticated) {
      throw redirect({
        to: '/',
      });
    }
  },
  component: IndividualCalculator,
});

const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/team',
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated;
    if (!isAuthenticated) {
      throw redirect({
        to: '/',
      });
    }
  },
  component: TeamCalculator,
});

export const routeTree = rootRoute.addChildren([indexRoute, calculatorRoute, teamRoute]);