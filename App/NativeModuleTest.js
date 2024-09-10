import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NativeModules } from 'react-native';
const { CalenderModule } = NativeModules
console.log(CalenderModule)

export default function NativeModuleTest() {
  onPress = () => {
    console.warn("TEST TEST")
    CalenderModule.createCalendarEvent('testName', 'testLocation');

    CalenderModule.returnDataToCross((nativeResponse) => {
      console.log(nativeResponse)
    })

    CalenderModule.sendPromiseDataToCross((response) => {
      console.log( "sendPromiseDataToCross: " +response)
    })

  }

  return (
    <View>
      <Text>NativeModuleTest</Text>
      <Button onPress={onPress} title='Press Press' />
    </View>
  )
}

const styles = StyleSheet.create({})