import { combineReducers } from 'redux';
import authReducer from './authReducer';
import deviceReducer from './deviceReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  device: deviceReducer,

});

export default rootReducer;
