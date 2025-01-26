import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import LoanCategories from './screens/LoanCategories';
import UserDashboard from './screens/UserDashboard';
import AdminDashboard from './screens/AdminDashboard';
import LoginPage from './screens/LoginPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: 'loan-categories',
    element: <LoanCategories />,
  },
  {
    path: 'user-dashboard',
    element: <UserDashboard />,
  },
  {
    path: 'admin-dashboard',
    element: <AdminDashboard />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
