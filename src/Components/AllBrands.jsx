import { Link } from "react-router-dom";

const AllBrands = ({ brands }) => {
  console.log(brands);
  return (
    <div>
      <h1 className='border-b-2 border-[#3497DA] mb-6'>
        <span
          className='bg-[#3497DA] py-1 pl-2 pr-10 text-2xl font-semibold text-white'
          style={{ clipPath: "polygon(0 0,85% 0,95% 100%,0% 100%)" }}
        >
          Top Brands
        </span>
      </h1>
      <section className='grid grid-cols-3 lg:grid-cols-6 gap-4 px-4 md:px-0'>
        {brands.map((item) => (
          <>
            <Link to={`/brands/${item.name}`}>
              <div className='card card-compact p-2  border border-opacity-60 border-[#3497DA] bg-base-100 shadow-xl'>
                <figure>
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </figure>
                <div className='card-body'>
                  <h2 className='text-center font-medium'>{item.name.toUpperCase()}</h2>
                </div>
              </div>
            </Link>
          </>
        ))}
      </section>
    </div>
  );
};

export default AllBrands;
