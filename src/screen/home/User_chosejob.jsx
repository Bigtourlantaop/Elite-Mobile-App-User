import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{alignItems:'center',flexDirection:'row', paddingVertical: 20, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#ffffff',}}>
        <Image
          source={require('../../assets/image/3Line.png')}
          style={{width: 30, height: 20, marginLeft:10}}
          resizeMode="contain" 
        />
        <Text style={{ marginHorizontal:30, fontSize: 15, fontWeight:'bold',flexGrow:2, fontSize:20, color: '#000000'}}> ประกาศจ้างงาน </Text>
        <Image 
          source={require('../../assets/image/Filtericon.png')}
          style={{width: 30, height: 20, marginRight:10}}
          resizeMode='contain'
        />

    </SafeAreaView>
  );
};

export default App;
