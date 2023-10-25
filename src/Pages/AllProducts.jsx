import { useLoaderData } from "react-router-dom";
import Products from "../Components/Product/Products";

const AllProducts = () => {
  const loadedProducts = useLoaderData();

  return (
    <div className='py-10'>
      <Products
        loadedProducts={loadedProducts}
        title={"All Products"}
      ></Products>
    </div>
  );
};

export default AllProducts;
