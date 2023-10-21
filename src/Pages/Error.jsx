import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/NavBar/Footer";

const Error = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Navbar></Navbar>
      <p className='text-center text-3xl'>Ooops Page Not found</p>
      <Footer></Footer>
    </div>
  );
};

export default Error;
