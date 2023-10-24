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

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add_products",
        element: <AddProductPage />,
      },
      {
        path: "/update_products/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage></ProductDetailsPage>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/add_brands",
        element: <AddBrandPage />,
      },
      {
        path: "/brands/:brand",
        element: <BrandPage></BrandPage>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}`),
      },
      {
        path: "/add_category",
        element: <AddCategoryPage></AddCategoryPage>,
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
        element: <Home></Home>,
      },
    ],
  },
]);

export default Router;
