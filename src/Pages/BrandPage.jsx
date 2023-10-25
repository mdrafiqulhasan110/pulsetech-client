import { useLoaderData, useParams } from "react-router-dom";
import BrandSlider from "../Components/Slider/BrandSlider";
import Products from "../Components/Product/Products";

const BrandPage = () => {
  const brand = useParams();
  const loadedProducts = useLoaderData();
  return (
    <div className='space-y-10'>
      <BrandSlider brand={brand}></BrandSlider>
      <Products
        loadedProducts={loadedProducts.slice(0, 4)}
        title={"All Products"}
      ></Products>
    </div>
  );
};

export default BrandPage;
