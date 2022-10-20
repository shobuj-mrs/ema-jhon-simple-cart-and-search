import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Inventory from './components/Inventory/Inventory';
import Main from './components/layouts/Main';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import { productsAndCartLoader } from './loaders/ProductsAndCartLoader';
import PrivetRoute from './routes/PrivetRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <PrivetRoute><Orders></Orders></PrivetRoute>
        },
        {
          path: '/inventory',
          element: <PrivetRoute><Inventory></Inventory></PrivetRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/shipping',
          element: <PrivetRoute>
            <Shipping></Shipping>
          </PrivetRoute>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/about',
          element: <About></About>
        }

      ],
      errorElement: <ErrorPage></ErrorPage>

    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
