import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Jobstatus from '../screen/home/Jobstatus';
import Job from '../screen/home/Job';

const statusnavigate = createStackNavigator();

const Statusstack = () => {
  return( 
    <statusnavigate.Navigator screenOptions={{headerShown: false}}>
      <statusnavigate.Screen name="jobb" component={Job}></statusnavigate.Screen>
      <statusnavigate.Screen name="statusjob" component={Jobstatus}></statusnavigate.Screen>
    </statusnavigate.Navigator>
  );
}

export default Statusstack;