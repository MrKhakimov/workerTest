import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Container, TextBold, TextMedium} from "../../components/ui";
import {Theme} from "../../utils/theme";
import Fire from '../../images/icons/Fire.svg';
import Configure from '../../images/icons/Configure.svg';
import Close from '../../images/icons/Close.svg';
import Smile from '../../images/icons/Smile.svg';
import Star from '../../images/icons/Star.svg';
import ThumbsUp from '../../images/icons/ThumbsUp.svg';
import {PaymentOptionsList} from "./PaymentOptionsList";
import {AppButton} from "../../components/ui/AppButton";

const options = [
    {id: 1, text: 'Raising an ad once a week, but no more than 2 ads per week', icon: <ThumbsUp />},
    {id: 2, text: 'The ability to sort employees by rating and number of reviews', icon: <Configure />},
    {id: 3, text: 'Partial deactivation of ads', icon: <Close />},
    {id: 4, text: 'Premium status "regular user" \n' +
            'after 5 completed transactions', icon: <Smile />},
    {id: 5, text: 'Activity points system', icon: <Star />}
];

export const PaymentOptionsScreen = ({navigation, route}) => {

    const handleBtn = () => {
        route?.params?.selectItem(route?.params?.id);
        navigation.goBack();
    }

    return (
        <Container>
            <ScrollView contentContainerStyle={s.scrollView}>
                <TextBold size={32}>You payment options:</TextBold>
                <View style={s.row}>
                    <TextBold size={32} color={Theme.error}>Hot Work </TextBold>
                    <Fire />
                </View>
                <View style={s.titleWr}>
                    <TextMedium size={20} style={s.title}>{route?.params?.title}</TextMedium>
                </View>

                {
                    options?.length ? options.map(el => <PaymentOptionsList key={el.id} icon={el?.icon} text={el?.text} />) : null
                }

                <AppButton title={'Change payment options'} onPress={handleBtn} />
            </ScrollView>
        </Container>
    )
}

const s = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        padding: Theme.interval_4
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleWr: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: Theme.interval_4,
        borderWidth: 2,
        borderRadius: Theme.interval_5,
        borderColor: Theme.divider,
        marginBottom: Theme.interval_4,
    }
});
