import { Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../components/CustomDrawer';
import Bottomtab from './Bottomtab';
import Profilestack from './Profilestack';

const Drawer = createDrawerNavigator();

const Headertab = () =>{
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{drawerLabelStyle: {marginLeft: -25, fontSize:17},
    drawerActiveBackgroundColor: '#176B87',
    drawerActiveTintColor: '#EEEEEE',
    drawerInactiveTintColor: '#000000',
    }}
    >
      <Drawer.Screen
        name="Home"
        component={Bottomtab}
        options={({ navigation }) => ({
          drawerIcon: () => (
            <Image
              source={require('../assets/image/Home.png')}
              style={{ width: 30, height: 20 }}
              resizeMode='contain'
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {navigation.navigate('ค้นหา')}}
              style={{ marginRight: 15 }}
            >
              <Image
                source={require('../assets/image/Interest.png')}
                style={{ width: 30, height: 30}}
                resizeMode='contain'
              />
            </TouchableOpacity>
          ),
        })}
      />
        <Drawer.Screen
        name = "Profile"
        component={Profilestack}
        options={{
            drawerIcon: () => (<Image source={require('../assets/image/FooterIcon/CardOutline.png')} 
            style={{ width: 30, height: 20}}
            resizeMode='contain'></Image>)
        }}
        />
    </Drawer.Navigator>
  )
}

export default Headertab