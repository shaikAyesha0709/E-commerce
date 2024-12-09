import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";



const Nav = () => {
  return (
  <div className='Nav'>
      <Link to="/" className="nav-link"><h1>Add Item</h1></Link>
      <Link to="/view" className="nav-link"><h1>View Items</h1></Link>
      <Link to="/orders" className="nav-link"><h1>Orders</h1></Link>
      <button className='logout'><CiLogout /></button>
    </div>
  );
}

export default Nav;
