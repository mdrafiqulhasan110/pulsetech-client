import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";

const BrandSlider = ({ brand }) => {
  const name = brand.brand;
  const [brandName, setBrandName] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/brands/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setBrandName(data[0]);
      });
  }, [name]);
  return (
    <div>
      <div className='col-span-1 lg:col-span-2 aspect-[2/1] shadow-xl'>
        <Carousel className='rounded-none'>
          <img
            className='aspect-[2/1]'
            src={brandName.advertisement_1}
          />
          <img
            className='aspect-[2/1]'
            src={brandName.advertisement_2}
          />
          <img
            className='aspect-[2/1]'
            src={brandName.advertisement_3}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default BrandSlider;
