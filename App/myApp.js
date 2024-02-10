import React, { useState } from 'react'
import { Text, View } from 'react-native'
import CounterHook from './components/counter'
export default function MyApp() {
    
    let [length, setLength ] = useState(8);
    let [checkNumber , setCheckNumber ] = useState(false);
    let [checkCharacter, setCheckCharacter] = useState(false);
    let [password, setPassword] = useState("")

    return (
        <View>

        </View>
    )
}
