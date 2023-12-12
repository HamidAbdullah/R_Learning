import { View, Text, Image, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
import { AuthContext } from '../../../Navigation/authProvider';

const HomeScreen = () => {
  const authContext = useContext(AuthContext);

  const navigation = useNavigation();
  const { user } = authContext;

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="settings"
            size={25}
            color="black"
            onPress={() => navigation.navigate('Setting' as never)}
          />
        </View>
        <Text style={{
          justifyContent: 'center',
          textAlign: 'center'
        }}>Welcome {user.email}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;


