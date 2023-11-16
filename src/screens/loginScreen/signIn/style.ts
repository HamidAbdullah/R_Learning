import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: SCREEN_HEIGHT/4 - 100,
    }
})

export default styles;