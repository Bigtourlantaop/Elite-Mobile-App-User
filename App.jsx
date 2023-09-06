import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Authstack from './src/navigations/Authstack';



const App = () => {
  return( 
    <NavigationContainer>
      <Authstack></Authstack>
    </NavigationContainer>
  );
}

export default App;