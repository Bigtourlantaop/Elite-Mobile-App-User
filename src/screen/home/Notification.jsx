import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import {FlatList} from 'react-native';
import { Authcontext } from '../../context/Authcontext';
import axios from 'axios';

export default function Notification() {
  const [data, setData] = useState([]);
  const {userInfo} = useContext(Authcontext)

  useEffect(() => {
      axios.get(`http://localhost:8000/users/${userInfo.user_id}/noti`)
        .then((res) => {
          console.log("Data", res.data);
          setData(res.data);
          setHasFetchedData(true);
        })
        .catch(e => {
          console.error('Error', e);
        });
    }, []
    );
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex:1}}>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{flexDirection: 'column', margin:10, borderBottomWidth:1}}>
            <Text style={{margin:5, color:'red'}}>{item.recruiter_name}  ({item.date.slice(0,10)})</Text>
            <Text style={{marginLeft: 20, marginBottom:8}}>{item.text}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})