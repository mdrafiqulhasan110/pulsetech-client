import { useEffect, useState } from "react";
import Slider from "../Components/Slider/Slider";
import AllBrands from "../Components/AllBrands";

const Home = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  return (
    <div className='space-y-16'>
      <Slider banners={brands}></Slider>
      <AllBrands brands={brands}></AllBrands>
    </div>
  );
};

export default Home;
