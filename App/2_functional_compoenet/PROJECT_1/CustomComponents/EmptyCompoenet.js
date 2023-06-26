import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function EmptyCompoenet() {
  return (
      <View style={styles.container}>
          <Text style={styles.textStyle}>No Data Found</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        textAlignVertical: 'center',
        textAlign:'center'
    },
    textStyle: {
        textAlignVertical: 'center',
        textAlign:'center',
        fontSize:20
    },
})