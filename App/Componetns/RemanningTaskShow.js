import { StyleSheet, Text, View , Image } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { fontStyle } from '../Style/Style';
import UtilityFunctions from '../UtilityFunctions/UtilityFunctions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Collapsible from 'react-native-collapsible';

export default function RemainingTaskShow() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const todoList = useSelector((state) => state.todos)
    const todoListNotCompleted = todoList.filter(todo => !todo.completed).length;
    onPress = () => {

        setIsCollapsed(!isCollapsed)

    }
    return (
        <View style={{
            position: 'absolute',
            bottom: 70,
            right: 0,
            marginRight: 20,
            height: 60
        }}>
            <Collapsible collapsed={isCollapsed ? false : true}>
                <TouchableOpacity style={{ alignSelf:'center'}} onPress={onPress}>
                    <View style={{width:55}}>
                        <Image
                            source={require('./../../assets/notificationZZ.png')} // Replace with the correct path
                            style={{position:'relative'}}
                        />
                        <Text style={{color:'white',position:'absolute',right:0,paddingTop:2}}>
                            { todoListNotCompleted}
                        </Text>

                    </View>
                </TouchableOpacity>
            </Collapsible>

            <Collapsible collapsed={isCollapsed} >
                <TouchableOpacity onPress={onPress} style={{
                    backgroundColor: '#034883',
                    height: 50,
                    width: 120,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius:20

                }}>
                    <Text style={[{ color: 'white' }, fontStyle.H3]}>{UtilityFunctions.remainingTaskText(todoListNotCompleted)}</Text>
                </TouchableOpacity>


            </Collapsible>


        </View>
    )
}

const styles = StyleSheet.create({})