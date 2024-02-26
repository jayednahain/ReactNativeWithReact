import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from './Componetns/NavBar'
import Header from './Componetns/Header'
import TodoList from './Componetns/TodoList'
import Footer from './Componetns/Footer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function HomePage() {
    return (
        <GestureHandlerRootView style={{}}>
            <View style={{  height: '100%' }}>
                <View style={styles.navbarAndHeaderStyle}>
                    <NavBar />
                    <Header />
                </View>
                <TodoList />
                <Footer />
            </View>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    navbarAndHeaderStyle: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#EDECEB',
        borderColor: '#D3D3D3'
    }
})