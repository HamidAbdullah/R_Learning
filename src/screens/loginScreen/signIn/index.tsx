import React from "react";
import { StatusBar, Text, View } from "react-native";
import CustomHeader from "../../../components/header";
const SignIn = () => {
    return(
        <View>
            <CustomHeader 
            title={'Sign in'}
            rightIconName={'cross'}/>

            <Text style={{color: 'red', fontSize: 30}}> Screen </Text>
        </View>
    )
}

export default SignIn