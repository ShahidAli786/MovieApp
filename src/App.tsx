/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import {Provider} from 'react-redux';
// import {ThemeProvider} from '@theme/theme-provider';
// import AppContainer from '@navigations/AppContainer';
// import {store} from '@store/createStore';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <ThemeProvider>
//         <AppContainer />
//       </ThemeProvider>
//     </Provider>
//   );
// }

import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@theme/theme-provider';
import {store} from '@store/createStore';
import {PaperProvider} from 'react-native-paper';
import DynamicForm from '@screens/dynamic-form/DynamicForm';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <PaperProvider>
          <DynamicForm />
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
}
