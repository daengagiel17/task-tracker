/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import AppStack from './src/navigator/AppStack';
import store from './src/source';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <AppStack />
    </Provider>
  );
}
