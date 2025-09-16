import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Layout from './Layout';
import Wrapper from './Wrapper';
import About from './Pages/About';
import Contact from './Pages/Contact';
import "bootstrap-icons/font/bootstrap-icons.css";
import ShopPage from './Pages/ShopPage';
import ProductDetail from './Pages/ProductDetail';
import ProfilePage from './Pages/ProfilePage';
import CheckoutPage from './Pages/CheckOut';
import { Toaster } from "react-hot-toast";
import MainCart from './Pages/MainCart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Wrapper/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/collections',
        element: <ShopPage/>
      },
      {
        path: '/productDetail',
        element: <ProductDetail/>
      },
      {
        path: '/myProfile',
        element: <ProfilePage/>
      },
      {
        path: '/checkout',
        element: <CheckoutPage/>
      },
      {
        path: '/myCart',
        element: <MainCart/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            zIndex: 999999, 
          },
        }}
      />
    </>
  );
}

export default App;
