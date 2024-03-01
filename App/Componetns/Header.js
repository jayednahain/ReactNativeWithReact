import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { fontStyle } from '../Style/Style'
import FooterTouchableButton from './Buttons/FooterTouchableButton'
import TodoActions from '../Redux/Todos/Actions'
import { useDispatch, useSelector } from 'react-redux'
import { Keyboard } from 'react-native';


export default function Header() {
    const [inputData, setInputData] = useState("")
    const dispatch = useDispatch()

    const handleInput = (event) => {
        setInputData(event)
    }

    const submitHandler = () => {
        dispatch(TodoActions.added(inputData))
        setInputData("")
        Keyboard.dismiss()

    }

    const completeAllTask = ()=>{
        dispatch(TodoActions.allCompleted())
    }

    const clearCompleted = ()=>{
        dispatch(TodoActions.clearCompleted())
    }


    return (
        <View style={{
            backgroundColor: "#034883", paddingHorizontal: 10, paddingTop: 15,
            borderBottomLeftRadius: 15, borderBottomRightRadius: 15
        }}>
            <View style={{ flexDirection: 'row', }}>
                <TextInput
                
                    value={inputData}
                    onChangeText={handleInput}
                    cursorColor={'#B4BCC2'}
                    style={[styles.inputStyle, fontStyle.H2]}></TextInput>
                <TouchableOpacity onPress={submitHandler} style={styles.addTaskButtonStyle}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Add Task</Text>
                </TouchableOpacity>

            </View>
            <View style={{
                justifyContent: 'space-around', flexDirection: 'row',
                paddingVertical: 15,
            }}>
                <FooterTouchableButton onPress={completeAllTask} title={'complete All'} />
                <FooterTouchableButton onPress={clearCompleted} title={'clear complete'} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    // touchableTextStyleContainer: {

    //     borderTopLeftRadius: 150,
    //     borderBottomRightRadius: 150, elevation: 2,
    //     borderRadius: 5, borderWidth: 1, borderColor: "#FF7B7A"
    // },
    // touchableTextStyle: { paddingHorizontal: 20, fontWeight: 'bold', paddingVertical: 2 },
    inputStyle: {
        paddingLeft: 20,
        flexGrow: 1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#B4BCC2',
        backgroundColor: '#FAFAFA',
        borderBottomLeftRadius: 10,
        // height:"40%"
    }
    ,
    addTaskButtonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: 80,
        backgroundColor: '#FFCFD6',
        borderWidth: 1,
        borderColor: '#F5BCC5',
        position: 'relative',
        right: 3,
        borderTopRightRadius: 10
    }

})