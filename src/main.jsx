import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import RootLayout from './components/RootLayout';
import Home from './page/Home';
import Shop from './page/Shop';
import About from './page/About';
import Contact from './page/Contact';
import SignUp from './page/SignUp';
import Login from './page/Login';



const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/shop", Component: Shop },
      { path: "/contact", Component: Contact },
      { path: "/about", Component: About },
      { path: "/signup", Component: SignUp },
      { path: "/login", Component: Login },
      
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />,
  </StrictMode>,
)
