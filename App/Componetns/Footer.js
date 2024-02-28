import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FooterTouchableButton from './Buttons/FooterTouchableButton'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// import {Fil} from '../Redux/Filters/Actions'
import { statusChanged,colorChanged } from '../Redux/Filters/Actions'
export default function Footer() {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos)

    const filters = useSelector((state) => state.filters);
    const { status, colors } = filters;

    const handleStatusChange = (status) => {
        dispatch(statusChanged(status));
    }

    const handleColorChange = (color)=>{
        //3.7-1 
        if (colors.includes(color)){
            dispatch(colorChanged(color,"removed"))
        }
        else{
            dispatch(colorChanged(color,"added"))
        }
    }

    return (
        <View style={{
            flexDirection: 'row',
            position: 'absolute',
            justifyContent: 'space-evenly',
            bottom: 0,
            zIndex: 1,
            width: "100%",
            backgroundColor: 'white',
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: 'gray',
            backgroundColor: '#034883',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,

        }}>
            <FooterTouchableButton onPress={() => handleStatusChange("All")} title={'All'} />
            <FooterTouchableButton onPress={() => handleStatusChange("Incomplete")} title={'Incomplete'} />
            <FooterTouchableButton onPress={() => handleStatusChange("Complete")} title={'Complete'} />
        </View>
    )
}

const styles = StyleSheet.create({})