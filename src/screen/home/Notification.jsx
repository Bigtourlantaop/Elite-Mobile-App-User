import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import {FlatList} from 'react-native';
import { Authcontext } from '../../context/Authcontext';
import axios from 'axios';
import { YOURAPI } from '../../constants/editendpoint';

export default function Notification() {
  const [selectedData, setSelectedData] = useState([]);
  const {userInfo} = useContext(Authcontext)

  useEffect(() =>{
    try {
      axios.get(`http://${YOURAPI}/users/${userInfo.user_id}/noti`)
        .then((res) => {
          console.log("DataListworkId", res.data);
          Promise.all(res.data.map(noti_id => 
            axios.get(`http://${YOURAPI}/users/noti/${noti_id}`)
          ))
          .then(responses => {
            const workData = responses.map(response => response.data);
            console.log(workData)
            setSelectedData(workData);
          })
        })
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setSelectedData([]); 
      }
    }
  }, [userInfo.user_id]);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex:1}}>
      <FlatList
        data={selectedData}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text>No Notification</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={{flexDirection: 'column', margin:10, borderBottomWidth:1}}>
            <Text style={{margin:5, color:'red'}}>{item.name}  ({item.date.slice(0,10)})</Text>
            <Text style={{marginLeft: 20, marginBottom:8}}>{item.text}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
