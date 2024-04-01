import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function AnimationFadeInFadeOut() {

    const objectCurrentOpacity = useState(new Animated.Value(0))[0]


    const onPressFadeIn = () => {
        fadeAnimation(1)
    }
    const onPressFadeOut = () => {
        fadeAnimation(0)
    }

    const fadeAnimation = (value) => { 
        Animated.timing(objectCurrentOpacity,{toValue: value}).start()
    }

    renderAnimatedView = () => {
        return (
            <View>
                <Animated.View style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'black',
                    borderRadius: 100 / 2,
                    opacity: objectCurrentOpacity
                }}>
                </Animated.View>
            </View>
        )
    }

    onPressText = (title, onPress) => {
        return (
            <TouchableOpacity onPress={onPress}>
                <Text> {title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{  alignItems: 'center', opacity: 1, justifyContent:'center' }}>
            {this.renderAnimatedView()}
            {this.onPressText("Fade in", onPressFadeIn)}
            {this.onPressText("Fade out", onPressFadeOut)}
        </View>
    )
}

const styles = StyleSheet.create({})