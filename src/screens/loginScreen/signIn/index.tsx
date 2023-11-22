import React from "react";
import { StatusBar, Text, View } from "react-native";
import CustomHeader from "../../../components/header";
import CustomTextInput from "../../../components/textInput/inde";
import styles from "./style";
import CustomButton from "../../../components/button";
import { useNavigation } from "@react-navigation/native";
const SignIn = () => {
    const navigation = useNavigation();

    const handleOnPressRight = () => {
        navigation.navigate('SignUp' as never);
    }

    return (
        <View>
            <CustomHeader
                title={'Sign in'}
                rightIconName={'cross'}
                isShowRight={false}
                rigtSideText="Login"
                handleOnPressRight={() => handleOnPressRight() as never}
                leftIconName={""}
                rightIconType={""}
                leftIconType={""}
                iconColor={""}
                iconSize={0}
                handleOnPressLeft={() => console.clear} />

            <View style={styles.container}>
                <CustomTextInput
                    placeholder="Name"
                    placeholderTextColor="#000"
                    value={""}
                    onChangeText={undefined}
                    customInput={undefined}
                    customContainerInput={undefined}
                    multiline={undefined}
                    secureTextEntry={false}
                />
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
                    title="Sign In"
                />

            </View>
        </View>
    )
}

export default SignIn