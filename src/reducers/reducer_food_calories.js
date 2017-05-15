import { FETCH_FOOD_CALORIES } from '../actions/index';

export default function (state = [], action) {
  console.log('Action received', action);
  switch(action.type) {
    case FETCH_FOOD_CALORIES:
      return [action.payload.data, ...state];
  }
  return state;
}
