import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import { useContext } from "react";

const MenuItems = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/add_products"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/add_brands"}>Add Brand</NavLink>
      </li>
      <li>
        <NavLink to={"/add_category"}>Add Category</NavLink>
      </li>
      {!user ? (
        <li>
          <NavLink to={"signin"}>Login</NavLink>
        </li>
      ) : (
        <li onClick={() => logOut()}>
          <p>LogOut</p>
        </li>
      )}
    </>
  );
};

export default MenuItems;
