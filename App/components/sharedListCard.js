import React, { Component } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'


export default function Test(first) {
    return(
        <View style={{
            flexDirection:'row',
            justifyContent:"space-between",
            paddingHorizontal:12,
            paddingVertical:15,
            borderWidth:1,
            borderRadius:6,
            borderColor:"#EBEBEB"
            }}>
            <View></View>
            <View>
                <Text style ={{}}>অচেনা পথিক</Text>
                <Text>01838200551</Text>
            </View>
            <View>
                <View>
                <Text style={{
                    backgroundColor:"#651FFF1A",
                    paddingHorizontal:4,
                    paddingVertical:2
                }}>৩০ দিনের জন্য</Text>
                </View>
                
                <Text>মেয়াদঃ ৩০/১২/২০২৩</Text>
            </View>
            <View></View>
        </View>
    )
}

