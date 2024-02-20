import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlexBasis() {

    let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan";
    return (
        <View style={{flex:1, width:200, borderWidth:2}}>
            <Text>FlexBasis</Text>
            <Box style={styles.box1} text={"jellow jellow jellow"} />
            <Box style={styles.box2} text={text} />
            <Box style={styles.box3} text={text}/>
            <Box style={styles.box4} text={text}/>
        </View>
    )
}

const styles = StyleSheet.create({
    box1: {
        justifyContent: 'center',
        // marginVertical:50,
        // alignItems:'center',
        alignSelf: 'center',
        backgroundColor: 'red',
        // width:"60%",
        // flex: 1,
        flexBasis: 200,
    },
    box2: {
        backgroundColor: 'green',
        // flexBasis: 20,
        // flex:1
    },
    box3: {
        backgroundColor: 'yellow',
        // flex: 1
    },
    box4: {
        backgroundColor: 'orange',
        // flex: 1
    }
})

function Box({ text, style }) {
    return (
        <View style={[{padding:5},style]}>
            {text ? <Text numberOfLines={4} style={{}}>{text}</Text> : null}
        </View>
    )
}