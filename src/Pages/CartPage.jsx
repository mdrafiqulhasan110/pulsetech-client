import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const CartPage = () => {
  const { updateCart, cart, user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  let total = 0;
  console.log(user.email, cart);

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/cart/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            updateCart(user);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <div className='overflow-x-hidden'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Item</th>
              <th>Price</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              const product = products.find((product) => product._id === item.item);
              if (product) {
                total += parseInt(product.price);
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>$ {parseInt(product.price).toFixed(2)}</td>
                    <td className='text-center text-red-500'>
                      <button onClick={() => handleDelete(item._id)}>
                        <AiOutlineDelete />
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
          {cart.length > 0 && (
            <tr className='bg-black text-white'>
              <th></th>
              <th className='text-right'>Total:</th>
              <th>$ {total.toFixed(2)}</th>
              <th></th>
            </tr>
          )}
        </table>
        {cart.length < 1 && <p className='text-2xl text-center p-4'>No Product Found</p>}
      </div>
    </div>
  );
};

export default CartPage;
