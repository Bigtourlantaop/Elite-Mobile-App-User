import { Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../components/CustomDrawer';
import Bottomtab from './Bottomtab';
import Profile from '../screen/home/Profile';

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
        name = "Home"
        component={Bottomtab}
        options={{
            drawerIcon: () => (<Image source={require('../assets/image/Home.png')} 
            style={{ width: 30, height: 20}}
            resizeMode='contain'></Image>)
        }}
        />
        <Drawer.Screen
        name = "Profile"
        component={Profile}
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