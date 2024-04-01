import { Text, StyleSheet, View, Animated } from 'react-native'
import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        console.log("1.constructor called");
        super(props)
        this.state = {
            leftValue: new Animated.Value(300)[0]
        }
        
        
    }

    roundCircle = () => {
        return (
            <View style={{ width: 100, height: 100, backgroundColor: 'black', borderRadius: 100 / 2 }}>
                
            </View>
        )
    }
    render() {
        console.log("2. render called");
        return (
            <View style={{marginTop:20,alignItems:'center'}}>
                {/* <Animated.View style={{}}>
                    {this.roundCircle()}
                </Animated.View> */}

                {/* <Animated.View style={{
                    marginLeft:leftValue,
                    width: 100,
                    height: 100,
                    backgroundColor: 'black',
                    borderRadius: 100 / 2
                }}>
                </Animated.View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({})