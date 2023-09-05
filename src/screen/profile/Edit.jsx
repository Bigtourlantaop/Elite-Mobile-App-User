import { View, Text, TouchableOpacity, Image, SafeAreaView, ImageBackground} from 'react-native'
import React from 'react'

const Edit = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,}}>
      <TouchableOpacity>
        <View style={{alignItems:'center', marginTop: 20}}>
          <ImageBackground source={require('../../assets/image/ProfileIcon.png')}
                    style={{height:175, width: 175, opacity: 0.4}}
                    resizeMode='contain'>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../../assets/image/camera.png')} style={{height: 50, width: 100}} resizeMode='contain'></Image>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Edit