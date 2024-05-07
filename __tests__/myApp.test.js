import 'react-native';
import React from 'react'
import MyApp from '../App/myApp';

import renderer from 'react-test-renderer';

// if ('renders correctly')


it('renders correctly', () => {
    const hellow = renderer.create(
        <MyApp />
    );
});