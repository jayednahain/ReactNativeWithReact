import { Button } from '@rneui/base';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, View, PanResponder, Animated } from 'react-native'
import DropdownExample from './dropDown';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';




export default function MyApp() {
    const toastRef = useRef(null);
    let [length, setLength] = useState(8);
    let [checkNumber, setCheckNumber] = useState(false);
    let [checkCharacter, setCheckCharacter] = useState(false);
    let [password, setPassword] = useState("");

    const itemsObjects = [
        { label: '6', value: 6 },
        { label: '8', value: 8 },
        { label: '10', value: 10 },
    ];

    const permissionObj = [
        { label: "Yes", value: 1 },
        { label: "No", value: 0 },
    ];

    const showToast = () => {
        console.warn('SHOW!!');
        toastRef.current?.show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is something',
            position: 'bottom',
        });
    };


    handleCopyToClipboard = () => {
        showToast()
        Clipboard.setString(password);

    };

    const passwordGenerator = useCallback(() => {
        let pass = ""; // generated password
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let num = "0123456789";
        let specialChar = "!#$%&'()*+,-/{}[]*"

        if (checkNumber) { str = str + num; }
        if (checkCharacter) { str = str + specialChar; }

        for (let i = 1; i <= length; i++) {
            let carIndex = Math.floor(Math.random() * str.length + 1);
            pass = pass + str[carIndex];
        }

        setPassword(pass);
    }, [length, checkNumber, checkCharacter, setPassword])

    useEffect(() => {
        passwordGenerator();
    }, [length, checkNumber, checkCharacter,])

    onLengthChange = (currentLength) => {
        console.warn(currentLength)
        setLength(currentLength);
    }

    onCheckNumber = (check) => {
        console.warn(check)
        check == 1 ? setCheckNumber(true) : setCheckNumber(false)

    }

    onCheckSpecialChar = (check) => {
        console.warn(check)
        check == 1 ? setCheckCharacter(true) : setCheckCharacter(false)
    }

    renderText = (title) => {
        return (
            <Text style={{
                fontSize: 20,
                color: '#DFD29F',
                fontWeight: "200"
            }}>{title}</Text>
        )
    }

    return (
        <View style={styles.containerStyle}>
            <Text style={{}}>Password Generator</Text>
            <View style={styles.textHeading}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        placeholder='password'
                        placeholderTextColor={'#EEECC4'}
                        value={password}
                        style={styles.inputStyle}
                        editable={false}
                    ></TextInput>
                    <Button
                        color={'#DFD29F'}
                        title={'coppy'}
                        onPress={handleCopyToClipboard}
                    ></Button>
                </View>
                <View style={styles.rowStyle}>
                    {renderText('Select Length :')}
                    <DropdownExample
                        items={itemsObjects}
                        onValueChange={onLengthChange}
                        placeholder="Select"
                        pickerStyle={{ width: "40%", margin: 10 }}
                    />
                </View>
                <View style={styles.rowStyle}>
                    {renderText("Use Number :")}
                    <DropdownExample
                        items={permissionObj}
                        onValueChange={onCheckNumber}
                        placeholder="Select"
                        pickerStyle={{ width: "40%", margin: 10 }}
                    />
                </View>
                <View style={styles.rowStyle}>
                    {renderText("Use Special Char :")}
                    <DropdownExample
                        items={permissionObj}
                        onValueChange={onCheckSpecialChar}
                        placeholder="Select"
                        pickerStyle={{ width: "40%", margin: 10 }}
                    />
                </View>
            </View>
            <Toast ref={toastRef} />
        </View>
    )
}

const styles = StyleSheet.create({
    textHeading:{textAlign: 'center',
    fontSize: 25,
    color: '#EEECC4',
    fontWeight: "600",
    borderWidth: 2,
    borderColor: '#EEECC4',
    borderRadius: 20},
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerStyle: {
        backgroundColor: '#020971',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    inputStyle: {
        fontSize: 20,
        color: '#EEECC4',
        borderWidth: 1,
        borderColor: '#DFD29F',
        borderRadius: 10,
        padding: 10,
        flexGrow: 1,
        margin: 10
    },
})
