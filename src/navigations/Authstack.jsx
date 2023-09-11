import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Loginpage from '../screen/auth/login_screen';
import Register_Screen from '../screen/auth/Register_Screen';
import Headertab from './Headertab';
import Forget_screen from '../screen/auth/Forget_screen';

const Stack = createStackNavigator();

const Authstack = () => {
  return( 
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
      <Stack.Screen name="Login" component={Loginpage}></Stack.Screen>
      <Stack.Screen name="Register" component={Register_Screen}></Stack.Screen>
      <Stack.Screen name="Forget" component={Forget_screen}></Stack.Screen>
      <Stack.Screen name="HomeScreen" component={Headertab}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default Authstack;