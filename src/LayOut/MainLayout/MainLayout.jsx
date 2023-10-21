import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/NavBar/Footer";

const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <div>
        <Navbar></Navbar>
        <div className='md:w-[85%] mx-auto px-4 py-2'>
          <ToastContainer />
          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
export default MainLayout;
