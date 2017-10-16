// export * from './action_types'
import axios from 'axios';

export const FETCH_FOODS = 'FETCH_FOODS';
export const ENABLE_EDIT_FOOD = 'ENABLE_EDIT_FOOD';
export const ENABLE_CREATE_FOOD = 'ENABLE_CREATE_FOOD';
export const EDIT_FOOD = 'EDIT_FOOD';
export const FETCH_FOOD = 'FETCH_FOOD';
export const CREATE_FOOD = 'CREATE_FOOD';
export const DELETE_FOOD = 'DELETE_FOOD';
export const FETCH_FOOD_CALORIES = 'FETCH_FOOD_CALORIES';
export const FETCH_FOOD_CALORIE = 'FETCH_FOOD_CALORIE';
export const CREATE_FOOD_CALORIE = 'CREATE_FOOD_CALORIE';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

const ROOT_URL = 'http://localhost:3000/api/v1';
const config = {
  headers: {
    Authorization: '728643a127194cb618050aeea81bbf9056e907cbe3b1d60432c13b658034b31b' },
};

export function fetchFoods() {
  return (dispatch) => {
// axios.defaults.headers.common.authorization = 'aa5179148ff1a49c33eb93b5060dae592ed25b33c0d5aa165b46e46d7cd53b69';
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
      console.log(response, 'fetched food action');
      dispatch({
        type: FETCH_FOOD,
        payload: response.data,
      });
    });
  };
}

export function deleteFood(id, callback) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/foods/${id}`, config)
    .then(() => { return callback(); });
    dispatch({
      type: DELETE_FOOD,
      payload: id,
    });
  };
}

export function enableEditMode(id) {
  return (dispatch) => {
    dispatch({
      type: ENABLE_EDIT_FOOD,
      payload: id,
    });
  };
}

export function enableCreateMode(id) {
  return (dispatch) => {
    dispatch({
      type: ENABLE_CREATE_FOOD,
      payload: id,
    });
  };
}

export function editFood(id, values, callback) {
  return (dispatch) => {
    const request = axios.patch(`${ROOT_URL}/foods/${id}`, config, { data: { food: values } })
      .then(() => { return callback(); });
    dispatch({
      type: EDIT_FOOD,
      payload: request,
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

export function fetchFoodCalorie(id) {
  return (dispatch) => {
    axios.get(`https://api.nutritionix.com/v1_1/item?id=${id}&appId=${API_ID}&appKey=${API_KEY}`)
   .then((response) => {
     console.log(response);
     dispatch({
       type: FETCH_FOOD_CALORIE,
       payload: response.data,
     });
   });
  };
}

export function createFoodCalorie(values, callback) {
  const request = axios.post(`${ROOT_URL}/foods`, config, { data: { food: values } })
    .then(() => { return callback(); });
  return {
    type: CREATE_FOOD_CALORIE,
    payload: request,
  };
}

export function createFood(values, callback) {
  const request = axios.post(`${ROOT_URL}/foods`, config, { data: { food: values } })
  .then(() => { return callback(); });
  return {
    type: CREATE_FOOD,
    payload: request,
  };
}

export function toggleModal() {
  return {
    type: TOGGLE_MODAL,
  };
}

