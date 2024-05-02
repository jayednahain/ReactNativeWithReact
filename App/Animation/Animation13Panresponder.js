import { View, Text, Animated, PanResponder } from 'react-native'
import React, { useState } from 'react'

export default function Animation13PanresRonder() {

    const pan = useState(new Animated.ValueXY())[0];




    const panResponder = useState(

        // create a responder
        // hey are you there ? yes im here
        // on every single touch , what operating system will do
        // - broad cast a message to the application which is currently running
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => { 
                // if onMoveShouldSetPanResponder return true , onPanResponderGrant will run
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                })
            },
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
            onPanResponderRelease: () => {
                pan.extractOffset();
            },
        }),
    )[0];




    return (
        <View>
            <Animated.View
                style={{
                    backgroundColor: "red",
                    height: 100,
                    width: 100,
                    borderRadius: 100 / 2,

                }}
            />
        </View>
    )
}