import { combineReducers } from 'redux';
import FoodsReducer from './reducer_foods';

const rootReducer = combineReducers({
  foods: FoodsReducer,
});

export default rootReducer;
