import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontStyle } from '../Style/Style'
import FooterTouchableButton from './Buttons/FooterTouchableButton'

export default function Header() {


    return (
        <View style={{
            backgroundColor: "#034883", paddingHorizontal: 10, paddingTop: 15,
            borderBottomLeftRadius: 15, borderBottomRightRadius: 15
        }}>
            <View style={{ flexDirection: 'row', }}>
                <TextInput
                    cursorColor={'#B4BCC2'}
                    style={[styles.inputStyle, fontStyle.H2]}></TextInput>
                <TouchableOpacity  style={styles.addTaskButtonStyle}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Add Task</Text>
                </TouchableOpacity>

            </View>
            <View style={{
                justifyContent: 'space-around', flexDirection: 'row',
                paddingVertical: 15,
            }}>
                <FooterTouchableButton title={'complete All'} />
                <FooterTouchableButton title={'clear complete'} />
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