import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { List, X, ShoppingCart, Files, Storefront } from "phosphor-react";
import "./navbar.scss";

export const Navbar = () => {
  const [ toggle, setToggle ] = useState(false)
  const menuName = ['Shop', 'Contact', 'About', <ShoppingCart className="cart " size={30} />]
  const menuLink = ['shop', 'contact', 'about', 'cart']
  console.log(menuLink.length)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.elijah} alt="logo" /> */}
      </div>
      <ul className="app__navbar-links"> 
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

      <div className="app__navbar-menu">
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






    // <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
    //   <ul className="nav__list grid">
    //     <li className="nav__item ">
    //       <Link to="/" className="nav__link active-link">
    //         <Storefront className="uil uil-estate nav__icon"/> Shop
    //       </Link>
    //     </li>

    //     <li className="nav__item ">
    //       <Link to="/contact" className="nav__link">
    //         <Envelope className="uil uil-file-alt nav__icon"/> Contact
    //       </Link>
    //     </li>

    //     <li className="nav__item ">
    //       <Link to="/about" className="nav__link">
    //         <Files className=" nav__icon"/> About
    //       </Link>
    //     </li>

    //     <li className="nav__item ">
    //       <Link to="/cart" className="nav__link">
    //         <ShoppingCart className="cart " size={30} />
    //       </Link>
    //     </li>
    //   </ul>

    //   <X className=" nav__close" onClick={() => showMenu(!Toggle)}/>
    // </div>

    // <div className="navbar">
    //   <div className="links">
    //     <Link to="/"> Shop </Link>
    //     <Link to="/contact">
    //       <AddressBook className="adddress icon" size={32} /> Contact
    //     </Link>
    //     <Link to="/about"> About </Link>
    //     <Link to="/cart">
    //       <ShoppingCart className="cart " size={30} />
    //     </Link>
    //   </div>
    // </div>
  );
};
