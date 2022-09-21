/* eslint-disable react/jsx-filename-extension */
import { View, Text } from 'react-native';
import Form from '../src/components/Form';
import Header from '../src/components/Header';

function LoginScreen() {
  return (
    <>
    <Header/>
    <View style={{alignItems: 'center'}}>
      <Form />
    </View>
    </>
  );
}

export default LoginScreen;
