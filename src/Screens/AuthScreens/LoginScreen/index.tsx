import React, { useContext, useState } from 'react';
import styles from './style';
import {
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../Navigation/authProvider';
import CustomTextInput from '../../../components/textInput/inde';
import CustomHeader from '../../../components/header';
import CustomButton from '../../../components/button';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFormateError, setEmailFormateError] = useState('');

  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!authContext) {
    return <Text>loginError: AuthContext is not defined</Text>;
  }

  const { login, loginError, setLoginError } = authContext;

  const handleInputChange = (text: any) => {
    setEmail(text);

    if (loginError) {
      setLoginError(null);
    }
  };
  const handlePasswordChange = (text: any) => {
    setPassword(text);
    if (loginError) {
      setLoginError(null);
    }
  };
  const handleLogin = () => {
    login({ email, password });

    if (!emailRegex.test(email)) {
      console.log('Email format is incorrect');
      setEmailFormateError('Email format is incorrect');
      return;
    }


  };

  return (
    <SafeAreaView style={styles.containerView}>
      <CustomHeader
        title='LogIn'
        isShowRight={false}
        iconColor = {'#fff'}
      />
      <View style={{
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 100
      }}>
        <CustomTextInput
          value={email}
          placeholder="Email"
          onChangeText={handleInputChange}
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

        <CustomTextInput
          placeholder="Password"
          placeholderTextColor="#000"
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={true}
          autoCorrect={false} />
      </View>
      {!emailFormateError && loginError && (
        <Text style={styles.loginError}>
          {loginError}
        </Text>
      )}
      <View style={styles.signinButtonContainer}>
        <CustomButton
          title='Log in'
          onPress={handleLogin}
        />
        <Text
          style={styles.forgotPasswrodText}
          onPress={() => navigation.navigate('ForgotPassword' as never)}
        >Forgot Password</Text>
      </View>
      <View>
        <Text style={styles.upperSignupText}
          onPress={() => navigation.navigate('Signup' as never)}>
          Don't have an account? <Text style={styles.signupText} >SignUp</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
