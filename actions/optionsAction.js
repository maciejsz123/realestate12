import { OPTIONS_CHANGE, HOME_TYPE_CHANGE } from './types';

export function changeOptions(e) {
  return function(dispatch) {
    if(e.target.name === 'homeType') {
      dispatch({
        type: HOME_TYPE_CHANGE,
        value: e.target.value,
        checked: e.target.checked
      });
    } else {
      dispatch({
        type: OPTIONS_CHANGE,
        payload: e.target
      });
    }
  }
}
