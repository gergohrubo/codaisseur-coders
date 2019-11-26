import { combineReducers } from "redux";
import developerReducer from './developers/reducer.js'
import sliceReducer from './slice/reducer'

export default combineReducers({
  developers: developerReducer,
  post: sliceReducer
});

// export default function combinedReducer(state = {
//   developers: undefined,
//   post: undefined
// }, action) {
//   return {
//     developers: developerReducer(state.developers, action),
//     post: sliceReducer(state.post, action)
//   };
// }
