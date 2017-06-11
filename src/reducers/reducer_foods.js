import { FETCH_FOODS, FETCH_FOOD, DELETE_FOOD } from '../actions/index';
import _ from 'lodash';

const INITIAL_STATE = { foodList: [], food: null };
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DELETE_FOOD:
      return _.omit(state, action.payload);
    case FETCH_FOOD:
      return { ...state, food: action.payload };

    case FETCH_FOODS:
      return { ...state, foodList: action.payload };
    default:
      return state;
  }
}
