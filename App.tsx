
import React from 'react';
import type {PropsWithChildren} from 'react';
import { Provider } from 'react-redux';

import MyApp from './App/myApp';
import Positions from './App/Positions';

function App(): JSX.Element {
  return (
      <MyApp/>
  );
}


export default App;
