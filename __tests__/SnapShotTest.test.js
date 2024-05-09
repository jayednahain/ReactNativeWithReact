//SnapShotTest
import 'react-native';
import React from 'react'
import MyApp from '../App/myApp';
import renderer from 'react-test-renderer';
const sum = require('../App/Utils');


// test("Sum Test ", () => { 
//     console.log("Sum Test");
//     expect(
//         sum("Jayed", "Nahian")
        
//     ).toBe("Jayed Nahian");
// });


test("Home Snap Shoot test", () => {
    const snap = renderer.create(<MyApp />).toJSON();

    expect(snap).toMatchSnapshot();

    // console.log("snap : ", snap.toJSON())
    
});
