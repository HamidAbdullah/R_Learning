import { StyleSheet, Dimensions } from 'react-native';
import { SCREEN_DIMENSIONS } from '../../../constants/iconTyps';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  welcomeText: {
    color: 'black',
    fontSize: 45,
    fontWeight: '900',
    marginTop: 70,
    marginLeft: 40,
    width: 200,
  },
  signupScreenContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  signupFormView: {
    marginTop: SCREEN_DIMENSIONS.height / 2 - 250,
    justifyContent: 'center'
  },
  signupFormTextInput: {
    color: '#000',
    height: 60,
    width: 300,
    fontSize: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    backgroundColor: '#bdc3c7',
    padding: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  signinButtonContainer: {
    borderRadius: 15,
  },
  loginError: {
    color: 'red',
    textAlign: 'center',
    fontSize: 15,
  },

  upperSignupText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 15,
  },
  signupText: {
    fontWeight: '900',
    color: '#000',
    fontSize: 30,
  },
  innerSignupText: {
    color: 'green',
    fontWeight: '600',
  },
});

export default styles;
