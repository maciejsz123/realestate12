import { OPTIONS_CHANGE, HOME_TYPE_CHANGE} from '../actions/types';
import room1 from '../imgs/room1.jpg';
import room2 from '../imgs/room2.jpg';
import room3 from '../imgs/room3.jpg';
import room4 from '../imgs/room4.jpg';
import room5 from '../imgs/room5.jpg';
import face1 from '../imgs/face1.jpg';
import face2 from '../imgs/face2.jpg';
import face3 from '../imgs/face3.jpg';

const initialState = {
  city: '',
  priceFrom: '',
  priceTo: '',
  surfaceFrom: '',
  surfaceTo: '',
  beds: '',
  homeType: [
    {value: 'house', checked: true},
    {value: 'manufactured', checked: true},
    {value: 'multi-family', checked: true},
    {value: 'apartment', checked: true},
    {value: 'townhome', checked: true}
  ],
  houses: [
    {
      city: 'Warszawa',
      street: 'Rynek 45',
      price: 50000,
      surface: 40,
      beds: 'studio',
      img: room1,
      faceImg: face1,
      userName: 'Ewa Kowalska',
      type: 'house'
    }, {
      city: 'Wrocław',
      street: 'Nowa 1',
      price: 12003400,
      surface: 120,
      beds: '3',
      img: room2,
      faceImg: face2,
      userName: 'Ewa Nowak',
      type: 'manufactured'
    }, {
      city: 'Poznań',
      street: 'Wrocławska 54',
      price: 320000,
      surface: 220,
      beds: '3',
      img: room3,
      faceImg: face3,
      userName: 'Jan Kowalski',
      type: 'multi-family'
    }, {
      city: 'Kraków',
      street: 'Rynek 15',
      price: 30000,
      surface: 20,
      beds: '1',
      img: room4,
      faceImg: face1,
      userName: 'Monika Nowak',
      type: 'apartment'
    }, {
      city: 'Kraków',
      street: 'Rynek 25',
      price: 35000,
      surface: 22,
      beds: '2',
      img: room5,
      faceImg: face1,
      userName: 'Monika Nowak',
      type: 'townhome'
    }, {
      city: 'Poznań',
      street: 'Rynek 54',
      price: 540000,
      surface: 70,
      beds: '2',
      img: room2,
      faceImg: face1,
      userName: 'Pawel Nowak',
      type: 'multi-family'
    }, {
      city: 'Wrocław',
      street: 'Rynek 5/5',
      price: 300000,
      surface: 45,
      beds: '1',
      img: room4,
      faceImg: face3,
      userName: 'Jan Kowalski',
      type: 'apartment'
    }, {
      city: 'Warszawa',
      street: 'Rynek 54',
      price: 300000,
      surface: 70,
      beds: '3',
      img: room1,
      faceImg: face1,
      userName: 'Monika Wójcik',
      type: 'apartment'
    }, {
      city: 'Wrocław',
      street: 'Nowa 1',
      price: 370000,
      surface: 40,
      beds: 'studio',
      img: room1,
      faceImg: face1,
      userName: 'Ewa Nowak',
      type: 'apartment'
    }, {
      city: 'Kraków',
      street: 'Rynkowa 3',
      price: 450000,
      surface: 50,
      beds: '2',
      img: room5,
      faceImg: face2,
      userName: 'Jan Nowak',
      type: 'multi-family'
    },
  ]
};

export default function(state = initialState, action) {
  switch(action.type) {
    case OPTIONS_CHANGE:
      return {...state, [action.payload.name]: action.payload.value}

    case HOME_TYPE_CHANGE:
      let updatedType = state.homeType.map( item => {
        if(item.value === action.value) {
          return {
            value: action.value,
            checked: action.checked
          }
        } else {
          return item;
        }
      });
      return {...state, homeType: updatedType};

    default:
      return state;
  }
}
