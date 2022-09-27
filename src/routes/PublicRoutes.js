import React from 'react';
import { Register } from '../pages/Register';
import { Confirmation } from '../pages/Confirmation';
export const publicRoutes = [
  { path: '/', component: <Register />, exact: true },
  { path: '/confirmation', component: <Confirmation />, exact: true },
  { path: '*', component: <Register />, exact: true },
];
