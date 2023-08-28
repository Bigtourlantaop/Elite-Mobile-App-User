// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import Loginpage from './src/screen/login_screen';

// const App = () => {
//   return( 
//     <NavigationContainer>
//       <Loginpage></Loginpage>
//     </NavigationContainer>
//   );
// }

// export default App;

import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const ScreenA = ({ navigation }) => {
  const ispress = () => {
    navigation.navigate('HomeB')
  }
  return (
  <View>
    <Button
      title="Go to HomeB"
      onPress={ispress}
    />
  </View>
  );
}

const ScreenB = () => {
  <View>
    <Text>Details Screen</Text>
  </View>
}

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeA">
      <Stack.Screen name="HomeA" component={ScreenA} />
      <Stack.Screen name="HomeB" component={ScreenB} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
