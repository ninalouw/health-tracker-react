import { FETCH_FOODS, FETCH_FOOD } from '../actions/index';
// import _ from 'lodash';

const INITIAL_STATE = { foodList: [], food: null };
export default function (state = INITIAL_STATE, action) {
// export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_FOOD:
      // return { ...state, [action.payload.data.id]: action.payload.data };
      return { ...state, food: action.payload };

    case FETCH_FOODS:
      return { ...state, foodList: action.payload };
      // return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
