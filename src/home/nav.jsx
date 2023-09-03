import React from 'react';
import {  Link } from "react-router-dom";

import "./app.css";
const Navbar= () =>{
  return (
    <div className='navber'>
    <ul >
    <li>
      <Link to="/">about</Link>
    </li>
    <li>
      <Link to="/faq">Faq</Link>
    </li>
    <li>
      <Link to="/search">Search</Link>
    </li>
    <li>
      <Link to="/logout">Logout</Link>
    </li>
    </ul>
    </div>
  );
}
export default Navbar;