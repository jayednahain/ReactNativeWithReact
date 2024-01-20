import React from 'react'
import { Text, View } from 'react-native'
import Counter from './components/counter'
export default function MyApp() {
    return (
        <View>
            <Text>hellow</Text>
			<Counter id={1} />
        </View>
  )
}
