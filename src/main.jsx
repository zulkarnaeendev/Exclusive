import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
<<<<<<< HEAD
import RootLayout from './components/RootLayout';
import { Provider } from 'react-redux'
import './index.css'
=======
import './index.css'
import RootLayout from './components/RootLayout';
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
import Home from './page/Home';
import Shop from './page/Shop';
import About from './page/About';
import Contact from './page/Contact';
import SignUp from './page/SignUp';
import Login from './page/Login';
<<<<<<< HEAD
import Cart from './page/Cart';
import { store } from './Store';
import ProductDetail from './page/ProductDetail';
=======

>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e


const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
<<<<<<< HEAD
      { path: "shop", Component: Shop },
      { path: "Productdetail/:id", Component: ProductDetail },
      { path: "cart", Component: Cart},
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
      { path: "signup", Component: SignUp },
      { path: "login", Component: Login },

=======
      { path: "/shop", Component: Shop },
      { path: "/contact", Component: Contact },
      { path: "/about", Component: About },
      { path: "/signup", Component: SignUp },
      { path: "/login", Component: Login },
      
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <RouterProvider router={Router} />,
    </Provider>
=======
    <RouterProvider router={Router} />,
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
  </StrictMode>,
)
