import { toast } from "react-toastify";

const AddProductPage = () => {
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
          <input
            required
            type='text'
            id='brand'
            name='brand'
            className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='category'
            className='block text-sm font-medium text-gray-700'
          >
            Category
          </label>
          <input
            required
            type='text'
            id='category'
            name='category'
            className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
          />
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
            Rating
          </label>
          <input
            required
            type='number'
            id='rating'
            name='rating'
            className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
          />
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
