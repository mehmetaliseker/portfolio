import { lazy } from 'react';

// Lazy loading ile sayfaları yükle
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  CONTACT: '/contact',
};

export const routeConfig = [
  {
    path: ROUTES.HOME,
    element: Home,
    name: 'home',
    labelKey: 'nav.home',
  },
  {
    path: ROUTES.ABOUT,
    element: About,
    name: 'about',
    labelKey: 'nav.about',
  },
  {
    path: ROUTES.PROJECTS,
    element: Projects,
    name: 'projects',
    labelKey: 'nav.projects',
  },
  {
    path: ROUTES.CONTACT,
    element: Contact,
    name: 'contact',
    labelKey: 'nav.contact',
  },
];

export const getRouteByName = (name) => {
  return routeConfig.find((route) => route.name === name)?.path || ROUTES.HOME;
};

export const getRouteNameByPath = (path) => {
  return routeConfig.find((route) => route.path === path)?.name || 'home';
};
