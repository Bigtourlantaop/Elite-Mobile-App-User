import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Authcontext } from '../../context/Authcontext';
import axios from 'axios';
import { YOURAPI } from '../../constants/editendpoint';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Jobdetail = ({ route }) => {
  const { name, start_time, end_time ,type_of_work, hourly_income, image, work_description, recruiter_id} = route.params.item;
  const navigation = useNavigation();
  const [rec_data, setRec_data] = useState([])
  const _id = route.params.item._id
  const {userInfo} = useContext(Authcontext)
  const Apply_job = () =>{
    axios.patch(`http://${YOURAPI}/users/${userInfo.user_id}/apply/${_id}`, _id)
    .then(response => {
      console.log('Apply successfully', response.data);
      navigation.navigate('pageHome');
    })
    .catch(error => {
      console.error('Error sending data:', error);
    });
  };

  useEffect(() => {
    axios.get(`http://${YOURAPI}/recruiters/${recruiter_id}`)
    .then(res => {
      setRec_data(res.data)
    })
  }, [])
  return (
  <View style={{flex: 1, backgroundColor: 'white'}}>
    <ScrollView style={{marginBottom: 60}}>
      <View style={{flexDirection : 'row', marginBottom: 20, marginTop: 20, justifyContent:'center', alignItems: 'center'}}>
        <Image
          source={{uri : image}}
          style={styles.image}
        />
        <View style={{padding: 10}}>
          <Text style = {{fontSize : 25, flexShrink: 1}} numberOfLines={1}>{name.length > 15 ? name.substring(0, 15) + '...' : name}</Text>
          <Text>{start_time} - {end_time}</Text>
          <Text style={{color : 'red'}}>ตำแหน่ง : {(() => {
              switch(type_of_work) {
                case 'type1':
                  return 'พนักงานเสิร์ฟ';
                case 'type2':
                  return 'พนักงานทำความสะอาด';
                case 'type3':
                  return 'ผู้ช่วยเชฟ';
                case 'type4':
                  return 'พนักงานต้อนรับ';
                case 'type5':
                  return 'พนักงานล้างจาน';
                case 'type6':
                  return 'พนักงานส่งอาหาร';
                case 'type7':
                  return 'พนักงานครัวร้อน';
                default:
                  return type_of_work;
              }
            })()}</Text>
          <Text>{hourly_income} เครดิต/ชั่วโมง</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style = {{fontSize : 19, color: 'white'}}>ที่อยู่</Text>
        <View style={{marginLeft: 10, marginTop:5, flex: 1}}>
          <Text>{rec_data.address}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style = {{fontSize : 19, color: 'white'}}>รายละเอียดงาน</Text>
        <View style={{marginLeft: 10, marginTop:5, flex: 1}}>
          <Text>{work_description.detail.split('\\n').map((item, key) => <Text key={key}>{item}{'\n'}</Text>)}</Text>
        </View>
      </View>
        <View style={styles.textContainer}>
          <Text style = {{fontSize : 19, color: 'white'}}>คุณสมบัติผู้สมัคร</Text>
          <View style={{marginLeft: 10, marginTop:5}}>
            <Text>{work_description.qualification.split('\\n').map((item, key) => <Text key={key}>{item}{'\n'}</Text>)}</Text>
          </View>
        </View>
      <View style={{ marginVertical:10, flexDirection: 'row', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => {navigation.goBack()}} style={{marginHorizontal:13}}>
          <View style = {styles.butt1}>
            <Text style = {{color: 'white'}}>ย้อนกลับ</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {Apply_job()}} style={{marginHorizontal:13}}>
          <View style = {styles.butt}>
            <Text style = {{color: 'white'}}>สมัครงาน</Text>
          </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    marginBottom: 10,
    borderRadius:20
  },
  textContainer: {
    backgroundColor: '#6A9C89',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 25,
    flex: 1
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  bottomText: {
    fontSize: 16,
  }, 
  butt1: {
    width: 90, // กำหนดความกว้างของวงกลม
    height: 45, // กำหนดความสูงของวงกลม
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    margin:10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  butt: {
    width: 90, // กำหนดความกว้างของวงกลม
    height: 45, // กำหนดความสูงของวงกลม
    backgroundColor: 'green',
    alignSelf: 'flex-start',
    margin:10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Jobdetail;
