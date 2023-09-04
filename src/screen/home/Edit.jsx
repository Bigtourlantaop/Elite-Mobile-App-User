import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Edit = ({navigation}) => {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('Profileinside')}}>
      <View>
        <Text>Hello From Edit</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Edit