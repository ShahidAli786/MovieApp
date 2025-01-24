/**
 * Sample React Native App Shahid Ali
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@theme/theme-provider';
import AppContainer from '@navigations/AppContainer';
import {store} from '@store/createStore';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
    </Provider>
  );
}
