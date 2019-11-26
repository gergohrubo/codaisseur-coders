import { combineReducers } from "redux";
import developerReducer from './developers/reducer.js'

export default combineReducers({
  developers: developerReducer
});