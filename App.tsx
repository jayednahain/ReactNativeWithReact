

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import {
} from 'react-native/Libraries/NewAppScreen';


import MyApp from './App/myApp';

function App(): JSX.Element {
  return (
    <MyApp/>
  );
}


export default App;
