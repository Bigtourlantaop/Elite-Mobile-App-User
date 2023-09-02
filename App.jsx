import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Authstack from './src/navigations/Authstack';
import User_chosejob from './src/screen/home/User_chosejob';
import Bottomtab from './src/navigations/Bottomtab';

const App = () => {
  return( 
    // <NavigationContainer>
    //   <Authstack></Authstack>
    // </NavigationContainer>
    // <User_chosejob></User_chosejob>
    <Bottomtab></Bottomtab> 
  );
}

export default App;

