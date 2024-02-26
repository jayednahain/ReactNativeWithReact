import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from './Componetns/NavBar'
import Header from './Componetns/Header'
import TodoList from './Componetns/TodoList'
import Footer from './Componetns/Footer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import RemainingTaskShow from './Componetns/RemanningTaskShow'

export default function HomePage() {
    return (
        <GestureHandlerRootView style={{}}>
            <View style={{  height: '100%', backgroundColor:'#F4E38A' }}>
                
                <View style={styles.navbarAndHeaderStyle}>
                    {/* <NavBar /> */}
                    <Header />
                </View>
                <TodoList />
                <RemainingTaskShow/>
                <Footer />
            </View>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    navbarAndHeaderStyle: {
        // padding: 5,
        // borderWidth: 0.5,
        // borderRadius: 5,
    }
})