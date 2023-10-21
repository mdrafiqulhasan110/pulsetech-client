import { useContext, useState } from "react";
import { AiOutlineBars, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import MenuItems from "./MenuItems";
import { AuthContext } from "../../Firebase/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [view, setView] = useState(false);

  const handelSearchBar = () => {
    setView(!view);
  };

  return (
    <div>
      {/* Navbar for PC */}

      <div className='hidden lg:block shadow-md border-b'>
        <div className='navbar my-2 w-[85%] m-auto grid grid-cols-12 gap-2'>
          <div className='col-span-4'>
            <Link to={`/`}>
              <div className='flex items-center'>
                <img
                  className='w-[25%] h-12'
                  src='../favicon.png'
                  alt=''
                />
                <h2 className='text-3xl font-bold'>
                  <span className='text-[#3498db]  '>Pulse</span>Tech
                </h2>
              </div>
            </Link>
          </div>
          <div className='col-span-4'>
            <div className='form-control w-full'>
              <div className='input-group  w-full'>
                <input
                  type='text'
                  placeholder='Search…'
                  className='input input-bordered  w-full'
                />
                <button className='btn btn-square'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='gap-4 col-span-4 flex justify-end'>
            <div className='dropdown dropdown-end'>
              <label
                tabIndex={0}
                className='btn btn-ghost btn-square border-black'
              >
                <div className='indicator'>
                  <AiOutlineShoppingCart className='text-2xl' />
                  <span className='badge badge-xs indicator-item text-[#3498db]'>8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow'
              >
                <div className='card-body'>
                  <span className='font-bold text-lg'>8 Items</span>
                  <span className='text-info'>Subtotal: $999</span>
                  <div className='card-actions'>
                    <button className='btn btn-primary btn-block'>View cart</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='dropdown dropdown-end'>
              <label
                tabIndex={0}
                className='btn btn-ghost btn-circle'
              >
                <img
                  className='btn btn-ghost btn-circle border-[3497DA] p-.5'
                  src={user?.photoURL ? user.photoURL : "https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png"}
                />
              </label>
              <ul
                tabIndex={0}
                className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
              >
                {user ? (
                  <>
                    <li>
                      <p>
                        Hello, <span className='underline text-blue-500'>{user.displayName}</span>
                      </p>
                    </li>
                    <li>
                      <p onClick={() => logOut()}>Logout</p>
                    </li>
                  </>
                ) : (
                  <Link to={"/signin"}>
                    <li>
                      <p>LogIn</p>
                    </li>
                  </Link>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className=' bg-[#3498db] flex justify-center border-t-4 border-gray'>
          <ul className='w-[85%] font-semibold [&_li>*]:rounded-md  menu menu-horizontal gap-2  '>{MenuItems}</ul>
        </div>
      </div>

      {/* Navbar for mobile and Tab */}
      <div className='lg:hidden'>
        <div className='navbar bg-base-100 border-b shadow-md'>
          <div className='navbar-start'>
            <div className='drawer'>
              <input
                id='my-drawer'
                type='checkbox'
                className='drawer-toggle'
              />
              <div className='drawer-content'>
                {/* Page content here */}
                <label
                  htmlFor='my-drawer'
                  className='btn btn-ghost'
                >
                  <AiOutlineBars></AiOutlineBars>
                </label>
              </div>
              <div className='drawer-side z-10'>
                <label
                  htmlFor='my-drawer'
                  className='drawer-overlay'
                ></label>
                <ul className='menu  p-4 w-80 min-h-full bg-white  max-w-[60vw]'>
                  {/* Sidebar content here */}
                  {MenuItems}
                </ul>
                <div className='flex justify-end w-full  px-6 pt-6 pointer-events-none	'>
                  <RxCross2 className='bg-white text-red-500'></RxCross2>
                </div>
              </div>
            </div>
          </div>
          <div className='navbar-center'>
            <div className='flex items-center'>
              <img
                className='w-12'
                src='./favicon.png'
                alt=''
              />
              <h2 className='text-2xl font-bold'>
                <span className='text-[#3498db]  '>Pulse</span>Tech
              </h2>
            </div>
          </div>
          <div className='navbar-end'>
            <button
              onClick={() => handelSearchBar()}
              className={`btn btn-ghost ${view ? "text-red-500" : "block"}`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`p-2 bg-[#3498db] shadow-lg flex ${view ? "block" : "hidden"}`}>
          <div className='join m-auto'>
            <div>
              <input
                className=' w-full input input-bordered join-item'
                placeholder='Search'
              />
            </div>

            <button className='btn join-item'>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
