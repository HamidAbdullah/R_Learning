import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { ICON_TYPES } from "../../constants/iconTyps";
import { CustomVectorIcons } from "../vectorIcons";
import styles from "./style";

export type PropsType = {
    title:  string,
    rightIconName: string,
    leftIconName: string,
    rightIconType: string,
    leftIconType: string,
    iconColor: string,
    iconSize: number,
    handleOnPressRight: () => {},
    handleOnPressLeft: () => {},
}
 
const CustomHeader = (props: PropsType) => {

    const {
        title = '',
        rightIconName = 'back',
        leftIconName = 'cross',
        rightIconType = ICON_TYPES.Entypo,
        leftIconType = ICON_TYPES.Entypo,
        iconSize = 30,
        iconColor = '#000',
        handleOnPressRight = () => {},
        handleOnPressLeft = () => {},

    } = props;

    const renderLeftIcon = () => {

        return (
            <TouchableOpacity 
                onPress={handleOnPressLeft}
                style={styles.backContainerStyle}>
                <CustomVectorIcons
                    iconName={leftIconName}
                    iconType={leftIconType}
                    iconSize={iconSize}
                    iconColor={iconColor}
                    isShowRight = {true}
                />
            </TouchableOpacity>
        );

    };

    const renderRightIcon = () => {

        return (
            <TouchableOpacity 
                onPress={handleOnPressRight}
                style={styles.backContainerStyle}>
                <CustomVectorIcons
                    iconName={rightIconName}
                    iconType={rightIconType}
                    iconSize={iconSize}
                    iconColor={iconColor}
                    isShowRight = {true}
                />
            </TouchableOpacity>
        );

    };

    const renderTitle = () => {
        return (
            <Text style={styles.text}>{title}</Text>
        );
    };

    return (
        <View style={styles.container}>
            {renderLeftIcon()}
            {renderTitle()}
            {renderRightIcon()}

        </View>
    );
};

export default CustomHeader;
