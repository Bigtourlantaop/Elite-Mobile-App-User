import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Authstack from './src/navigations/Authstack';
import { AuthProvider } from './src/context/Authcontext';



const App = () => {
  return( 
    <AuthProvider>
      <NavigationContainer>
        <Authstack></Authstack>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;