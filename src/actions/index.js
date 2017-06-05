// export * from './action_types'
import axios from 'axios';

export const FETCH_FOODS = 'FETCH_FOODS';
export const FETCH_FOOD_CALORIES = 'FETCH_FOOD_CALORIES';
export const FETCH_FOOD = 'FETCH_FOOD';

const ROOT_URL = 'http://localhost:3000/api/v1';
const config = {
  headers: {
    Authorization: 'aa5179148ff1a49c33eb93b5060dae592ed25b33c0d5aa165b46e46d7cd53b69' },
};

export function fetchFoods() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/foods`, config)
   .then((response) => {
     console.log(response);
     dispatch({
       type: FETCH_FOODS,
       payload: response.data,
     });
   });
  };
}

export function fetchFood(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/foods/${id}`, config)
    .then((response) => {
      console.log(response);
      dispatch({
        type: FETCH_FOOD,
        payload: response.data,
      });
    });
  };
}


const API_KEY = '66464e4956c3d5667e8fe482be63deda';
const API_ID = '1e920e3e';

export function fetchFoodCalories(query) {
  return (dispatch) => {
    axios.get(`https://api.nutritionix.com/v1_1/search/${query}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=${API_ID}&appKey=${API_KEY}`)
   .then((response) => {
     console.log(response);
     dispatch({
       type: FETCH_FOOD_CALORIES,
       payload: response.data,
     });
   });
  };
}
