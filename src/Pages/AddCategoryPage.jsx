import { toast } from "react-toastify";

const AddCategoryPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    toast.success("Category Created Successfully");
  };

  return (
    <div>
      <h1 className='mt-10  text-center text-3xl uppercase font-medium bg-gray-400 p-2 rounded-t-md'>Add Category Here</h1>
      <form
        onSubmit={handleSubmit}
        className='border rounded-b-md mx-auto p-4'
      >
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Name
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
            htmlFor='description'
            className='block text-sm font-medium text-gray-700'
          >
            Short description
          </label>
          <textarea
            id='description'
            name='description'
            className='w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
          />
        </div>
        <div className='w-full'>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategoryPage;
