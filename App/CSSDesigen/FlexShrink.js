import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlexShrink() {
    return (
        <View style={{ flex: 1}}>
            <View style={{width: 200, borderWidth: 2, flexDirection: 'column', flex:1 }}>
                <Box style={styles.box1} text={"hellow"} />
                <Box style={styles.box2} text={"hellow"}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box1: {
        backgroundColor: 'red',
    },
    box2: {
        backgroundColor: 'green',
    },
    box3: {
        backgroundColor: 'yellow',
    },
    box4: {
        backgroundColor: 'orange'
    }
})


function Box({ text, style }) {
    return (
        <View style={[{ padding: 5 }, style]}>
            {text ? <Text numberOfLines={4} style={{}}>{text}</Text> : null}
        </View>
    )
}