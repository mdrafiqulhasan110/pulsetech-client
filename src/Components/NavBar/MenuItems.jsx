import { NavLink } from "react-router-dom";

const MenuItems = (
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
    <li>
      <NavLink to={"signin"}>Login</NavLink>
    </li>
  </>
);

export default MenuItems;
