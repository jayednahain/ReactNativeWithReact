import { View, Text, Animated, PanResponder } from 'react-native'
import React, { useState } from 'react'

export default function Animation13PanresRonder() {

    const pen = useState(new Animated.ValueXY())[0];
    const penResponder = useState(
        PanResponder.create({
            onMoveShouldSetPanResponder: (event, gestureState) => {
                console.log("onMoveShouldSetPanResponder: ",event)
                return true
            },
            onPanResponderMove: () => { },
            onPanResponderRelease: () => { }
        })
    );
    


    return (
        <View>
            <Animated.View
                style={{
                    backgroundColor: "red",
                    height: 100,
                    width: 100,
                    borderRadius: 100 / 2,
                    transform: [{
                        
                    }]
                }}

                {...penResponder.pan}

            />
            <Text>Move me baby</Text>
        </View>
    )
}