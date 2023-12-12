import React, { useState, useContext } from 'react';
import styles from './styles';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';
import { AuthContext } from '../../../Navigation/authProvider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../../components/textInput/inde';
import CustomHeader from '../../../components/header';
import CustomButton from '../../../components/button';
import { SCREEN_DIMENSIONS } from '../../../constants/iconTyps';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [emailFormateError, setEmailFormateError] = useState('');
  const navigation = useNavigation();

  const authContext = useContext(AuthContext);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!authContext) {
    return <Text>Error: AuthContext is not defined</Text>;
  }

  const { resetPassword } = authContext;

  const handleResetPassword = async () => {
    if (!emailRegex.test(email)) {
      console.log('Email format is incorrect');
      setEmailFormateError('Email format is incorrect');
      return;
    } else {
      try {
        await resetPassword(email);
        Alert.alert('Success', 'Password Reset Email sent successfully', [
          { text: 'OK', onPress: () => navigation.navigate('Login' as never) },
        ]);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <SafeAreaView style={styles.containerView}>
      <CustomHeader
        isShowRight={false}
        iconColor='#fff'
        title='Forget Password'
      />
      <View style={{
        marginTop: SCREEN_DIMENSIONS.height / 4 - 100,
      }}>
        <CustomTextInput
          value={email}
          placeholder="Enter your Email"
          onChangeText={userEmail => setEmail(userEmail)}
          keyboardType="email-address"
          autoCorrect={false}
          placeholderTextColor="#000"
        />
        <View>
          {emailFormateError !== '' && (
            <Text style={styles.loginError}>
              {emailFormateError}
            </Text>
          )}
        </View>
        <View style={styles.signinButtonContainer}>
          <CustomButton
            title='Forget Password'
            onPress={handleResetPassword}
            disabled={!email}
          />
        </View>
      </View>
      <View>
        <Text style={styles.upperSignupText}
          onPress={() => navigation.navigate('Login' as never)}>
          Already have an account? <Text style={styles.innerSignupText} >LogIn</Text>
        </Text>
      </View>
    </SafeAreaView >
  );
};

export default SignUpScreen;
