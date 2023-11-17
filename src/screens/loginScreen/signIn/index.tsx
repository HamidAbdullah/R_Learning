import React from "react";
import { StatusBar, Text, View } from "react-native";
import CustomHeader from "../../../components/header";
import CustomTextInput from "../../../components/textInput/inde";
import styles from "./style";
import CustomButton from "../../../components/button";
const SignIn = () => {
    return(
        <View>
            <CustomHeader 
            title={'Sign in'}
            rightIconName={'cross'}
            isShowRight={false}
            rigtSideText="Login"
            />

            <View style={styles.container}>
            <CustomTextInput 
            placeholder="Email"
            placeholderTextColor="#000"
            />
            <CustomTextInput 
            placeholder="Password"
            placeholderTextColor="#000"
            />
            <CustomButton 
                title = "Sign Up"
            />
            </View>
        </View>
    )
}

export default SignIn