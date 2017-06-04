import { FETCH_FOOD_CALORIES } from '../actions/index';

const INITIAL_STATE = { foodCalorieList: [], food: null };
export default function (state = INITIAL_STATE, action) {
  console.log('Action received', action);
  switch (action.type) {
    case FETCH_FOOD_CALORIES:
      return { ...state, foodCalorieList: action.payload.hits };
    default:
      return state;
  }
}

