import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Profile from '../screen/home/Profile';
import Edit from '../screen/home/Edit';

const fixstack = createStackNavigator();
const Profilestack = () => {
  return (
    <fixstack.Navigator screenOptions={{headerShown: false}}>
        <fixstack.Screen name="Profileinside" component={Profile}></fixstack.Screen>
        <fixstack.Screen name="editProfile" component={Edit}></fixstack.Screen>
    </fixstack.Navigator>
  )
}

export default Profilestack