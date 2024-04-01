import { Animated, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function AnimationTiming() {
    const { width, height } = Dimensions.get('window');

    let leftValue = useState(new Animated.Value(0))[0]
    // let topMarginValue = useState(new Animated.Value(0))[0]
    // let [valueMove, setTopMarginValue] = useState(new Animated.Value(0))
    let rightMarginValue = useState(new Animated.Value(0))[0];
    let topMarginValue = useState(new Animated.Value(0))[0];
    
    

    // let [rightMarginValue, setRightMarginValue] = useState(new Animated.Value(0));

    roundCircle = () => {
        return (
            <View style={{ width: 100, height: 100, backgroundColor: 'black', borderRadius: 100 / 2 }}>
            </View>
        )
    }

    calculateValue = (value) => {
        let animationConfig = {
            toValue: value,
            duration: 2000,
            useNativeDriver: false
        }
        return animationConfig
    }

    // customAnimation = (value) =>  Animated.timing(
    //     rightMarginValue, calculateValue(value)
    // )

    onPress = () => {
        console.warn("width: ", width)
        Animated.timing(rightMarginValue, calculateValue(250))
            .start(() => {
            Animated.timing(
                topMarginValue, calculateValue(500)
            ).start(() => {
                console.warn("rightMarginValue: ",rightMarginValue)
                
            })
        })

    }

    useEffect(() => {
        // console.warn("width: ",width)
        // Animated.timing(
        //     valueMove,calculateValue(250)
        // ).start(() => {
        //     // setTopMarginValue(new Animated.Value(0))
        //     Animated.timing(
        //         valueMove,calculateValue(0)
        //     ).start()
        // })



        // const listener = leftValue.addListener(({ value }) => {
        //     console.log('Current leftValue:', value);
        // });

        // return () => {
        //     leftValue.removeListener(listener);
        // };
    })

    renderTouchButton = () => {
        return (
            <TouchableOpacity onPress={onPress} style={{ marginVertical: 10 }}>
                <Text>Touch me baby</Text>
            </TouchableOpacity>
        )
    }

    renderAnimatedView = () => {
        return (
            <TouchableOpacity onPress={onPress} style={{ marginVertical: 10 }}>
                <Animated.View style={{
                    marginLeft: rightMarginValue,
                    marginTop: topMarginValue,
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
        <View style={{}}>


            {/* <Text>Touch me baby</Text> */}
            {renderAnimatedView()}

        </View>
    )
}

const styles = StyleSheet.create({})