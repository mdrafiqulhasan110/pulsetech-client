import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Firebase/AuthProvider";

const ProductDetailsPage = () => {
  const product = useLoaderData();
  const { user, updateCart, setLoading } = useContext(AuthContext);
  const { _id, name, image, brand, category, price, rating, description } = product;

  const handleSubmit = () => {
    const email = user.email;
    const newCart = { email, item: _id };

    fetch("http://localhost:5000/addcart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setLoading(true);
    updateCart(user);
    toast.success("Product Added to Cart");
  };

  return (
    <div>
      <div className='card lg:card-side bg-base-100 shadow-xl my-10'>
        <figure className='bg-gray-200'>
          <img
            className='object-contain aspect-[2/2] p-4'
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
            </p>
            <p className='text-green-600 text-4xl font-semibold mt-2'>${price}</p>
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
            <button
              className='btn btn-info'
              onClick={() => handleSubmit()}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
