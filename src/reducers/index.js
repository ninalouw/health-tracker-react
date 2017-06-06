import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import FoodsReducer from './reducer_foods';
import FoodCaloriesReducer from './reducer_food_calories';

const rootReducer = combineReducers({
  foods: FoodsReducer,
  foodCalories: FoodCaloriesReducer,
  form: formReducer,
});

export default rootReducer;
