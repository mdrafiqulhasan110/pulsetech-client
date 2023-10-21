const ProductCard = ({ product }) => {
  return (
    <div className='bg-white shadow-md rounded-lg text-center p-4 space-y-3'>
      <img
        src={product.image}
        alt={product.name}
        className='w-full object-cover object-center'
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

      <div className='mt-4 grid grid-cols-3 text-center w-full'>
        <div className=' bg-blue-500 text-white px-4 py-2 rounded-l-md'>Details</div>
        <div className=' bg-yellow-500 text-white px-4 py-2 '>Update</div>
        <div className=' bg-red-500 text-white px-4 py-2 rounded-r-md'>Delete</div>
      </div>
    </div>
  );
};

export default ProductCard;
