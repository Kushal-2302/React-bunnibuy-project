import React, { useState } from "react";
import { NavLink,  useNavigate } from "react-router-dom";

const Navbar = () => {
  // let [menu , setMenu] = useState();
  let navigate = useNavigate()

  let handlelogout = () => {
    localStorage.removeItem("users");
    navigate("/", {replace : true})
  }
  return (
    <div className="navbar">
      <div className="logo">BunniBuy</div>
      <div className="links">
        <ul>
          <li>
            <NavLink to="/adminportal">Home</NavLink>
          </li>
          <li>
            <NavLink to="/adminportal/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/adminportal/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/adminportal/addusers">AddUsers</NavLink>
          </li>
          <li>
            <NavLink to="/adminportal/cartitems">CartItems</NavLink>
          </li>
          <li>
            <button onClick={handlelogout}>Logout</button>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
