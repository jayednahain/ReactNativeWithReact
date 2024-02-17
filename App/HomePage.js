import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from './Componetns/NavBar'
import Header from './Componetns/Header'
import TodoList from './Componetns/TodoList'
import Footer from './Componetns/Footer'

export default function HomePage() {
    return (
        <View style={{margin: 5,height:"99%"}}>
            <View style={{
                padding: 5,
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: '#EDECEB',
                borderColor: '#D3D3D3'
            }}>
                <NavBar />
                <Header />
            </View>


            <TodoList />

            {/* <View style={{position:'absolute',bottom:0,zIndex:1}}> */}
                <Footer />
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({})