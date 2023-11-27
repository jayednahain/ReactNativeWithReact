import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomSearchBox = (props) => {
    let {onSearchHandler,placeholder} = props;
  return (
    <TextInput
        onChangeText={onSearchHandler}
        placeholder={placeholder}
        style={styles.textInputStyle}
    ></TextInput>
  )
}

export default CustomSearchBox

const styles = StyleSheet.create({
    textInputStyle:{
        width:"100%",
        fontSize: 20, 
        borderWidth: 0.5,
        borderRadius: 5,
        padding:5,
        elevation:3
    }
})