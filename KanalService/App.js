/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Provider } from 'react-redux';
import store from './src/redux/store';
import StackNavigation from './navigators/StackNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}
