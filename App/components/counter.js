import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import styles from './style';

export default function Counter() {
  return (
    <View>
      <Text style={[styles.font22,styles.borderPaddingMargin10]}>Counter</Text>
      <View style={styles.paddingMargin10}>
        <Button color={'blue'} title='increment'></Button>
        <Button color={'red'} title='decrement'></Button>
      </View>
      
    </View>
  )
}

