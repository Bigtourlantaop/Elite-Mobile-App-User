import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import React from 'react'
import { ScrollView , FlatList} from 'react-native';

const dataDeatail = ([
  {name: 'ตี๋น้อยรัชโยธิน',
   time: '00:00 - 12:00',
   position: 'ล้างจาน',
   credit: '50',
   state: 'กำลังทำ',
   color: 'green',
  },
  {name: 'ตี๋น้อยรัชโยธิน',
  time: '00:00 - 12:00',
  position: 'ล้างจาน',
  credit: '40',
  state: 'เสร็จสิ้น',
  color: 'red',
  },
  {name: 'ตี๋น้อยรัชโยธิน',
  time: '00:00 - 12:00',
  position: 'ล้างจาน',
  credit: '30',
  state: 'รอ',
  color: 'black',
  },
]);

export default function Job() {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex:1}}>
      <FlatList
        data={dataDeatail}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{alignItems:'center',flexDirection: 'row', margin:10, borderBottomWidth:1}}>
            <Image 
              source={require('../../assets/image/TeeNoi.png')} 
              style={{ width: 60, height: 80,}}
              resizeMode='contain'
            />
            <Text style={{margin:10, flexGrow:2}}>ชื่อ : {item.name}{'\n'}เวลา : {item.time}{'\n'}ตำแหน่ง : {item.position}</Text>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <Text>{item.credit} เครดิต/ชั่วโมง</Text>
              <Text style={{color: item.color}}>{item.state}</Text>
            </View>
            <Text></Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})