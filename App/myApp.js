import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LifeCycle from './LifeCycle'
import AnimationTiming from './Animation/AnimationTiming'
import AnimationWithTranslate from './Animation/AnimationWithTranslate'
import AnimationFadeInFadeOut from './Animation/Animation10FadeInFadeOut'

export default function MyApp() {
    return (
        <View style={{ }}>
            {/* <AnimationTiming /> */}
            {/* <AnimationWithTranslate/> */}
            <AnimationFadeInFadeOut/>
        </View>

    )
}

