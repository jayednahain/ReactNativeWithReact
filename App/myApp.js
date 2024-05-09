import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function MyApp() {
    return (
        <View style={{}}>
            <Text>Show data</Text>
            <Text>Show data</Text>
            <Text>Show data</Text>
            <TextInput testID="5" style={{ borderColor: 'red', borderWidth: 1 }} />
            <ChildComponent/>
        </View>

    )
}

function ChildComponent() {
  return (
    <View>
      <Text>ChildComponent</Text>
    </View>
  )
}

