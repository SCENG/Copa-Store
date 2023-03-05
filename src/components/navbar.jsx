import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AddressBook, ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  const [ Toggle, showMenu ] = useState(false)

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact">
          <AddressBook className="adddress icon" size={32} /> Contact
        </Link>
        <Link to="/about"> About </Link>
        <Link to="/cart">
          <ShoppingCart className="cart " size={30} />
        </Link>
      </div>
    </div>
  );
};
