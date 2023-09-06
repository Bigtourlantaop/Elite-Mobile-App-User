import { View, Text, TextInput, SafeAreaView, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const Resume = ({navigation}) => {
  return (
    <SafeAreaView style = {{flex:1,}}>
      <View style = {{alignItems: 'center'}}>
        <TextInput style={{borderWidth:1, width: '80%', marginTop: 30, height: 500}} multiline={true} textAlignVertical="top" />
      </View>
      <TouchableOpacity onPress={() => {navigation.goBack()}} style={styles.Savebut}>
          <Text style={{color: '#ffffff'}}>บันทึก</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Savebut:{
    backgroundColor: '#000000',
    height: 50,
    margin: 25,
    borderWidth: 1,
    padding: 10,
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center'
},
});
export default Resume