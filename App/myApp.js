import React from 'react'
import { Text, View } from 'react-native'
import CounterHook from './components/counter'
export default function MyApp() {
    return (
        <View>
            <Text>hellow</Text>
			{/* <Counter id={1} /> */}
            <CounterHook id={1} />
        </View>
  )
}
