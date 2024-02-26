import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { fontStyle } from '../Style/Style';

export default function RemainingTaskShow() {

    const todoList = useSelector((state) => state.todos)
    const todoListNotCompleted = todoList.filter(todo => !todo.completed).length;

    return (
        <View style={{
            backgroundColor:'#034883',
            position: 'absolute',
            bottom: 70,
            right: 0,
            marginRight: 20,
            height:50,
            width:100,
            alignItems:'center',
            justifyContent:'center',
            // borderRadius:25
            
        }}>
            <Text style={[{color:'white'},fontStyle.H3]}>Task left {todoListNotCompleted}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})