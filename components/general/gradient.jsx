import React from "react";
import { View, StyleSheet, ViewProps } from 'react-native'
import { Svg, Defs, Rect, LinearGradient, Stop } from "react-native-svg";

const fromColor = 'black'
const toColor = 'black'
const fromColorOpacity = 0
const toColorOpacity = 0.5

export default function Gradient({ children }){
    return(
        <View style={{
            flexGrow: 1,
            alignSelf: 'stretch',
            position: 'relative',
            height: '100%',
            }}>
            <Svg
                height='100%'
                width='100%'
                style={{
                    ...StyleSheet.absoluteFillObject
                }}
            >
                <Defs>
                    <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <Stop offset="0" stopColor={fromColor} stopOpacity={fromColorOpacity}/>
                        <Stop offset="1" stopColor={toColor} stopOpacity={toColorOpacity}/>
                    </LinearGradient>
                </Defs>
                <Rect width='100%' height='100%' fill='url(#grad)'/>
            </Svg>
            { children }
        </View>
    )
}