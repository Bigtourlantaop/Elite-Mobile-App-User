import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Profile from '../screen/profile/Profile';
import Edit from '../screen/profile/Edit';


const Editstack = createStackNavigator();
const Profilestack = () => {
  return (
    <Editstack.Navigator screenOptions={{headerShown: false}}>
        <Editstack.Screen name="Profileinside" component={Profile}></Editstack.Screen>
        <Editstack.Screen name="editProfile" component={Edit}></Editstack.Screen>
    </Editstack.Navigator>
  )
}

export default Profilestack