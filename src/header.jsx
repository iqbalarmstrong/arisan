import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import About from './about';

function Header() {
  return (
    <div className="header">
      <div className="kanan">
        <h1>Name Picker</h1>
        <p>Website for picking a random name</p>
      </div>
      <div className="kiri">
        <Link className="link" to="/about">About</Link>
      </div>
    </div>
  );
}

export default Header;
