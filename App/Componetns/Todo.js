import { StyleSheet, Text, Touchable, TouchableOpacity, View, Platform, UIManager, LayoutAnimation, Animated, Easing } from 'react-native'
import React, { useState } from 'react'
import { fontStyle } from '../Style/Style'
import Collapsible from 'react-native-collapsible';
import { RadioButton } from 'react-native-paper';


const Todo = ({ todo }) => {
    let { text, id, completed } = todo;
    let [isLargeText, setIsLargeText] = useState(false);
    // let [storeLineNumber, setStoreLineNumber] = useState(0);
    // let [lineNumber, setLineNumber] = useState(1);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [checked, setChecked] = useState('first');



    const handleTextLayout = (event) => {
        const { lines } = event.nativeEvent;
        if (lines.length > 1) {
            setIsLargeText(true)
            // setStoreLineNumber(lines.length)
        }
        console.warn(lines.length)
    }

    const onPressItem = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <View style={{
            borderWidth: 1, marginBottom: 10, width: "100%",
            borderRadius: 15, flexDirection: "row", paddingHorizontal: 10, paddingVertical: 15, alignItems: 'center'
        }}>
            <RadioButton
                theme={""}
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
            />
            <TouchableOpacity disabled={!isLargeText}
                onPress={onPressItem}>
                <Collapsible collapsed={!isCollapsed}>
                    {/* {isCollapsed ? */}
                    <Text
                        numberOfLines={1}
                        style={[{ textDecorationLine: completed ? "line-through" : 'none' }, fontStyle.H4]}
                        onTextLayout={handleTextLayout}>
                        {text}
                    </Text>
                    {/* :null} */}
                </Collapsible>
                <Collapsible collapsed={isCollapsed}>
                    <Text style={[{}, fontStyle.H4]}>{text}</Text>
                </Collapsible>
            </TouchableOpacity>


        </View>
    )
}

export default Todo

const styles = StyleSheet.create({})