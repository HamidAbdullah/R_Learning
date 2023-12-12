import React, { useState, useContext } from 'react';
import styles from './style';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import { AuthContext } from '../../../Navigation/authProvider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../../components/textInput/inde';
import CustomButton from '../../../components/button';
import CustomHeader from '../../../components/header';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFormateError, setEmailFormateError] = useState('');

  const navigation = useNavigation();

  const authContext = useContext(AuthContext);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!authContext) {
    return <Text>Error: AuthContext is not defined</Text>;
  }

  const { register, signupError, setSignupError } = authContext;

  const handleSignUp = () => {
    if (!emailRegex.test(email)) {
      setEmailFormateError('Email format is incorrect');
      return;
    }

    setEmailFormateError(''); 

    register({ email, password });
  };


  const handleInputChange = (text: any) => {
    setEmail(text);

    if (signupError) {
      setSignupError(null);
    }
  };
  const handlePasswordChange = (text: any) => {
    setPassword(text);
    if (signupError) {
      setSignupError(null);
    }
  };
  return (
    <SafeAreaView style={styles.containerView}>

      <CustomHeader
        title='Sign Up'
        isShowRight={false}
        iconColor='#fff'
      />
      <View style={styles.signupFormView}>

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
          placeholder="Create Password"
          placeholderTextColor="#000"
          onChangeText={handlePasswordChange}
          value={password}
          autoCorrect={false}
          secureTextEntry = {true}
        />

        {signupError && <Text style={{ color: 'red', textAlign: 'center' }}>{signupError}</Text>}
        <View style={styles.signinButtonContainer}>
          <CustomButton
            title='Sign Up'
            onPress={handleSignUp}
          />

        </View>
        <Text style={styles.upperSignupText}
          onPress={() => navigation.navigate('Login' as never)}>
          Already have an account? <Text style={styles.innerSignupText} >LogIn</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
