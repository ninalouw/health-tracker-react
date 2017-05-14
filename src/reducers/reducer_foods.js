import { FETCH_FOODS } from '../actions/index';

const INITIAL_STATE = { foodList: [], food: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FOODS:
      return { ...state, foodList: action.payload };
    default:
      return state;
  }
}
