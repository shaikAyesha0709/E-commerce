import React from 'react'
import "./Navbar.css"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Navbar() {
  const styles = {
    color:"black",
    textDecoration: 'none',
  };
  return (
      <>
   <div className="navbar">
 <Link to="/" style={styles}><h1 className='head'>SNEAKER HEAD</h1></Link> 
  <div className='search'>
   <input type="text" placeholder='Search the item' className='search-input'/><a className='search-btn'><CiSearch></CiSearch></a>
  </div>
  <ul >
    <Link to="/men" style={styles}><li>MEN</li></Link>
    <Link to="/women" style={styles}> <li>WOMEN</li></Link>
    <Link to="/kid" style={styles}><li>KIDS</li></Link>
  </ul>
  <div className='icons'>
  <Link to="/wishlist" style={styles}><h1><CiHeart></CiHeart></h1></Link> 
  <Link to="/cart" style={styles}><h1><CiShoppingCart></CiShoppingCart></h1></Link> 
    <h1>
    <div className="user-menu">
    <CiUser />
    <div className="dropdown">
      <button className="dropdown-btn">Edit Profile</button>
      <button className="dropdown-btn">Logout</button>
    </div>
  </div>
  </h1>
  </div>
  
 </div>
    </>
  );
}

export default Navbar;






