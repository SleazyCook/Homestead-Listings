import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="listings">Listings</Link>
      <Link to="login">Login</Link>
      <Link to="profile">Profile</Link>
      <Link to="about">About</Link>
      <Link to="editListing">Edit</Link>
      <Link to="createListing">Create Listing</Link>
    </nav>
  )
}

export default Navbar;