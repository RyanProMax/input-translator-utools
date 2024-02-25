import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Home from '@/renderer/components/Home';
import Setting from '@/renderer/components/Setting';

const router = createHashRouter([
  { path: '/', element: <Home /> },
  { path: '/setting', element: <Setting /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>
);
