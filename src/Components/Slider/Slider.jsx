import { Carousel } from "flowbite-react";

const Slider = ({ banners }) => {
  return (
    <div>
      <div className='col-span-1 lg:col-span-2 aspect-[2/1]'>
        <Carousel className='rounded-none'>
          {banners.map((item, index) => (
            <img
              className='aspect-[2/1]'
              key={index}
              src={item.advertisement_1}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
