import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './components/RootLayout';
import { Provider } from 'react-redux'
import './index.css'
import Home from './page/Home';
import Shop from './page/Shop';
import About from './page/About';
import Contact from './page/Contact';
import SignUp from './page/SignUp';
import Login from './page/Login';
import Cart from './page/Cart';
import { store } from './Store';
import ProductDetail from './page/ProductDetail';
import Wishlist from './page/Wishlist';


const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "Productdetail/:id", Component: ProductDetail },
      { path: "cart", Component: Cart},
      { path: "wishlist", Component: Wishlist},
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
      { path: "signup", Component: SignUp },
      { path: "login", Component: Login },

    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />,
    </Provider>
  </StrictMode>,
)
