import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'
import { Button } from '@rneui/base'

export default class ReferenceClassComponent extends Component {
    constructor(props) {
        super(props);

        // Creating a ref and initializing it with null
        this.dataRef = React.createRef();
    }

    // Function to update the data in the ref
    updateData = () => {
        // Updating the current property of the ref
        this.dataRef.current = Math.random();
        console.log('Data updated:', this.dataRef.current);
    };

    render() {
        return (
            <View>
                
                {/* this ui will not change until we called setState */}
                <Text>Data stored in ref: {this.dataRef.current}</Text>
                <Button title="Update Data" onPress={this.updateData} />
            </View>
        );
    }
}

const styles = StyleSheet.create({})