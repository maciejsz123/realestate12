import React from 'react';

function Pagination() {
  return(
    <div className='row'>
      <div className='col-12 bg-info '>
        <div className='pagination justify-content-center'>
          <li className='page-item'><a href='#' className='page-link'>Previous</a></li>
          <li className='page-item'><a href='#' className='page-link'>1</a></li>
          <li className='page-item'><a href='#' className='page-link'>2</a></li>
          <li className='page-item'><a href='#' className='page-link'>3</a></li>
          <li className='page-item'><a href='#' className='page-link'>Next</a></li>
        </div>
      </div>
    </div>
  )
}

export default Pagination;
