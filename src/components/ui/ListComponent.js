import {Pressable, View, StyleSheet} from "react-native";
import {TextMedium, TextRegular} from "./TextComponent";
import Forward from '../../images/icons/Forward.svg';
import {Theme} from "../../utils/theme";

export const ListComponent = ({onPress, subTitle, title, ...props}) => {
    return (
        <Pressable style={s.button} onPress={onPress} android_ripple={{color: Theme.grayscale, borderless: false,}}>
            <View style={s.main}>
                <TextMedium numberOfLines={1}>{title}</TextMedium>
                <TextRegular numberOfLines={2}>{subTitle}</TextRegular>
            </View>
            <Forward />
        </Pressable>
    )
}

const s = StyleSheet.create({
    button: {
        paddingHorizontal: Theme.interval_4,
        paddingVertical: Theme.interval_1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    main: {
        flex: 1,
    },
});
