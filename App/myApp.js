import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LifeCycle from './LifeCycle'
import AnimationTiming from './Animation/AnimationTiming'
import AnimationWithTranslate from './Animation/AnimationWithTranslate'
import AnimationFadeInFadeOut from './Animation/Animation10FadeInFadeOut'
import Animation13PanresRonder from './Animation/Animation13Panresponder'

export default function MyApp() {
    // https://www.youtube.com/playlist?list=PLYxzS__5yYQmdfEyKDrlG5E0F0u7_iIUo
    return (
        <View style={{ }}>
            {/* <AnimationTiming /> */}
            {/* <AnimationWithTranslate/> */}
            {/* <AnimationFadeInFadeOut/> */}
            <Animation13PanresRonder/>
        </View>

    )
}

