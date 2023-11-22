import React from "react";
import { StatusBar, Text, View } from "react-native";
import CustomHeader from "../../../components/header";
import CustomTextInput from "../../../components/textInput/inde";
import styles from "./style";
import CustomButton from "../../../components/button";
import { useNavigation } from "@react-navigation/native";
const SignUp = () => {
    const navigation = useNavigation();

    const handleOnPressRight = () => {
        navigation.navigate('SignUp' as never);
    }

    return (
        <View>
            <CustomHeader
                title={'Sign Up'}
                isShowRight={false}
                leftIconName=""
                handleOnPressRight={() => handleOnPressRight() as never}
            />

            <View style={styles.container}>
                <CustomTextInput
                    placeholder="Email"
                    placeholderTextColor="#000"
                    value={""}
                    onChangeText={undefined}
                    customInput={undefined}
                    customContainerInput={undefined}
                    multiline={undefined}
                    secureTextEntry={false}
                />
                <CustomTextInput
                    placeholder="Password"
                    placeholderTextColor="#000"
                    secureTextEntry={true}
                    value={""}
                    onChangeText={undefined}
                    customInput={undefined}
                    customContainerInput={undefined}
                    multiline={undefined}
                />
                <CustomButton
                    title="Sign Up"
                />
            </View>
        </View>
    )
}

export default SignUp;