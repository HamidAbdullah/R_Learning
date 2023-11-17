import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import { ICON_TYPES } from "../../constants/iconTyps";

export const CustomVectorIcons = (props: any) => {
    const {iconName, iconSize, iconColor, iconType} = props;

    switch (iconType) {
        case ICON_TYPES.AntDesign:
            return <AntDesign name={iconName} size={iconSize} color={iconColor} />;
        case ICON_TYPES.Entypo:
            return <Entypo name={iconName} size={iconSize} color={iconColor} />;
        case ICON_TYPES.EvilIcons:
            return <EvilIcons name={iconName} size={iconSize} color={iconColor} />;
        case ICON_TYPES.Feather:
            return <Feather name={iconName} size={iconSize} color={iconColor} />;
        case ICON_TYPES.FontAwesome:
            return <FontAwesome name={iconName} size={iconSize} color={iconColor} />;
        case ICON_TYPES.MaterialCommunityIcons:
            return <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />;
        default:
            return <OcticonsIcons name={iconName} size={iconSize} color={iconColor} />;
            
    }
}