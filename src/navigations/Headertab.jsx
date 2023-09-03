import { Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Income from '../screen/home/Income'; 
import Job from '../screen/home/Job';
import CustomDrawer from '../components/CustomDrawer';
import Bottomtab from './Bottomtab';
const Drawer = createDrawerNavigator();

const Headertab = () =>{
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{drawerLabelStyle: {marginLeft: -25, fontSize:17},
    drawerActiveBackgroundColor: '#176B87',
    drawerActiveTintColor: '#EEEEEE',
    drawerInactiveTintColor: '#000000'
    }}
    >
        <Drawer.Screen
        name = "ประกาศจ้าง"
        component={Bottomtab}
        options={{
            drawerIcon: () => (<Image source={require('../assets/image/Home.png')} 
            style={{ width: 30, height: 20}}
            resizeMode='contain'></Image>)
        }}
        />
        <Drawer.Screen
        name = "Job"
        component={Job}
        options={{
            drawerIcon: () => (<Image source={require('../assets/image/FooterIcon/CardOutline.png')} 
            style={{ width: 30, height: 20}}
            resizeMode='contain'></Image>)
        }}
        />
        <Drawer.Screen
        name = "Income"
        component={Income}
        options={{
            drawerIcon: () => (<Image source={require('../assets/image/FooterIcon/Dollar.png')} 
            style={{ width: 30, height: 20}}
            resizeMode='contain'></Image>)
        }}
        />

    </Drawer.Navigator>
  )
}

export default Headertab