import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AddProductPage from "../Pages/AddProductPage";
import AddBrandPage from "../Pages/AddBrandPage";
import AddCategoryPage from "../Pages/AddCategoryPage";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";

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
        path: "/add_brands",
        element: <AddBrandPage />,
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
