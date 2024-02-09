import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBasis = () => {
    return (
        <View style={{flexDirection:'row', margin:10}}>
            <View style={styles.boxOne}>
                <Text>perty used in flexboxes that sets the initial size of a flex item before it grows or shrinks. Flex items exist in flex containers, which grow to fill empty space or shrink to prevent overflow on a web page. The flex-basis property is often used in conjunction with the flex-grow and flex-shrink properties to control the item’s sizing behav</Text>
            </View>
            <View style={styles.boxTwo}>
                <Text>Flex-basis is a CSS property used in flexboxes that sets the initial size of a flex item before it grows or shrinks. Flex items exist in flex containers, which grow to fill empty space or shrink to prevent overflow on a web page. The flex-basis property is often used in conjunction with the flex-grow and flex-shrink properties to control the item’s sizing behavior.</Text>
            </View>
        </View>
    )
}

export default FlexBasis

const styles = StyleSheet.create({
    boxOne:{
        // flexShrink:100,
        backgroundColor: 'lightblue',
        // flexBasis:100,
        flex:1


    },
    boxTwo:{
        flex:1,
        // flexShrink:1,
        // flexGrow:1,
        // flexBasis:100,
        backgroundColor: 'lightcoral',

    }
    // cardContainer: {
    //     flexDirection: 'row', 
       
    //   },
    //   leadingSection: {
        
    //     backgroundColor: 'lightblue',
    //   },
    //   middleSection: {
       
    //     backgroundColor: 'lightblue',
    //   },
    //   endSection: {
        
    //     backgroundColor: 'lightcoral',
    //   },
})