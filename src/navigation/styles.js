import {StyleSheet} from "react-native";
import {Theme} from "../utils/theme";

export const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Theme.backgroundHeader,
        borderBottomColor: Theme.divider,
        borderBottomWidth: 1,
    },
    headerTitleStyle: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold'
    },
    mainHeaderTitleStyle: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular'
    },
});
