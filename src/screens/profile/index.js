import React, {useCallback} from "react";
import {Container} from "../../components/ui";
import {ProfileTopComponent} from "./ProfileTopComponent";
import {ListComponent} from "../../components/ui/ListComponent";
import {useNavigation} from "@react-navigation/native";

export const ProfileScreen = () => {

    const navigation = useNavigation();

    const navigateToPayment = useCallback(() => {
        navigation.navigate('Payment');
    }, [])

    return (
        <Container>
            <ProfileTopComponent />
            <ListComponent onPress={navigateToPayment} title={'Payment options'} subTitle={'Find out the current, choose a new'} />
        </Container>
    )
}
