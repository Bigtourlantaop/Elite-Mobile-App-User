import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import { Authcontext } from '../../context/Authcontext';
import axios from 'axios';

export default function Profile({navigation}) {
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [data, setData] = useState([]);
  const {userInfo} = useContext(Authcontext)

  useEffect(() => {
    if (!hasFetchedData) {
      axios.get(`http://localhost:8000/users/${userInfo.user_id}`)
        .then((res) => {
          console.log("Data", res.data);
          setData(res.data);
          setHasFetchedData(true);
        })
        .catch(e => {
          console.error('Error', e);
        });
    }
  }, [hasFetchedData]);

  return (
    <SafeAreaView style={{flex:1,}}>
      <ScrollView>
        <TouchableOpacity onPress={() => {navigation.navigate('EditProfile')}}>
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
          <Text style={{fontSize: 30, color:'#000000', fontWeight:'500'}}>{userInfo.first_name}</Text>
          <View style={{ alignItems:'center',flexDirection: 'row', marginTop: 10}}>
            <Image source={data.point >= 25 ? require('../../assets/image/StarOutline.png') : require('../../assets/image/Star.png')} style={{height:40, width:40}}></Image>
            <Image source={data.point >= 50 ? require('../../assets/image/StarOutline.png') : require('../../assets/image/Star.png')} style={{height:40, width:40}}></Image>
            <Image source={data.point >= 100 ? require('../../assets/image/StarOutline.png') : require('../../assets/image/Star.png')} style={{height:40, width:40}}></Image>
            <Image source={data.point >= 150 ? require('../../assets/image/StarOutline.png') : require('../../assets/image/Star.png')} style={{height:40, width:40}}></Image>
            <Image source={data.point >= 200 ? require('../../assets/image/StarOutline.png') : require('../../assets/image/Star.png')} style={{height:40, width:40}}></Image>
            <Text style={{marginLeft:20, fontSize: 20, color:'#000000', fontWeight:'400'}}>คะแนน {data.point}</Text>
          </View>
        </View>
        <View style={{flexDirection:'row', marginTop: 25, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>ชื่อเล่น :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{data.nick_name}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>เพศ :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{data.gender}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>อายุ :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{data.age}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>วันเกิด :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{data.birth_date}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>เบอร์โทรศัพท์ :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{data.tel}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>Gmail :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{data.email}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>LineId :  </Text>
          <Text style={{color:'#000000', fontSize: 17}}>{data.line_id}</Text>
        </View>
        <View style={{marginTop: 15, marginHorizontal:25}}>
          <Text style={{color: '#176B87', fontSize: 17}}>ที่อยู่ปัจจุบัน</Text>
          <View style={{borderWidth: 10, alignItems: 'center', margin: 15, borderColor: '#EEEEEE'}}>
            <Image source={require('../../assets/image/Maps.png')} style={{width: '100%', height:250, margin: 15}}></Image>
            <View style={{flexDirection: 'row'}}>
            </View>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}