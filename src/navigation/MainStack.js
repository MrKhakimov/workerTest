import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TabScreen} from "./TabStack";
import {PaymentOptionsScreen, PaymentScreen} from "../screens";
import {styles} from "./styles";
import {Theme} from "../utils/theme";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.mainHeaderTitleStyle,
                headerIconColor: Theme.grayscale,
            }}
        >
            <Stack.Screen name="Home" component={TabScreen} options={{header: () => null}} />
            <Stack.Screen name="Payment" component={PaymentScreen} options={{headerTitle: 'Change payment options'}} />
            <Stack.Screen name="PaymentOptions" component={PaymentOptionsScreen}  options={{headerTitle: 'Payment options'}} />
        </Stack.Navigator>
    )
}
