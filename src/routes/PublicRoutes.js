import React from 'react';
import { Register } from '../pages/Register';
import { Confirmation } from '../pages/Confirmation';
import { Home } from '../pages/Home';

export const publicRoutes = [
  { path: '/', component: <Register />, exact: true },
  { path: '/confirmation', component: <Confirmation />, exact: true },
  { path: '*', component: <Register />, exact: true },
  { path: '/home', component: <Home />, exact: true },
];
