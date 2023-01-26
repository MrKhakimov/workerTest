import {Navigation} from "./navigation";
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {useCallback, useEffect, useState} from "react";
import * as SplashScreen from 'expo-splash-screen';
import {Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Theme} from "./utils/theme";
SplashScreen.preventAutoHideAsync().then();

export const Root = () => {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            if (fontsLoaded) {
                setAppIsReady(true);
                await SplashScreen.hideAsync();
            } else {
                setAppIsReady(false);
            }
        }
        prepare().then();
    }, [fontsLoaded]);

    if (!appIsReady) {
        return null;
    }

    return (
        <>
            <StatusBar translucent={false} backgroundColor={Theme.backgroundHeader} />
            <Navigation />
        </>
    );
}
