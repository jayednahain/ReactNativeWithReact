import { View, Text, Animated, PanResponder } from 'react-native'
import React, { useState } from 'react'

export default function Animation13PanresRonder() {

    // const pan = useState(new Animated.ValueXY())[0];
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
                console.log("### access confirm !")
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                })
            },
            // onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
            //dx and dy delta value
            // relative distance of current position and new position

            // vx, vy are the velocity value
            onPanResponderMove: (...args) => {
                console.log("onPanResponderMove__ run")
            },

            onPanResponderRelease: () => {
                console.log("__onPanResponderRelease!")
                pan.extractOffset();
            },
        }),
    )[0];


    // console.log( panResponder.panHandlers)
    console.log(pan.getLayout())
    return (
        <View>
            <Animated.View
                style={
                    [{
                        backgroundColor: "red",
                        height: 100,
                        width: 100,
                        borderRadius: 100 / 2,
    
                    }, pan.getLayout()]
                    
                    
                    
            }
                {...panResponder.panHandlers}
            />
        </View>
    )
}