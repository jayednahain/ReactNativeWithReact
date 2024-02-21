import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

export default function TodoList() {

    const todoList = useSelector((state) => state.todos)

    return (
        <View style={{}}>
            <Text>TodoList</Text>
            {todoList.map((todo) => (
                <Todo todo={todo} key={todo.id} />
            ))}

        </View>
    )
}

const styles = StyleSheet.create({})