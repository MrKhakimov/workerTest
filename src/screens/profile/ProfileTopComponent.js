import {TextMedium, TextRegular} from "../../components/ui";
import {View, StyleSheet, Image} from "react-native";
import {Theme} from "../../utils/theme";
import StarFilled from '../../images/icons/StarFilled.svg';
import Verified from '../../images/icons/Verified.svg';

const userPhoto = require('../../../assets/userPhoto.png');

export const ProfileTopComponent = () => {
    return (
        <View style={s.container}>
            <View style={s.left}>
                <View style={s.avatar}>
                    <Image source={userPhoto} />
                </View>
            </View>
            <View style={s.center}>
                <TextMedium size={16}>Dmitry Saitov</TextMedium>
                <View style={s.row}>
                    <View style={s.stars}>
                        <StarFilled />
                        <TextRegular> 0</TextRegular>
                    </View>
                    <TextRegular> 0 review</TextRegular>
                </View>
                <View style={s.row}>
                    <Verified />
                    <TextRegular> Account verified</TextRegular>
                </View>
            </View>
            <View style={s.right}>
                <TextRegular style={s.status} color={Theme.successDark}>Beginner</TextRegular>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
      padding: Theme.interval_4,
      flexDirection: 'row',
    },
    avatar: {
      width: 72,
      height: 72,
      borderRadius: 72,
      overflow: 'hidden',
    },
    left: {
        paddingRight: Theme.interval_4,
    },
    center: {
      flex: 1
    },
    row: {
      flexDirection: 'row',
    },
    stars: {
      flexDirection: 'row',
    },
    status: {
      backgroundColor: Theme.success,
      paddingHorizontal: Theme.interval_1,
      borderRadius: 50,
    },
});
