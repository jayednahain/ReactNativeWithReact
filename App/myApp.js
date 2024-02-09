import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Positions from './Positions'
import FlexBox from './FlexBox'
import FlexBasis from './FlexBasis'
export default function MyApp() {
    return (
        <View style={{margin:10}}>
            <Positions/>
            <FlexBox/>
            <FlexBasis/>
        </View>
            
  )
}

