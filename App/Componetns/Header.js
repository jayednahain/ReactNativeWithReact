import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontStyle } from '../Style/Style'

export default function Header() {

    touchableText = (title, backgroundColor, onPress) => {
        return (
            <TouchableOpacity style={[styles.touchableTextStyleContainer,{backgroundColor: backgroundColor }]} onPress={onPress}>
                <Text style={styles.touchableTextStyle}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    cursorColor={'#B4BCC2'}
                    style={[styles.inputStyle, fontStyle.H2]}></TextInput>
                <TouchableOpacity style={styles.addTaskButtonStyle}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Add Task</Text>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                {touchableText("complete All task", "#FF7B7A")}
                {touchableText("clear complete task", "#FF5858")}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    touchableTextStyleContainer: {
        
        borderTopLeftRadius: 150,
        borderBottomRightRadius: 150, elevation: 2,
        borderRadius: 5, borderWidth: 1, borderColor: "#FF7B7A"
    },
    touchableTextStyle: { paddingHorizontal: 20, fontWeight: 'bold', paddingVertical: 2 },
    inputStyle: {
        paddingLeft: 20,
        flexGrow: 1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#B4BCC2',
        backgroundColor: '#FAFAFA',
        borderBottomLeftRadius: 10
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