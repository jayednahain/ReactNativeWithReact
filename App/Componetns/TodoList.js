import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { usePanGestureHandler } from 'react-native-gesture-handler';

export default function TodoList() {
    // const { gestureHandler, translationX, state } = usePanGestureHandler();


    const todoList = useSelector((state) => state.todos)
    

    const renderItem = ({ item }) => (
        <Todo todo={item} key={item.id} />
    );

    return (
            <FlatList
                contentContainerStyle={{marginHorizontal:10}}
                keyExtractor={(item) => item.id.toString()}
                data={todoList}
                renderItem={renderItem}
            />
    )
}

const styles = StyleSheet.create({})
