import _ from 'lodash';
import { FETCH_FOODS, FETCH_FOOD, DELETE_FOOD, ENABLE_EDIT_FOOD, EDIT_FOOD } from '../actions/index';

const INITIAL_STATE = { foodList: [], food: null, editMode: false };
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DELETE_FOOD:
      return _.omit(state, action.payload);
    case FETCH_FOOD:
      return { ...state, food: action.payload };

    case FETCH_FOODS:
      return { ...state, foodList: action.payload };
    case ENABLE_EDIT_FOOD:
      return { ...state, food: action.payload, editMode: true };
    case EDIT_FOOD:
      return { ...state, food: action.payload, editMode: false };
    default:
      return state;
  }
}
