
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './screens/Register/Register.jsx'
import Login from './screens/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
  },
  {
    path : 'register',
    element : <Register/>
  },
  {
    path : 'login',
    element : <Login/>
  },

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

    <App />
  </RouterProvider>
  
)
