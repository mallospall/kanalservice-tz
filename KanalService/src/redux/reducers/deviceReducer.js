/* eslint-disable default-param-last */

import {
    SET_IPAD, SET_PHONE
  } from '../types/types';
  
  export default (state = false, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case SET_IPAD: 
        return true;
        
      case SET_PHONE:
        return false
  
      default:
        return state;
    }
  };
  