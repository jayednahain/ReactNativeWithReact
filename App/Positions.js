import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Positions() {
    return (
        <View>
        <View style={styles.parent}>
            <Text style={styles.textStyle}>parent</Text>
            <View style={styles.childOne}>
                <Text style={styles.textStyle}>childOne</Text>
            </View>
            <View style={styles.childTwo}>
                <Text style={styles.textStyle}>childTwo</Text>
            </View>
            <View style={styles.childThree}>
                <Text style={styles.textStyle}>childThree</Text>
            </View>
        </View>
        </View>
            
  )
}


const styles =  StyleSheet.create({
    textStyle:{
        padding:3
    },
    parent:{
        margin:20,
        backgroundColor:'#EFF0E9',
        padding:5,
        borderWidth:0.5,
        // position:'relative',
        // position:'absolute'
    },
    childOne:{
        backgroundColor:'#B3C2B3',
        height:50,
        borderWidth:0.5,
    },
    childTwo:{
        backgroundColor:'#C6D2C5',
        height:50,
        borderWidth:0.5,
    },
    childThree:{
        backgroundColor:'#D7E1DB',
        height:50,
        borderWidth:0.5,
        position:'absolute'
        
       
    }
})
