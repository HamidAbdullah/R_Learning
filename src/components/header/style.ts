import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
      color: 'black',
      fontSize: 15,
      textTransform: 'uppercase',
      fontWeight:'600'
  },
  menuIcon: {
    fontSize: 35,
    color: '#000',
  },
  backContainerStyle: {
      marginStart: 10,
      marginEnd: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
  },
});
export default styles;