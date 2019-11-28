import React from 'react';

function searchActive(e) {
  e.target.classList.toggle('activeSearch');
}

function Options() {
  return(
    <div className='navbar navbar-expand-md'>
        <ul className="nav navbar-nav w-100 nav-justified">
          <li className="nav-item"><input type='text' placeholder='city' value='' /></li>
          <li className='nav-item'>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">price
              <span className="caret"></span></a>
              <div className="dropdown-menu">
                <input placeholder='from' value=''/>
                <input placeholder='to' value='' />
              </div>
            </li>
          </li>
          <li className='nav-item'>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">surface
              <span className="caret"></span></a>
              <div className="dropdown-menu">
                <input placeholder='from' value=''/>
                <input placeholder='to' value='' />
              </div>
            </li>
          </li>
          <li className='nav-item'>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">beds
              <span className="caret"></span></a>
              <div className='dropdown-menu'>
                <div className='btn-group'>
                  <button className='btn btn-info'>studio</button>
                  <button className='btn btn-info'>1</button>
                  <button className='btn btn-info'>2</button>
                  <button className='btn btn-info'>3</button>
                </div>
              </div>
            </li>
          </li>
          <li className='nav-item'>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">home types
              <span className="caret"></span></a>
              <div className='dropdown-menu'>
                <div className='flex-d flex-row-reverse'>
                  <h3>Home type</h3>
                  <div className='p-2'><label><input type='checkbox' value='flat'  /> flat</label></div>
                  <div className='p-2'><label><input type='checkbox' value='flat'  /> swimming pool</label></div>
                  <div className='p-2'><label><input type='checkbox' value='flat'  /> kitchen</label></div>
                </div>
              </div>
            </li>
          </li>
        </ul>
    </div>
  )
}

export default Options;
