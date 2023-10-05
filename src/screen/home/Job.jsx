import { Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Authcontext } from '../../context/Authcontext';
import axios from 'axios';
import { YOURAPI } from '../../constants/editendpoint';




export default function Job() {
  const navigation = useNavigation();
  const {userInfo} = useContext(Authcontext)
  const [selectedData, setSelectedData] = useState([]);


  useEffect(() =>{
    try {
      axios.get(`http://${YOURAPI}/users/${userInfo.user_id}/works`)
        .then((res) => {
          console.log("DataListworkId", res.data);
          Promise.all(res.data.work_list.map(work_id => 
            axios.get(`http://${YOURAPI}/users/${userInfo.user_id}/works/${work_id}`)
          ))
          .then(responses => {
            const workData = responses.map(response => response.data);
            console.log("Work Data", workData);
            setSelectedData(workData);
          })
          .catch(error => {
            if (error.response && error.response.status === 400) {
              setSelectedData([]); 
            }
          });
        })
        .catch(error => {
          if (error.response && error.response.status === 400) {
            setSelectedData([]);
          }
        });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setSelectedData([]); 
      }
    }
  }, []);
  

  const getStatusColor = (status) => {
    switch (status) {
      case 'กำลังทำ':
        return 'green';
      case 'รอ':
        return '#132043';
      case 'เสร็จ':
        return 'red';
      default:
        return 'white';
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex:1}}>
      <FlatList
        data={selectedData}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item ,index) => index.toString()}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text>No jobs</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {navigation.navigate('statusjob', {item})}}>
            <View style={{alignItems:'center',flexDirection: 'row', margin:10, borderBottomWidth:1}}>
              <Image 
                source={require('../../assets/image/TeeNoi.png')} 
                style={{ width: 60, height: 80,}}
                resizeMode='contain'
              />
              <Text style={{margin:10, flexGrow:2}}>ชื่อ : {item.work_detail.name}{'\n'}เวลา : {item.work_detail.start_time} - {item.work_detail.end_time}{'\n'}ตำแหน่ง : {item.work_detail.type_of_work}</Text>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <Text style={{marginVertical: 5}}>{item.work_detail.hourly_income} เครดิต/ชั่วโมง</Text>
                <View style={{backgroundColor: '#FAF2D3', width: 50, justifyContent: 'center', alignItems: 'center', height : 30, borderRadius: 5}}>
                  <Text style={{color: getStatusColor(item.status)}}>{item.status}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}
