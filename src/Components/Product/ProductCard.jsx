import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Firebase/AuthProvider";

const ProductCard = ({ product, products, setProducts }) => {
  const { user, updateCart } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    if (user) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://brand-shop-server-gxa58mniy-mdrafiqulhasan110s-projects.vercel.app/product/${id}`, { method: "DELETE" })
            .then((res) => res.json())
            .then(() => {
              const remaining = products.filter((prod) => prod._id !== id);
              setProducts(remaining);
              Swal.fire("Deleted!", "Product has been deleted.", "success");
            });
          updateCart(user);
        }
      });
    } else {
      navigate("/signin");
    }
  };
  return (
    <div className='card bg-white shadow-xl rounded-lg text-center p-4 space-y-3 border'>
      <img
        src={product.image}
        alt={product.name}
        className='object-contain aspect-[2/2]'
      />
      <div className='grid grid-cols-2'>
        <p className='text-gray-600 capitalize'>Brand: {product.brand}</p>
        <p className='text-gray-600 capitalize'>Category: {product.category}</p>
      </div>
      <h2 className='text-xl font-semibold mt-2 text-center'>{product.name}</h2>
      <p className='text-gray-600 text-center'>
        {(function () {
          const stars = [];
          for (let i = 0; i < product.rating; i++) {
            stars.push("⭐");
          }
          return stars.join("");
        })()}
      </p>
      <p className='text-green-600 text-lg font-semibold mt-2'>${product.price}</p>

      {user ? (
        <div className='mt-4 grid grid-cols-3 text-center w-full'>
          <Link to={`/products/${product._id}`}>
            <div className=' bg-blue-500 text-white px-4 py-2 rounded-l-md'>Details</div>{" "}
          </Link>

          <Link to={`/update_products/${product._id}`}>
            <div className=' bg-yellow-500 text-white px-4 py-2 '>Update</div>
          </Link>
          <div
            onClick={() => handleDelete(product._id)}
            className='cursor-pointer bg-red-500 text-white px-4 py-2 rounded-r-md'
          >
            Delete
          </div>
        </div>
      ) : (
        <Link to={`/products/${product._id}`}>
          <div className=' bg-blue-500 text-white px-4 py-2 rounded-l-md'>Details</div>{" "}
        </Link>
      )}
    </div>
  );
};

export default ProductCard;
