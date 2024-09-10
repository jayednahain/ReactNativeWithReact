
import React from 'react';
import type {PropsWithChildren} from 'react';
import { Provider } from 'react-redux';

import MyApp from './App/myApp';
import NativeModuleTest from './App/NativeModuleTest';

function App(): JSX.Element {
  return (

    <NativeModuleTest/>
    
  );
}


export default App;
