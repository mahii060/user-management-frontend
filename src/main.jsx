import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddUser from './pages/AddUser.jsx'
import Users from './pages/Users.jsx'
import Profile from './pages/Profile.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/users',
        element: <Users />,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: '/addUser',
        element: <AddUser />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
