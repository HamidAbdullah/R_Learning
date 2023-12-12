/**
 * React Native App for Learning React native.
 *
 * @format
 */

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AuthProvider } from './src/Navigation/authProvider';
import Routes from './src/Navigation/routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );

}

export default App;
