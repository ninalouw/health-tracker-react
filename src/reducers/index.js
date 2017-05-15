import { combineReducers } from 'redux';
import FoodsReducer from './reducer_foods';
import FoodCaloriesReducer from './reducer_food_calories';

const rootReducer = combineReducers({
  foods: FoodsReducer,
  foodCalories: FoodCaloriesReducer,
});

export default rootReducer;
