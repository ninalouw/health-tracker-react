import { FETCH_FOOD_CALORIES, FETCH_FOOD_CALORIE, ENABLE_CREATE_FOOD } from '../actions/index';

const INITIAL_STATE = { foodCalorieList: [], food: null };
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FOOD_CALORIES:
      return { ...state, foodCalorieList: action.payload.hits };
    case FETCH_FOOD_CALORIE:
      return { ...state, food: action.payload };
    case ENABLE_CREATE_FOOD:
      return { ...state, food: action.payload, createMode: true };
    default:
      return state;
  }
}

