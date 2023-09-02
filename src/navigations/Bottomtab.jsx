import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Job from '../screen/home/Job';
import User_chosejob from '../screen/home/User_chosejob';
import Notification from '../screen/home/Notification';
import Income from '../screen/home/Income';
import { View, Text, Image} from 'react-native';
import { COLORS } from '../constants/colorIcon';


const Tab = createBottomTabNavigator();
const Bottomtab = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            height: 60,
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            backgroundColor: '#FFE3E3'

          }}}>
            <Tab.Screen name="ประกาศจ้าง" 
            component={User_chosejob}
            options={{
              tabBarIcon:({focused}) => {
                return(
                  <View style={{alignItems: 'center', justifyContent: 'center', height: 60}}>
                    <Image 
                    source={focused ? require('../assets/image/FooterIcon/PeopleOutline.png'): require('../assets/image/FooterIcon/People.png')}
                    style={{ width: 30, height: 20}}
                    resizeMode='contain'/>
                    <Text style={{color:'#000000'}}>ประกาศจ้าง</Text>
                  </View>
                )
              }
            }}
            ></Tab.Screen>
            <Tab.Screen name="งาน" 
            component={Job}
            options={{
              tabBarIcon:({focused}) => {
                return(
                  <View style={{alignItems: 'center', justifyContent: 'center', height: 60,
                  borderTopColor: focused ? COLORS.primary : COLORS.background}}>
                    <Image 
                    source={focused ? require('../assets/image/FooterIcon/Card.png') : require('../assets/image/FooterIcon/CardOutline.png')}
                    style={{ width: 30, height: 20}}
                    resizeMode='contain'/>
                    <Text style={{color:'#000000'}}>งาน</Text>
                  </View>
                )
              }
            }}
            ></Tab.Screen>
            <Tab.Screen name="การแจ้งเตือน" 
            component={Notification}
            options={{
              tabBarIcon:({focused}) => {
                return(
                  <View style={{alignItems: 'center', justifyContent: 'center', height: 60,
                  borderTopColor: focused ? COLORS.primary : COLORS.background}}>
                    <Image 
                    source={focused ? require('../assets/image/FooterIcon/BellOutline.png') : require('../assets/image/FooterIcon/Bell.png')}
                    style={{ width: 30, height: 20}}
                    resizeMode='contain'/>
                    <Text style={{color:'#000000'}}>การแจ้งเตือน</Text>
                  </View>
                )
              }
            }}
            ></Tab.Screen>
            <Tab.Screen name="รายได้" 
            component={Income}
            options={{
              tabBarIcon:({focused}) => {
                return(
                  <View style={{alignItems: 'center', justifyContent: 'center', height: 60,
                  borderTopColor: focused ? COLORS.primary : COLORS.background}}>
                    <Image 
                    source={focused ? require('../assets/image/FooterIcon/DollarOutline.png') : require('../assets/image/FooterIcon/Dollar.png')}
                    style={{ width: 30, height: 20}}
                    resizeMode='contain'/>
                    <Text style={{color:'#000000'}}>รายได้</Text>
                  </View>
                )
              }
            }}
            ></Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Bottomtab;