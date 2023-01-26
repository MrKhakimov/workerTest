import React, {useCallback, useState} from "react";
import {Pressable, ScrollView, StyleSheet, View} from "react-native";
import {Container, TextBold, TextMedium, TextRegular} from "../../components/ui";
import {Theme} from "../../utils/theme";
import {PaymentItem} from "./PaymentItem";
import {useNavigation} from "@react-navigation/native";

const mockData = [
    {id: 1, title: '$15/in month', text: 'Automatic push notifications to performers', promotion: null, percent: null},
    {id: 2, title: '$35/in month', text: 'Premium status "regular user"', promotion: null, percent: '25%'},
    {id: 3, title: '$30/in month', text: 'Premium task design', promotion: '$60/in month', percent: null}
]

export const PaymentScreen = () => {
    const [activePayment, setActivePayment] = useState(1);
    const navigation  = useNavigation();

    const selectPayment = (id) => {
        setActivePayment(id);
    }

    const handleItem = useCallback((item) => {
        setActivePayment(item?.id);
        navigation.navigate('PaymentOptions', {...item, selectItem: selectPayment});
    }, [])

    return (
        <Container>
            <ScrollView contentContainerStyle={s.scrollView}>
                <TextBold size={32}>Payment options:</TextBold>
                <TextRegular style={s.text}>By subscribing, you will receive a number of benefits at a low cost. you can choose the most suitable subscription option for yourself.</TextRegular>

                {
                    mockData?.length ? mockData?.map(el => (<PaymentItem key={el.id} item={el} onPress={handleItem} active={activePayment === el?.id} />)) : null
                }
            </ScrollView>

        </Container>
    )
}

const s = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        padding: Theme.interval_4
    },
    text: {
        marginBottom: Theme.interval_4
    },
});
