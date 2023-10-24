import { useLoaderData } from "react-router-dom";

const ProductDetailsPage = () => {
  const product = useLoaderData();
  const { name, image, brand, category, price, rating, description } = product;
  return (
    <div>
      <div className='card lg:card-side bg-base-100 shadow-xl my-10'>
        <figure>
          <img
            className='p-4'
            src={image}
            alt={name}
          />
        </figure>
        <div className='card-body justify-between'>
          <div className='space-y-4'>
            <h2 className='card-title'>{name}</h2>
            <p>
              {(function () {
                const stars = [];
                for (let i = 0; i < rating; i++) {
                  stars.push("⭐");
                }
                return stars.join("");
              })()}
              <p className='text-green-600 text-4xl font-semibold mt-2'>${price}</p>
            </p>
            <p>{description}</p>
            <p>
              <span className='font-bold'>Brand: </span>
              {brand.toUpperCase()}
            </p>
            <p>
              <span className='font-bold'>Category: </span>
              {category}
            </p>
          </div>
          <div className='card-actions'>
            <button className='btn btn-info'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
