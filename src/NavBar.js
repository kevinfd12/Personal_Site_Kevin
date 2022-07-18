import React from 'react';
import './NavBar.css';

export const navNames = ['home', 'contact', 'July', 'august', 'september'];

const navList = navNames.map((name) => (
  <li className="list__item" key={name}>
    <a href={`#${name}`}>{name}</a>
  </li>
));

export const Navbar = () => (
  <nav className="nav">
    <div className='logo'>
        <a href="#home">
            <div className="logo__content"></div>
          </a>
        </div>
    <div className="nav__navlist-container">
        <ul className="list">{navList}</ul>
    </div>
  </nav>
);