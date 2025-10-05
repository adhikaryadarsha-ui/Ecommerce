import React, { useEffect, useState } from 'react'
import Logo from '../../components/Assets/logo.png'
import './Navbar.css'
import Cart from "../../components/Assets/cart_icon.png";
import {Link} from 'react-router-dom';




function Navbar() {
    const [menu, setMenu]= useState('Shop')

    const [sticky, setSticky] =useState();

    useEffect(()=>{
      if(window.scrollY>50){
        setSticky(true)
      }
      else{
         setSticky(false);
      }
    },[])

  return (
    <div>
      <nav className={sticky ? "fixed" : ""}>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src={Logo} alt="logo" />
              SHOPPER
            </div>
            <div className="menu-list">
              <ul>
                <li onClick={() => setMenu("Shop")}>
                  <Link to="/"> Shop</Link>
                  {menu === "Shop" ? <hr /> : ""}
                </li>
                <li onClick={() => setMenu("Men")}>
                  <Link to="/men">Men</Link>
                  {menu === "Men" ? <hr /> : ""}
                </li>
                <li onClick={() => setMenu("Women")}>
                  <Link to="/women">Women</Link>
                  {menu === "Women" ? <hr /> : ""}
                </li>
                <li onClick={() => setMenu("Kids")}>
                  <Link to="/kids">Kids</Link>
                  {menu === "Kids" ? <hr /> : ""}
                </li>
              </ul>
            </div>
            <div className="right-nav">
              <button className="btn btn-login">
                <Link to="/login">Login</Link>
              </button>
              <Link to="/cart">
                <img src={Cart} alt="cart icon" className="cart_icon" />
              </Link>
              <p className="cart-number">0</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
