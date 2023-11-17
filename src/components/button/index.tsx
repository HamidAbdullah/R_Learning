import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

type buttonType = {
    
}

function CustomButton(props: any) {
    const {
        title,
        onPress,
        disabled,
        buttonStyleWrapper,
        loading,
        titleStyle
    } = props || {};


    const renderTitle =() => {
        return <Text style={[styles.textButtonVerify, titleStyle]}>{title}</Text>
    }

    return (
            <TouchableOpacity
                style={[styles.buttonVerify, buttonStyleWrapper]}
                activeOpacity={0.9}
                disabled={disabled || loading}
                onPress={onPress}>
                {renderTitle()}
            </TouchableOpacity>
    );
}

export default CustomButton;