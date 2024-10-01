import { createBrowserRouter } from 'react-router-dom';
import { RegisterPage } from '../pages/RegisterPage.tsx';
import { LoginPage } from '../pages/LoginPage.tsx';

export const appRoads = createBrowserRouter([
  {
    path: '',
    Component: RegisterPage
  },
  {
    path: 'login',
    Component: LoginPage
  }
])