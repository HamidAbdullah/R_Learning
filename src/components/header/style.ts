import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor:'#ffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
      color: 'black',
      fontSize: 25,
      fontWeight:'600'
  },
  rightTextStyle: {
    color: 'green',
    fontSize: 18,
    fontWeight: '300',
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