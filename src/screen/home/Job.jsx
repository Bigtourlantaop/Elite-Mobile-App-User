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
          Promise.all(res.data.work_list.map(work_id => 
            axios.get(`http://${YOURAPI}/users/${userInfo.user_id}/works/${work_id}`)
          ))
          .then(responses => {
            const workData = responses.map(response => response.data);
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
        return '#E9B824';
      case 'เสร็จ':
        return 'red';
      default:
        return '#000000';
    }
  };

  console.log(selectedData);
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
            <View style={{alignItems:'center',flexDirection: 'row', margin:10, borderRadius: 20, paddingHorizontal: 10, backgroundColor: '#C1D8C3', paddingVertical: 7}}>
              <View style={{
              height: 80,
              width: 80,
              borderRadius: 40, 
              overflow: 'hidden'
              }}>
                <Image 
                  source={{uri: item.work_detail.image}} 
                  style={{ flex: 1, width: null, height: null,}}
                  resizeMode='contain'
                />
              </View>
              <View style={{flexGrow: 2,}}>
                <View style={{width: 200, marginLeft: 5}}>
                  <Text style={{fontSize: 20, fontWeight: '500'}}>{item.work_detail.name}</Text>
                  <Text style={{}}>วันทำงาน : {item.work_detail.work_date}</Text>
                  <Text style={{}}>ตำแหน่ง : {item.work_detail.type_of_work}</Text>
                </View>
              </View>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <View style={{backgroundColor: getStatusColor(item.status), width: 50, justifyContent: 'center', alignItems: 'center', height : 30, borderRadius: 5}}>
                  <Text style={{color: 'white'}}>{item.status}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}
