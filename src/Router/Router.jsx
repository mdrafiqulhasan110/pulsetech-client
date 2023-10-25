import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AddProductPage from "../Pages/AddProductPage";
import AddBrandPage from "../Pages/AddBrandPage";
import AddCategoryPage from "../Pages/AddCategoryPage";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
import BrandPage from "../Pages/BrandPage";
import UpdateProduct from "../Pages/UpdateProduct";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import CartPage from "../Pages/CartPage";
import PrivateRoute from "./PrivateRoute";
import AllProducts from "../Pages/AllProducts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://brand-shop-server-gxa58mniy-mdrafiqulhasan110s-projects.vercel.app/products`),
      },
      {
        path: "/add_products",
        element: (
          <PrivateRoute>
            <AddProductPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/update_products/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://brand-shop-server-gxa58mniy-mdrafiqulhasan110s-projects.vercel.app/product/${params.id}`),
      },
      {
        path: "/products",
        element: <AllProducts />,
        loader: () => fetch(`https://brand-shop-server-gxa58mniy-mdrafiqulhasan110s-projects.vercel.app/products`),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetailsPage />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://brand-shop-server-gxa58mniy-mdrafiqulhasan110s-projects.vercel.app/product/${params.id}`),
      },
      {
        path: "/add_brands",
        element: (
          <PrivateRoute>
            <AddBrandPage />
          </PrivateRoute>
        ),
      },

      {
        path: "/brands/:brand",
        element: <BrandPage />,
        loader: ({ params }) => fetch(`https://brand-shop-server-gxa58mniy-mdrafiqulhasan110s-projects.vercel.app/products/${params.brand}`),
      },
      {
        path: "/add_category",
        element: (
          <PrivateRoute>
            <AddCategoryPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
        loader: () => fetch("https://brand-shop-server-gxa58mniy-mdrafiqulhasan110s-projects.vercel.app/cart/"),
      },
    ],
  },
]);

export default Router;
