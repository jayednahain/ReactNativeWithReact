import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { fontStyle } from '../../Style/Style';

export default function FooterTouchableButton(props) {
    let { title, onPress } = props;
    return (
        <TouchableOpacity style={{
            backgroundColor:'#4E7594',
            borderColor:'white',
            borderWidth:0.2,
            // borderRadius:5,
            paddingHorizontal:20
            }} onPress={onPress}>
            <Text style={[fontStyle.H3,{color:'white'}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})