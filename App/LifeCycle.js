import { Text, StyleSheet, View, Animated } from 'react-native'
import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        console.log("1.constructor called");
        super(props)
        this.state = {}
        
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
            <View>
                <Animated.View>
                    {this.roundCircle()}
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})