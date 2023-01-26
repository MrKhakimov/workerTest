import React, {useCallback, useMemo} from "react";
import {Pressable, View, StyleSheet} from "react-native";
import {Theme} from "../../utils/theme";
import {TextMedium, TextRegular} from "../../components/ui";

export const PaymentItem = ({onPress, item, active}) => {
    const memoStyle = useMemo(() => {
        return {
            wrapper: {
                ...s.wrapper,
                borderColor: active ? Theme.primary : '#D9DBE9',
            },
            percent: {
                ...s.percent,
                backgroundColor: active ? Theme.primary : '#D9DBE9',
            }

        }
    }, [active])

    const handleItem = useCallback(() => {
        onPress(item);
    }, [])

    return (
        <Pressable style={memoStyle?.wrapper} onPress={handleItem} android_ripple={{color: Theme.grayscale, borderless: false}}>
            {item?.promotion ? <TextRegular>{item?.promotion}</TextRegular> : null}
            <TextMedium size={20}>{item?.title}</TextMedium>
            <TextRegular>{item?.text}</TextRegular>
            {
                item?.percent ?
                    <View style={memoStyle.percent}>
                        <TextMedium color={Theme.white}> {item?.percent}</TextMedium>
                    </View>
                    : null
            }
        </Pressable>
    )
}

const s = StyleSheet.create({
    wrapper: {
        position: 'relative',
        padding: Theme.interval_4,
        borderRadius: Theme.interval_4,
        borderWidth: 2,
        marginBottom: Theme.interval_4,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 116,
        overflow: 'hidden',
    },
    percent: {
        position: "absolute",
        top: 0,
        right: 0,
        paddingHorizontal: 4,
        borderBottomLeftRadius: Theme.interval_4,
    }
});
