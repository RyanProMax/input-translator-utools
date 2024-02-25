import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';

import Home from '@/renderer/components/Home';
import Setting from '@/renderer/components/Setting';

const { defaultAlgorithm, darkAlgorithm } = theme;

const router = createHashRouter([
  { path: '/', element: <Home /> },
  { path: '/setting', element: <Setting /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ConfigProvider theme={{
      algorithm: window.utools.isDarkColors() ? darkAlgorithm : defaultAlgorithm
    }}>
      <RouterProvider
        router={router}
      />
    </ConfigProvider>
  </React.StrictMode>
);
