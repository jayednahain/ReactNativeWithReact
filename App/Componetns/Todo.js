import { StyleSheet, Text, Touchable, TouchableOpacity, View, Platform, UIManager, LayoutAnimation, Animated, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fontStyle } from '../Style/Style'
import Collapsible from 'react-native-collapsible';
import { RadioButton } from 'react-native-paper';
import  TodoActions  from '../Redux/Todos/Actions';
import { useDispatch } from 'react-redux';


const Todo = ({ todo }) => {
    let { text, id, completed } = todo;
    const dispatched = useDispatch();
    let [isLargeText, setIsLargeText] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isChecked, setChecked] = useState(false);
    const [isCompleted,setCompleted] = useState(false);


    const handleTextLayout = (event) => {
        const { lines } = event.nativeEvent;
        if (lines.length > 1) {
            setIsLargeText(true)
        }
    }

    const onPressItem = () => {
        setIsCollapsed(!isCollapsed);
    }
    
    useEffect(()=>{
        setChecked(completed?true:false)
        setCompleted(completed?true:false)
    }, [completed])

    const onPressRadioButton =(id)=>{
        setChecked(!isChecked);
        setCompleted(!isCompleted)
        dispatched(TodoActions.toggled(id));
    }

    return (
        <View style={{
            borderWidth: 1, marginBottom: 10, width: "100%",
            borderRadius: 15, flexDirection: "row", 
            paddingHorizontal: 10, 
            paddingVertical: 8, alignItems: 'center'
        }}>
            <RadioButton
                theme={""}
                value="first"
                //status={checked === 'first' ? 'checked' : 'unchecked'}
                status={isChecked ? 'checked'  : 'unchecked'}
                onPress={()=>onPressRadioButton(id)}
            />
            <TouchableOpacity disabled={!isLargeText}
                onPress={onPressItem}>
                <Collapsible collapsed={!isCollapsed}>
                    {/* {isCollapsed ? */}
                    <Text
                        numberOfLines={1}
                        style={[{ 
                            textDecorationLine:isChecked ? "line-through" : 'none'},
                            fontStyle.H4]}
                        onTextLayout={handleTextLayout}>
                        {text}
                    </Text>
                    {/* :null} */}
                </Collapsible>
                <Collapsible collapsed={isCollapsed}>
                    <Text style={[{textDecorationLine:isCompleted ? "line-through" : 'none'}, fontStyle.H3]}>{text}</Text>
                </Collapsible>
            </TouchableOpacity>


        </View>
    )
}

export default Todo

const styles = StyleSheet.create({})