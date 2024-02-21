

import React from 'react';
import type {PropsWithChildren} from 'react';
import { Provider } from 'react-redux';
import MyApp from './App/myApp';
import store from './App/Redux/Store';



function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MyApp/>
    </Provider>
      
    
  );
}


export default App;
