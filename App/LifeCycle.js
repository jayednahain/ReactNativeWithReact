import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        console.log("1.constructor called");
        super(props)
        this.state = {}
        
    }
    render() {
        console.log("2. render called");
        return (
            <View>
                <Text>LifeCycle</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})