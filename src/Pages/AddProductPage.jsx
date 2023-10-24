import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddProductPage = () => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBrands(data);
      });
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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

    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    form.reset();
    toast.success("Product Created Successfully");
  };

  return (
    <div>
      <h1 className='mt-10  text-center text-3xl uppercase font-medium bg-gray-400 p-2 rounded-t-md'>Add Products Here</h1>
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
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option
              selected
              value='5'
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
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
