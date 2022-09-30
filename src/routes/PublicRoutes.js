import React from 'react';
import { Register } from '../pages/Register';
import { Confirmation } from '../pages/Confirmation';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { NFTDetail } from '../pages/NFTDetail';

export const publicRoutes = [
  { path: '/register', component: <Register />, exact: true },
  { path: '/confirmation', component: <Confirmation />, exact: true },
  { path: '*', component: <Home />, exact: true },
  { path: '/', component: <Home />, exact: true },
  { path: '/login', component: <Login />, exact: true },
  { path: '/nft/:id', component: <NFTDetail />, exact: true },
];
