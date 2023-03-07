import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { List, X, ShoppingCart, Files, Storefront } from "phosphor-react";
import "./navbar.scss";

export const Navbar = () => {
  const [ toggle, setToggle ] = useState(false)
  const menuName = ['Shop', 'Contact', 'About', <ShoppingCart className="cart " size={30} />]
  const menuLink = ['', 'contact', 'about', 'cart']
  console.log(menuLink.length)

  return (
    <nav className="app_navbar">
      <div className="app_navbar-logo">
        {/* <img src={images.elijah} alt="logo" /> */}
      </div>
      <ul className="app_navbar-links"> 
      {
        ['Shop', 'Contact', 'About', <ShoppingCart className="cart" size={30}/>].map((item, link) => (
          <li key={item}>
            <Link to={`/${menuLink[link]}`} onClick={() => setToggle(false)}>
              {item}
            </Link>
          </li>
        ))
      }
      </ul>

      <div className="app_navbar-menu">
        <List onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <X onClick={() => setToggle(false)} />
            <ul>
            {
              ['Shop', 'Contact', 'About', <ShoppingCart className="cart" size={30}/>].map((item, link) => (
                <li key={item}>
                  <Link to={`/${menuLink[link]}`} onClick={() => setToggle(false)}>
                    {item}
                  </Link>
                </li>
              ))
            }
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
