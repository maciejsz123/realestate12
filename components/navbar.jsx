import React from 'react';

function Navbar() {
  return(
    <div className='navbar navbar-expand-sm bg-light justify-content-center row'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a className='navbar-brand' href='#'>LOGO</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>rent</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>buy</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>home</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
