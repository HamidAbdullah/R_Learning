import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  topContainer: {
    width: SCREEN_WIDTH,
    height: 300,
  },
  
  welcomeText: {
    color: 'black',
    fontSize: 45,
    fontWeight: '900',
    marginTop: 70,
    marginLeft: 40,
    width: 250,
  },
  loginFormView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginFormTextInput: {
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
  loginError: {
    color: 'red',
    textAlign: 'center',
    fontSize: 15,
  },
  signinButtonContainer: {
    alignContent: 'center',
    borderRadius: 15,
    marginTop: 15,
  },
  signinText: {
    fontWeight: '900',
    color: '#000',
    fontSize: 30,
  },
  upperSignupText: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
  signupText: {
    color: 'green',
    fontWeight: '600',
  },
  forgotPasswrodText: {
    color: 'green',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});
export default styles;
