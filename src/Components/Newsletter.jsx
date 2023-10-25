const Newsletter = () => {
  return (
    <div className='bg-info py-8'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-semibold text-white'>Subscribe to Our Newsletter</h2>
          <p className='mt-2 text-lg text-white'>Stay up to date with our latest news and updates.</p>
        </div>
        <div className='mt-6 flex justify-center'>
          <div className='w-full sm:w-2/3 lg:w-1/2'>
            <div className='flex items-center bg-white rounded-full shadow-lg'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full border-0 border-r py-2 px-4 rounded-l-full focus:outline-none'
              />
              <button className='bg-info-500 text-black py-2 px-4 rounded-r-full hover:bg-info-600 transition duration-300'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
