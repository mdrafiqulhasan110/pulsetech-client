import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className='flex h-[50vh] items-center justify-center'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      state={location.pathname}
      to='/signin'
    ></Navigate>
  );
};

export default PrivateRoute;
