import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef } from 'react'

export default function Form() {

    const inputRef = useRef(null);
    // useEffect(() => {
    //     inputRef.current.focus();
    // }, [])

    // useLayoutEffect(() => {
    //     inputRef.current.focus();
    // }, [])
    
    const handleLayout = () => {
        inputRef.current.focus();
    };


    return (
        <View onLayout={handleLayout} style={{ margin: 20 }}>
            <TextInput
                line
                placeholder='Type something'
                ref={inputRef}
                style={{ borderWidth: 1 }} />
        </View>
    )
}

const styles = StyleSheet.create({})