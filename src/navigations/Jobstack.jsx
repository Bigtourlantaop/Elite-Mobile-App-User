import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/home/Home';
import Jobdetail from '../screen/home/Jobdetail';

const SJob = createStackNavigator();

const Jobstack = () => {
  return( 
    <SJob.Navigator screenOptions={{headerShown: false}}>
      <SJob.Screen name="pageHome" component={Home}></SJob.Screen>
      <SJob.Screen name="รายละเอียดงาน" component={Jobdetail}></SJob.Screen>
    </SJob.Navigator>
  );
}

export default Jobstack;