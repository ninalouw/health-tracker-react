// export * from './action_types'
import axios from 'axios';

export const FETCH_FOODS = 'FETCH_FOODS';

const ROOT_URL = 'http://localhost:3000/api/v1';
const config = {
  headers: {
    'Authorization': 'aa5179148ff1a49c33eb93b5060dae592ed25b33c0d5aa165b46e46d7cd53b69' }
};

export function fetchFoods() {
  return dispatch => {
    axios.get(`${ROOT_URL}/foods`, config)
   .then(function(response) {
     console.log(response);
     dispatch({
       type: FETCH_FOODS,
       payload: response.data,
     });
   });
  }
}
