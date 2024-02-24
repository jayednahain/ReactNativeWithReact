import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import DrawerItem from 'react-native-paper/lib/typescript/components/Drawer/DrawerItem';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownItem from './DropDownItem';

export default function DropDown({ items, onValueChange, placeholder,pickerStyle,alreadySelected }) {
    const [selectedValue, setSelectedValue] = useState('');

    const handleValueChange = (itemValue) => {
        console.log("itemValue: ", itemValue)
        setSelectedValue(itemValue);
        if (onValueChange) {
            onValueChange(itemValue);
        }
    };

    return (
        
        <Picker
            selectedValue={alreadySelected? alreadySelected :selectedValue}
            onValueChange={handleValueChange}
            style={[styles.picker, pickerStyle]}>
            {placeholder && <Picker.Item label={placeholder} value="" />}
            {items.map((item) => (
                <Picker.Item style={{
                    backgroundColor:item.value,
                    borderRadius:10,
                    borderWidth:1
                }} key={item.value} label={item.color} value={item.value} />


            ))}
        </Picker>
    )
}

const styles = StyleSheet.create({
    picker: {
        width:50
        // backgroundColor: '#DFD29F',
    },
})
