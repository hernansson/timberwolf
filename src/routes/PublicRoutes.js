import React from 'react';
import { Home } from '../pages/Home';
import { Confirmation } from '../pages/Confirmation';
export const publicRoutes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/confirmation', component: <Confirmation />, exact: true },
  { path: '*', component: <Home />, exact: true },
];
