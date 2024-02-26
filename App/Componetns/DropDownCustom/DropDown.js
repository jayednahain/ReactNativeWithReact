import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
// import DrawerItem from 'react-native-paper/lib/typescript/components/Drawer/DrawerItem';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DropDown({ items, onValueChange, placeholder, pickerStyle, alreadySelected }) {
    const [selectedValue, setSelectedValue] = useState('');
    const [isPickerOpen, setIsPickerOpen] = useState(false);


    const handleValueChange = (itemValue) => {
        console.log("itemValue: ", itemValue)
        setSelectedValue(itemValue);
        setIsPickerOpen(false);
        if (onValueChange) {
            onValueChange(itemValue);
        }

    };




    return (

        <Picker

            // enabled={openPickerKey === item.value} 
            mode='dropdown'
            itemStyle={{ height: 10 }}
            selectedValue={alreadySelected ? alreadySelected : selectedValue}
            onValueChange={handleValueChange}
            style={[{ width: 160 }]}
        >
            {placeholder && <Picker.Item enabled={false} label={placeholder} value="" />}
            {items.map((item) => (
                <Picker.Item style={{
                    backgroundColor: item.value,
                }} key={item.value} label={item.color} value={item.value} />


            ))}
        </Picker>
    )
}

const styles = StyleSheet.create({
    picker: {
        height: 10,
        width: 50
        // backgroundColor: '#DFD29F',
    },
})
