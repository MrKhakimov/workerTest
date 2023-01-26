import {View, StyleSheet} from "react-native";
import {TextRegular} from "../../components/ui";
import {Theme} from "../../utils/theme";
import React from "react";

export const PaymentOptionsList = ({icon = null, text = ''}) => {
    return (
        <View style={s.wr}>
            <View style={s.left}>
                <View style={s.icon}>
                    {icon}
                </View>
            </View>
            <View style={s.right}>
                <TextRegular size={16}>{text}</TextRegular>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    wr: {
        paddingHorizontal: Theme.interval_4,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Theme.interval_4,
    },
    icon: {
      borderRadius: 50,
      width: 48,
      height: 48,
      backgroundColor: Theme.divider,
      justifyContent: 'center',
      alignItems: 'center',
    },
    left: {
        marginRight: Theme.interval_4,
    },
    right: {
        flex: 1,
    }
});
