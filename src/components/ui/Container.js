import React from "react";
import {View, StyleSheet} from "react-native";
import {Theme} from "../../utils/theme";

export const Container = ({children, style}) => {
    return <View style={[s.container]}>{children}</View>
}
const s = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: Theme.white,
   }
});
