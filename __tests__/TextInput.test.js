import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import renderer from 'react-test-renderer';
import MyApp from '../App/myApp';


test('input field renders correctly', () => {
    const hellow = renderer.create(
        <TextInput />
    );
});

// test('Keyboard opens when input field is pressed', () => {
//     const { getByTestId,debug } = render(<TextInput />);

//     const inputField = getByTestId('55');
//     // console.log("inputField : ", getByTestId)
//     // const { getByTestId, debug } = render(<TextInput testID='asss' />);
//     // debug()
//     expect(inputField.isFocused()).toBeTruthy();


// });
test('TextInputfocus when pressed', () => {
    const { getByTestId } = render(<TextInput />);
    const inputField = getByTestId('55'); 

    console.log("\\\\\\\\\\")
    // const stateNode = inputField._fiber.stateNode;

    // fireEvent.press(inputField);
    // expect(inputField.isFocused()).toBeTruthy();
    // expect(inputField.props.nativeFocus).toBeTruthy();
    // console.log("inputField::: ", stateNode)
    // const inputFieldInstance = inputField.getInstance();
    expect(inputFieldInstance.isFocused()).toBeTruthy();



    
  });