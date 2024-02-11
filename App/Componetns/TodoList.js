import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Todo from './Todo'

export default function TodoList() {
    return (
        <View>
            <Text>TodoList</Text>
            <Todo/>
        </View>
    )
}

const styles = StyleSheet.create({})