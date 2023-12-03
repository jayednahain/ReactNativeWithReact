

import React from 'react';
import type {PropsWithChildren} from 'react';
import { Provider } from 'react-redux';
import store from './App/redux/store';


import MyApp from './App/myApp';

function App(): JSX.Element {
  return (
    <Provider store={store }>
      <MyApp/>
    </Provider>
    
  );
}


export default App;
