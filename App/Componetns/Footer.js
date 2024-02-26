import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FooterTouchableButton from './Buttons/FooterTouchableButton'

export default function Footer() {



    return (
        <View style={{
            flexDirection:'row',
            position:'absolute',
            justifyContent:'space-evenly',
            bottom:0,
            zIndex:1,
            width:"100%",
            backgroundColor:'white',
            paddingVertical:10,
            borderWidth:1,
            borderColor:'gray',
            backgroundColor:'#034883',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,

            }}>
                <FooterTouchableButton title={'All'}/>
                <FooterTouchableButton title={'Incomplete'}/>
                <FooterTouchableButton title={'Complete'}/>
        </View>
    )
}

const styles = StyleSheet.create({})