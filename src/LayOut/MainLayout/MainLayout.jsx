import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/NavBar/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  const [theme, setTheme] = useState(true);

  if (loading) {
    return (
      <div className='flex h-[50vh] items-center justify-center'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }

  return (
    <div
      data-theme={theme ? "light" : "dark"}
      className='min-h-screen flex flex-col justify-between dark:text-white'
    >
      <div>
        <Navbar
          setTheme={setTheme}
          theme={theme}
        ></Navbar>
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
