

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import {
} from 'react-native/Libraries/NewAppScreen';

//31-32
import SteStateWorkFlow from './App/1_classComponents/1_setStateWorkFlow';
//37
import ComponentDidMountUseWithApi from './App/1_classComponents/2_componentDidMountUseWithApi';
import MyApp from './App/myApp';




function App(): JSX.Element {
  return (
    // <SafeAreaView>
    //   <ScrollView style={{paddingHorizontal:20,paddingVertical:20}}>
    //     {/* <SteStateWorkFlow/> */}
    //     {/* <ComponentDidMountUseWithApi/> */}
    //     <MyApp/>
    //   </ScrollView>
    // </SafeAreaView>

    // <View>

    // </View>
    <MyApp/>
  );
}


export default App;
