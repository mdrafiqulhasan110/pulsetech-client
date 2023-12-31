import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const product = useLoaderData();
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://brand-shop-server-gxa58mniy-mdrafiqulhasan110s-projects.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
    fetch("https://brand-shop-server-gxa58mniy-mdrafiqulhasan110s-projects.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const newProduct = { name, image, brand, category, price, rating, description };

    fetch(`https://brand-shop-server-gxa58mniy-mdrafiqulhasan110s-projects.vercel.app/product/${product._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    form.reset();
    toast.success("Product Created Successfully");
    window.location.reload();
  };

  return (
    <div>
      <h1 className='mt-10  text-center text-3xl uppercase font-medium bg-gray-400 p-2 rounded-t-md'>Update Products</h1>
      <form
        onSubmit={handleSubmit}
        className='border rounded-b-md mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-x-4 '
      >
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Name
          </label>
          <input
            required
            type='text'
            id='name'
            name='name'
            defaultValue={product.name}
            className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='image'
            className='block text-sm font-medium text-gray-700'
          >
            Image URL
          </label>
          <input
            defaultValue={product.image}
            required
            type='text'
            id='image'
            name='image'
            className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='brand'
            className='block text-sm font-medium text-gray-700'
          >
            Brand Name
          </label>
          <select
            required
            id='brand'
            name='brand'
            className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
          >
            {brands.map(({ _id, name }) => (
              <option
                value={name}
                key={_id}
                selected={name === product.brand ? "selected" : ""}
              >
                {name.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-4'>
          <label
            htmlFor='category'
            className='block text-sm font-medium text-gray-700'
          >
            Category
          </label>
          <select
            required
            id='category'
            name='category'
            className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
          >
            {categories.map(({ _id, name }) => (
              <option
                value={name}
                key={_id}
                selected={name === product.category ? "selected" : ""}
              >
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-4'>
          <label
            htmlFor='price'
            className='block text-sm font-medium text-gray-700'
          >
            Price
          </label>
          <input
            defaultValue={product.price}
            required
            type='number'
            id='price'
            name='price'
            className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='rating'
            className='block text-sm font-medium text-gray-700'
          >
            Rating (Out of 5)
          </label>
          <select
            required
            id='rating'
            name='rating'
            className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
          >
            <option
              value='1'
              selected={1 == product.rating ? "selected" : ""}
            >
              1
            </option>
            <option
              value='2'
              selected={2 == product.rating ? "selected" : ""}
            >
              2
            </option>
            <option
              value='3'
              selected={3 == product.rating ? "selected" : ""}
            >
              3
            </option>
            <option
              value='4'
              selected={4 == product.rating ? "selected" : ""}
            >
              4
            </option>
            <option
              value='5'
              selected={5 == product.rating ? "selected" : ""}
            >
              5
            </option>
          </select>
        </div>

        <div className='mb-4 col-span-1 lg:col-span-2'>
          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-700'
          >
            Short description
          </label>
          <textarea
            defaultValue={product.description}
            required
            id='description'
            name='description'
            className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
          />
        </div>

        <div className='col-span-1 lg:col-span-2 w-full'>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
