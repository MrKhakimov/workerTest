import React, {useMemo} from "react";
import {Text} from "react-native";
import {Theme} from "../../utils/theme";

export const TextRegular = ({size= 14, text, color = Theme.grayscale, children, ...props}) => {

    const memoStyle = useMemo(() => {
        return {
            fontFamily: 'Poppins_400Regular',
            fontSize: size,
            color: color,
            ...props?.style
        }
    }, [props?.style, color, size])

    return <Text {...props} style={memoStyle}>{children}</Text>
}

export const TextMedium = ({size= 16, text, color = Theme.dark, children, ...props}) => {

    const memoStyle = useMemo(() => {
        return {
            fontFamily: 'Poppins_600SemiBold',
            fontSize: size,
            color: color,
            ...props?.style
        }
    }, [props?.style, color, size])

    return <Text {...props} style={memoStyle}>{children}</Text>
}

export const TextBold = ({size= 14, text, color = Theme.dark, children, ...props}) => {

    const memoStyle = useMemo(() => {
        return {
            fontFamily: 'Poppins_700Bold',
            fontSize: size,
            color: color,
            ...props?.style
        }
    }, [props?.style, color, size])

    return <Text {...props} style={memoStyle}>{children}</Text>
}
