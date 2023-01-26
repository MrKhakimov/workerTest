import React from "react";
import {View, StyleSheet, Pressable} from "react-native";
import {TextMedium} from "./TextComponent";
import {Theme} from "../../utils/theme";
import {LinearGradient} from "expo-linear-gradient";

export const AppButton = ({onPress, title, ...props}) => {
    return (
        <View style={s.buttonWrapper}>
            <Pressable  style={s.button} onPress={onPress} android_ripple={{color:'#7433FF', borderless: false}} {...props}>
                <LinearGradient
                    colors={['#FFA3FD', '#7433FF']}
                    locations={[0.2, 1]}
                    start={{x: 1, y: 0}}
                    style={s.buttonGradient}>
                    <TextMedium color={Theme.white} size={16}>{title}</TextMedium>
                </LinearGradient>
            </Pressable>
        </View>

    )
}

const s = StyleSheet.create({
    buttonWrapper: {
        height: 56,
        borderRadius: 56,
        overflow: 'hidden',
    },
    buttonGradient: {
        height: 56,
        borderRadius: 56,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
