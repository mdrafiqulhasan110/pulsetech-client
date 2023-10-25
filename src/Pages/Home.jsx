import { useEffect, useState } from "react";
import Slider from "../Components/Slider/Slider";
import AllBrands from "../Components/AllBrands";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Product/Products";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const loadedProducts = useLoaderData();

  useEffect(() => {
    fetch("https://brand-shop-server-gxa58mniy-mdrafiqulhasan110s-projects.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  return (
    <div className='space-y-16'>
      <Slider banners={brands}></Slider>
      <AllBrands brands={brands}></AllBrands>
      <Products
        loadedProducts={loadedProducts}
        title={"Top Products"}
      ></Products>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
