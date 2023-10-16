import { Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {FlatList} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Authcontext } from '../../context/Authcontext';
import axios from 'axios';
import { YOURAPI } from '../../constants/editendpoint';




export default function Job() {
  const navigation = useNavigation();
  const {userInfo} = useContext(Authcontext)
  const [selectedData, setSelectedData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://${YOURAPI}/users/${userInfo.user_id}/works`);
          const workList = response.data.work_list;
          const promises = workList.map(work_id => axios.get(`http://${YOURAPI}/users/${userInfo.user_id}/works/${work_id}`));
          const responses = await Promise.all(promises);
          const workData = responses.map(response => response.data);
          setSelectedData(workData);
        } catch (error) {
          if (error.response && error.response.status === 400) {
            setSelectedData([]);
          }
        }
      };
      fetchData();
    }, [userInfo.user_id])
);

  

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
                  <Text style={{}}>ตำแหน่ง : {(() => {
                          switch(item.work_detail.type_of_work) {
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
                              return item.work_detail.type_of_work;
                          }
                        })()}</Text>
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
