import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './authStack';
import HomeStack from './homeStack';
import {AuthContext, AuthContextType} from './authProvider';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext) as AuthContextType;
  console.log(user);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;