import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const _point = 1;

const ListData = (
  { nickname: 'มอส',
    sex: 'F',
    age: '20',
    date: '19 ตุลาคม 2545',
    tel: '0123456789',
    email: 'mos@gmail.com',
    lineid: '-',
    mylocation: '-',
  }
)



export default function Profile({navigation}) {
  return (
    <SafeAreaView style={{flex:1,}}>
      <ScrollView>
        <TouchableOpacity onPress={() => {navigation.navigate('editProfile')}}>
          <View style={{flexDirection:'row-reverse', marginLeft: 10, marginTop:20}}>
            <Text style={{color: '#000000'}}>แก้ไขข้อมูล</Text>
          </View>
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
          <Image source={require('../../assets/image/ProfileIcon.png')}
                style={{height:175, width: 175}}
                resizeMode='contain'></Image>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize: 30, color:'#000000', fontWeight:'500'}}>Van der Sar</Text>
          <View style={{ alignItems:'center',flexDirection: 'row', marginTop: 10}}>
            <Image source={_point >= 1 ? require('../../assets/image/StarOutline.png') : require('../../assets/image/Star.png')} style={{height:40, width:40}}></Image>
            <Image source={_point >= 2 ? require('../../assets/image/StarOutline.png') : require('../../assets/image/Star.png')} style={{height:40, width:40}}></Image>
            <Image source={_point >= 3 ? require('../../assets/image/StarOutline.png') : require('../../assets/image/Star.png')} style={{height:40, width:40}}></Image>
            <Image source={_point >= 4 ? require('../../assets/image/StarOutline.png') : require('../../assets/image/Star.png')} style={{height:40, width:40}}></Image>
            <Image source={_point >= 5 ? require('../../assets/image/StarOutline.png') : require('../../assets/image/Star.png')} style={{height:40, width:40}}></Image>
            <Text style={{marginLeft:20, fontSize: 20, color:'#000000', fontWeight:'400'}}>คะแนน {_point}</Text>
          </View>
        </View>
        <View style={{flexDirection:'row', marginTop: 25, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>ชื่อเล่น :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{ListData.nickname}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>เพศ :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{ListData.sex}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>อายุ :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{ListData.age}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>วันเกิด :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{ListData.date}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>เบอร์โทรศัพท์ :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{ListData.tel}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>Gmail :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{ListData.email}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>LineId :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{ListData.lineid}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>ที่อยู่ปัจจุบัน :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{ListData.mylocation}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}