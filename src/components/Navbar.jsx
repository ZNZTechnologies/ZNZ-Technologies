import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import NavSidebar from "./NavSidebar";

const Navbar = ({showLogo}) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {
            showLogo ? <img src="assets/photos/logo.png" alt="" width={200} height={83} /> :  ""
          }
        </div>
        <div className="menu-icon " onClick={handleShowNavbar}>
          <NavSidebar
            icon={<FaBarsStaggered className={`${showNavbar && "active"}`} />}
          />
        </div>
      </div>
    </nav>
  );  
};

export default Navbar;
