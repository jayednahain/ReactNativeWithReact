import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FlexBasis from './CSSDesigen/FlexBesis'
import FlexShrink from './CSSDesigen/FlexShrink'
import DynamicUi from './ReactNativeFeature/DynamicUi'

export default function MyApp() {
    return (
        <View style={{flex:1}}>
            {/* <FlexBasis/> */}
            {/* <FlexShrink /> */}
            <DynamicUi/>
        </View>
            
  )
}

