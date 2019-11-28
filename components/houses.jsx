import React, { Component } from 'react';
import HouseItem from './houseItem';
import Pagination from './pagination';

class Houses extends Component {
  constructor() {
    super();
    this.state = {
      houses: [
        {
          city: 'Warszawa',
          price: 50000
        }, {
          city: 'Wrocław',
          price: 120000
        }
      ]
    }
  }
  render() {
    const houses = this.state.houses.map( house => {
      return <HouseItem city={house.city} price={house.price}/>;
    });
    return(
      <div className='row' style={{minHeight: '100vh'}}>
        <div className='col-md-12 bg-warning'>
          {houses}
          <Pagination />
        </div>
      </div>
    )
  }
}

export default Houses;
