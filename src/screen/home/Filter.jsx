import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Filter = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => {navigation.goBack()}}>
        <View>
        <Text>Hello from Filter</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Filter