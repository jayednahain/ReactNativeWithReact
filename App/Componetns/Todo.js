import { StyleSheet, Text, Modal, TouchableOpacity, View, Platform, Animated, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fontStyle } from '../Style/Style'
import Collapsible from 'react-native-collapsible';
import { Button, RadioButton } from 'react-native-paper';
import TodoActions from '../Redux/Todos/Actions';
import { useDispatch } from 'react-redux';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import DropDown from './DropDownCustom/DropDown';


const Todo = ({ todo }) => {
    let { text, id, completed,color } = todo;
    const dispatched = useDispatch();
    const [translateX] = useState(new Animated.Value(0));
    let [isLargeText, setIsLargeText] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isChecked, setChecked] = useState(false);
    const [isSwiped, setIsSwiped] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        setChecked(completed ? true : false)
    }, [completed])

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationX: translateX } }],
        { useNativeDriver: false }
    );
    const onHandlerStateChange = ({ nativeEvent }) => {
        if (nativeEvent.state === State.END) {
            const swipeThreshold = 100; // Adjust this threshold as needed
            if (nativeEvent.translationX > swipeThreshold) {
                setIsSwiped(isModalVisible?false: true);
            }
            else if (nativeEvent.translationX < -swipeThreshold) {
                setModalVisible(isSwiped? false:true);
            }
            else {
                setIsSwiped(false);
            }
            Animated.timing(translateX, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
    };

    const onSelectColor = (currentLength) => {
        dispatched(TodoActions.colorSelected(id,currentLength));
        setIsSwiped(false);
    }

    const itemsObjects = [
        { color: 'green', value: 'green' },
        { color: 'yellow', value: 'yellow' },
        { color: 'red', value: 'red' },
    ];

    const swapView = () => {
        if (isSwiped) {
            return (
                <DropDown
                    alreadySelected = {color}
                    items={itemsObjects}
                    onValueChange={onSelectColor}
                    placeholder="Set Priority"
                    pickerStyle={styles.cardContainer}
                />
            );
        }
        return null;
    };


    const handleTextLayout = (event) => {
        const { lines } = event.nativeEvent;
        if (lines.length > 1) {
            setIsLargeText(true)
        }
    }

    const onPressItem = () => {
        setIsCollapsed(!isCollapsed);
    }

    

    const onPressRadioButton = (id) => {
        setChecked(!isChecked);
        dispatched(TodoActions.toggled(id));
    }

    const hideModal = () => {
        setModalVisible(false);
    };

    const onPressDelete = (id) => {
        dispatched(TodoActions.deleted(id));

    }

    renderModal = () => {
        return (
            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={() => hideModal()}
            >
                <View style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        paddingHorizontal: 10,
                        paddingVertical: 10, borderRadius: 10
                    }}>
                        <Text style={fontStyle.H2}>Do you want to delete this task</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Button background={'yellow'} style={{ borderWidth: 1, borderColor: 'green' }} labelStyle={[fontStyle.H3, { color: 'green' }]} title="Close Modal" onPress={() => hideModal()}>Cancel</Button>
                            <Button background={'yellow'} style={{ borderWidth: 1, borderColor: 'red' }} labelStyle={[fontStyle.H3, { color: 'red' }]} title="Close Modal" 
                            onPress={()=> onPressDelete(id)}>Delete</Button>
                        </View>
                    </View>

                </View>
            </Modal>
        )
    }



    return (
        <PanGestureHandler
            failOffsetY={[-5, 5]}
            activeOffsetX={[-5, 5]}
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
        >
            <Animated.View style={{ transform: [{ translateX: translateX }],marginVertical:0 }}>
                <View style={{ flexDirection: 'row' }}>
                    {swapView()}
                    <View style={styles.cardContainer}>
                        <RadioButton
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => onPressRadioButton(id)}
                        />
                        <TouchableOpacity disabled={!isLargeText}
                            onPress={onPressItem}>
                            <Collapsible collapsed={!isCollapsed}>
                                <Text
                                    numberOfLines={1}
                                    style={[{
                                        textDecorationLine: isChecked ? "line-through" : 'none',
                                        // width: 350
                                    }, fontStyle.H4]}
                                    onTextLayout={handleTextLayout}>
                                    {text}
                                </Text>
                                {/* :null} */}
                            </Collapsible>
                            <Collapsible collapsed={isCollapsed}>
                                <Text style={[{
                                    textDecorationLine: isChecked ? "line-through" : 'none',
                                    //  width: 300
                                }, fontStyle.H3]}>{text}</Text>
                            </Collapsible>
                        </TouchableOpacity>
                    </View>
                </View>

                {renderModal()}

            </Animated.View>
        </PanGestureHandler>
    )
}

export default Todo

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor:'#F0A140',
        borderColor:'#F6B963',
        flex: 1,
        // width:"50%",
        borderWidth: 1,
        marginBottom: 10,
        // width: "90%",
        borderRadius: 10,
        flexDirection: "row",
        paddingHorizontal: 0,
        paddingVertical: 0,
        alignItems: 'center'
    }

})

