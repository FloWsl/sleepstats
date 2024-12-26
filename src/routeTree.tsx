import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { Navigation } from './components/Navigation';
import { IndividualCalculator } from './pages/IndividualCalculator';
import { TeamCalculator } from './pages/TeamCalculator';
import { AirdropGuide } from './pages/AirdropGuide';

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
  component: IndividualCalculator,
});

const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/team',
  component: TeamCalculator,
});

export const routeTree = rootRoute.addChildren([indexRoute, calculatorRoute, teamRoute]);