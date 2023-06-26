import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SingleCardComponent from './SingleCardComponent'
import EmptyCompoenet from './EmptyCompoenet';

export default function ListComponent(pros) {
    let {products} = pros;
    // console.log(JSON.stringify(pros))
  

  return (
    <FlatList
        contentContainerStyle={{ zIndex: 1 }}
            key={(item, index) => index}
            numColumns={3}
            keyExtractor={(item, index) => index}
            data={products}
            renderItem={({ item }) => (
                <SingleCardComponent onLongPress={{}} currentItem={item} key={Math.random()} />)}
            ListEmptyComponent={<EmptyCompoenet/>}
        />
  )
}

const styles = StyleSheet.create({})