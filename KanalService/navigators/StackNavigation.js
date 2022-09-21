/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { Dimensions } from 'react-native';
import { ipad, phone } from '../src/redux/actions/deviceAction';

function StackNavigation() {
  const dispatch = useDispatch();
  const { auth } = useSelector((s) => s);
  const [pad, SetPad] = useState(false)
  const {height, width} = Dimensions.get('window'); 
  const aspectRatio = height/width;
  useEffect(()=>{
      if(aspectRatio < 1.6){
          dispatch(ipad())
      }else{
          dispatch(phone())
      }
  },[])
  return (
    <NavigationContainer>
      { auth ? (
        <AppNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
}

export default StackNavigation;
