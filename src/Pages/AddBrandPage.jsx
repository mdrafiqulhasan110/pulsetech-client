import { toast } from "react-toastify";

const AddBrandPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const advertisement_1 = form.advertisement_1.value;
    const advertisement_2 = form.advertisement_2.value;
    const advertisement_3 = form.advertisement_3.value;

    toast.success("Brand Created Successfully");
  };

  return (
    <div>
      <h1 className='mt-10  text-center text-3xl uppercase font-medium bg-gray-400 p-2 rounded-t-md'>Add Brand here</h1>
      <form
        onSubmit={handleSubmit}
        className='border rounded-b-md mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-x-4 '
      >
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Brand Name
          </label>
          <input
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
            type='text'
            id='image'
            name='image'
            className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
          />
        </div>
        <div className='col-span-1 lg:col-span-2 w-full'>
          <h2 className='text-center mt-8 text-2xl font-medium'>Add Advertisement</h2>
          <p className='text-center pt-2 pb-4'>Add Advertisement Slider Image URL</p>
          <div className='mb-4'>
            <label
              htmlFor='advertisement_1'
              className='block text-sm font-medium text-gray-700'
            >
              Advertisement 1
            </label>
            <input
              type='text'
              id='advertisement_1'
              name='advertisement_1'
              className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='advertisement_2'
              className='block text-sm font-medium text-gray-700'
            >
              Advertisement 2
            </label>
            <input
              type='text'
              id='advertisement_2'
              name='advertisement_2'
              className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='advertisement_3'
              className='block text-sm font-medium text-gray-700'
            >
              Advertisement 3
            </label>
            <input
              type='text'
              id='advertisement_3'
              name='advertisement_3'
              className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
            />
          </div>
        </div>

        <div className='col-span-1 lg:col-span-2 w-full'>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
          >
            Add Brand
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBrandPage;
