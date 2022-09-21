import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './PublicRoutes';
export const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route, idx) => (
        <Route
          path={route.path}
          element={route.component}
          exact={route.exact}
          key={idx}
        />
      ))}
    </Routes>
  );
};
