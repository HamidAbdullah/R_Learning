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
  const navigation = useNavigation();

  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Text>Error: AuthContext is not defined</Text>;
  }

  const { register, signupError, setSignupError } = authContext;

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
        leftIconName=''
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

        <CustomTextInput
          placeholder="Create Password"
          placeholderTextColor="#000"
          onChangeText={handlePasswordChange}
          value={password}
          autoCorrect={false} />

        {signupError && <Text style={{ color: 'red' }}>{signupError}</Text>}
        <View style={styles.signinButtonContainer}>
          <CustomButton
            title='Sign Up'
            onPress={() => register({ email, password })}
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
