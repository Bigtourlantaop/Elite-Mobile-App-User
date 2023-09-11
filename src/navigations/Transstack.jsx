import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Income from '../screen/home/Income';
import Transfer from '../screen/home/Transfer';
import Numbank from '../screen/home/Numbank';

const TransferStack = createStackNavigator();

const Transstack = () => {
  return( 
    <TransferStack.Navigator screenOptions={{headerShown: false}}>
      <TransferStack.Screen name="รายได้list" component={Income}></TransferStack.Screen>
      <TransferStack.Screen name="โอนเงิน" component={Transfer}></TransferStack.Screen>
      <TransferStack.Screen name="เลขบช" component={Numbank}></TransferStack.Screen>
    </TransferStack.Navigator>
  );
}

export default Transstack;