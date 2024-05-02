import { View, Text, Animated, PanResponder } from 'react-native';
import { Dimensions } from 'react-native'
import React, { useState } from 'react'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Animation13PanresRonder() {

    // const pan = useState(new Animated.ValueXY())[0];
    const pan = useState(new Animated.ValueXY())[0];
    // const width = useState(0)[0];
    // const height = useState(0)[0];




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
                // pan.setOffset({
                //     x: pan.x._value,
                //     y: pan.y._value
                // })
            },

            //move-1
            // onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
            //dx and dy delta value
            // relative distance of current position and new position
            // vx, vy are the velocity value

            //move - 2
            onPanResponderMove: (_, gesture) => {
                console.log("onPanResponderMove__ run: ",)
                // pan.x.setValue(gesture.dx+2);
                // pan.y.setValue(gesture.dy + 2);

                console.log("windowHeight: ", windowHeight, " || ", gesture);
                console.log("windowWidth", windowWidth)

                if (gesture.moveX < windowWidth - 50 && 60 < gesture.moveX) {
                    pan.x.setValue(gesture.dx);
                }
                if (gesture.moveY < windowHeight - 50 && 60 < gesture.moveY) {
                    pan.y.setValue(gesture.dy);
                }



            },



            onPanResponderRelease: (_, gesture) => {
                // console.log("__onPanResponderRelease!: -- ", pan.x * 10)
                // console.log("windowHeight", windowHeight);
                // console.log("windowWidth",windowWidth)
                // pan.x.setValue(gesture.dx);
                // pan.y.setValue(gesture.dy);
                pan.extractOffset();
            },
        }),
    )[0];


    // console.log( panResponder.panHandlers)
    console.log(pan)
    return (
        <View>

            <View>
                <Text></Text>
            </View>
            <Animated.View
                style={
                    [{
                        backgroundColor: "red",
                        height: 100,
                        width: 100,
                        borderRadius: 100 / 2,
                        transform: [
                            { translateX: pan.x },
                            { translateY: pan.y }
                        ]
                        // top: pan.y,
                        // left:pan.x
                    },
                        // pan.getLayout()
                    ]



                }
                {...panResponder.panHandlers}
            />
        </View>
    )
}