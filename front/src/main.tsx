import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AuthProvider from './context/AuthContext.tsx';
import { RouterProvider } from 'react-router-dom';
import { appRoads } from './routes/appRoads.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={appRoads} />
    </AuthProvider>
  </StrictMode>,
)
