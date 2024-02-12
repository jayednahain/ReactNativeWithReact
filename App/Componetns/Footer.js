import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Footer() {
    return (
        <View style={{
            flexDirection:'row',
            position:'absolute',
            justifyContent:'space-evenly',
            bottom:0,
            zIndex:1,
            width:"100%"
            }}>
            <Text>Footer</Text>
            <Text>Footer</Text>
            <Text>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({})