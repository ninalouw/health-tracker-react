import { FETCH_FOOD_CALORIES, FETCH_FOOD_CALORIE } from '../actions/index';

const INITIAL_STATE = { foodCalorieList: [], food: null };
export default function (state = INITIAL_STATE, action) {
  console.log('Action received', action);
  switch (action.type) {
    case FETCH_FOOD_CALORIES:
      return { ...state, foodCalorieList: action.payload.hits };
    case FETCH_FOOD_CALORIE:
      return { ...state, food: action.payload };
    default:
      return state;
  }
}

