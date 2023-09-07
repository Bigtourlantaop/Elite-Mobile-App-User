import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import React from 'react'
import { ScrollView , FlatList} from 'react-native';

const dataDeatail = ([
  {name: 'ตี๋น้อยรัชโยธิน',
   time: '00:00 - 12:00',
   position: 'ล้างจาน',
   credit: '50'
  },
  {name: 'ตี๋น้อยรัชโยธิน',
  time: '00:00 - 12:00',
  position: 'ล้างจาน',
  credit: '40'
  },
  {name: 'ตี๋น้อยรัชโยธิน',
  time: '00:00 - 12:00',
  position: 'ล้างจาน',
  credit: '30'
  },
  {name: 'ตี๋น้อยรัชโยธิน',
  time: '00:00 - 12:00',
  position: 'ล้างจาน',
  credit: '20'
  },
  {name: 'ตี๋น้อยรัชโยธิน',
  time: '00:00 - 12:00',
  position: 'ล้างจาน',
  credit: '10'
  },
  {name: 'ตี๋น้อยรัชโยธิน',
  time: '00:00 - 12:00',
  position: 'ล้างจาน',
  credit: '5'
  },
  {name: 'ตี๋น้อยรัชโยธิน',
  time: '00:00 - 12:00',
  position: 'ล้างจาน',
  credit: '4'
  },
  {name: 'ตี๋น้อยรัชโยธิน',
  time: '00:00 - 12:00',
  position: 'ล้างจาน',
  credit: '3'
  },
  {name: 'ตี๋น้อยรัชโยธิน',
  time: '00:00 - 12:00',
  position: 'ล้างจาน',
  credit: '2'
  }
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
            <Text>{item.credit} เครดิต/ชั่วโมง</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})