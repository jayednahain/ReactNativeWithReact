import { Animated, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native'
import React, { useState } from 'react'

export default function AnimationWithTranslate() {

    const { width, height } = Dimensions.get('window');
    const [isMovingRight, setIsMovingRight] = useState(true);

    const MoveLeftValue = useState(new Animated.Value(0))[0]
    const MoveDownValue = useState(new Animated.Value(0))[0]
    // const MoveRightValue = useState(new Animated.Value(0))[0]


    const getAnimationConfiguration = (toValue) => {
        return {
            toValue: toValue,
            duration: 2000,
            useNativeDriver: false
        }
    }


    moveBall = () => {
        if (isMovingRight) {
            Animated.timing(MoveLeftValue, getAnimationConfiguration(width - 100)).start(() => {
                setIsMovingRight(false);
            })
        }
        else {
            
        }
    }

    renderAnimatedView = () => {
        return (
            <TouchableOpacity onPress={moveBall} style={{ marginVertical: 10 }}>
                <Animated.View style={{
                    transform: [
                        {
                            translateX:MoveLeftValue,
                        }
                    ],
                    width: 100,
                    height: 100,
                    backgroundColor: 'black',
                    borderRadius: 100 / 2
                }}>

                </Animated.View>
            </TouchableOpacity>


        )
    }
    return (
        <View>
            { renderAnimatedView()}
        </View>
    )
}

const styles = StyleSheet.create({})