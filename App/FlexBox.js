import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlexBox() {
    return (
        <View style={styles.cardContainer}>
        {/* Leading Section (20%) */}
        <View style={styles.leadingSection}>
          <Text>asdas</Text>
        </View>
  
        {/* Middle Section (80%) */}
        <View style={styles.middleSection}>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</Text>
        </View>
  
        {/* End Section (20%) */}
        <View style={styles.endSection}>
          <Text>Lorem Ipsum is own printer took a galley of type and scrambled</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row', // Arrange sections horizontally
        borderWidth: 1,
        borderColor: 'black',
        width:"auto"
        // flex:1,
        // height:100
      },
      leadingSection: {
        flex: 20, // 20% width
        padding: 10,
        backgroundColor: 'lightblue',
      },
      middleSection: {
        flex: 80, // 80% width
        padding: 10,
        backgroundColor: 'lightgreen',
      },
      endSection: {
        flex: 20, // 20% width
        padding: 10,
        backgroundColor: 'lightcoral',
      },

})