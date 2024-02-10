import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const DropdownExample = ({ items, onValueChange, placeholder,pickerStyle }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const handleValueChange = (itemValue, itemIndex) => {
        setSelectedValue(itemValue);
        if (onValueChange) {
            onValueChange(itemValue);
        }
    };

    return (
        <Picker
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
            style={[styles.picker,pickerStyle]}
        >
            {placeholder && <Picker.Item label={placeholder} value="" />}
            {items.map((item) => (
                <Picker.Item 
                    key={item.value} label={item.label} value={item.value} style={{
                        borderColor: '#DFD29F',borderWidth: 10,
                    }} 
                />
            ))}
        </Picker>
    );
};

const styles = StyleSheet.create({
    picker: {
        backgroundColor: '#DFD29F',
    },
});

export default DropdownExample;