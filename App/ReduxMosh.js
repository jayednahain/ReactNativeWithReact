import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
var _ = require('lodash-contrib');  


export default function ReduxMosh() {
    const strTrip = str => str.trim();
    const strView = str => <Text>{str}</Text>
    const strUpperCase = str => str.toUpperCase();
    const strTransform =  _.pipeline(strTrip,strUpperCase,strView)


    return (
        <View>
            <Text>{strTransform("zakir  khan  ")}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})