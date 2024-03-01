import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { UseSelector } from 'react-redux/es/hooks/useSelector'

export default function TodoList() {

    const todoList = useSelector((state) => state.todos)
    const filters = useSelector((state) => state.filters)
    //3.8
    const filteredTodoList = todoList.filter(todo => {
        const { status } = filters;
        switch (status) {
            case "Complete":
                return todo.completed;

            case "Incomplete":
                return !todo.completed;

            default:
                return true;
        }
    })
    //3.8
    // .filter(todo => {
    //     const { colors } = filters;
    //     if (colors.length>0){
    //         return colors.includes(todo.color)
    //     }

    // }
    
    
    // );

    const sortedTodoList = [...filteredTodoList].sort((a, b) => (a.id || 0) - (b.id || 0));


    // const sortedTodoList = [...filteredTodoList].sort((a, b) => a.id - b.id);


    const renderItem = ({ item }) => (
        <Todo todo={item} key={item.id} />
    );
    return (
        <FlatList
            contentContainerStyle={{ marginHorizontal: 10, paddingBottom: 40 }}
            keyExtractor={(item) => item.id?.toString()}
            data={sortedTodoList}
            renderItem={renderItem}
        />
    );
}

const styles = StyleSheet.create({})
