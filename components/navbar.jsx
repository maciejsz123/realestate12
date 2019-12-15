import React from 'react';

function Navbar() {
  return(
    <div className='navbar navbar-expand-sm bg-light justify-content-center row'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a className='navbar-brand' href='1'>LOGO</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='1'>rent</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='1'>buy</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='1'>home</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
