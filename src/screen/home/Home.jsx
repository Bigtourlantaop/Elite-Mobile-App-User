
import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import { ScrollView , FlatList} from 'react-native';

const Home = () => {
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

  const date = ([
    {date: '6',
     day: 'Wed'  
    },
    {date: '7',
    day: 'Thr'  
    },
    {date: '8',
    day: 'Fri'  
    },
    {date: '9',
    day: 'Sat'  
    },
    {date: '10',
    day: 'Sun'  
    },
    {date: '11',
    day: 'Mon'  
    },
    {date: '12',
    day: 'Tue'  
    },
    {date: '13',
    day: 'Wes'  
    },
]);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex:1}}>
      
      <View style={{margin:10, padding:5}}>
        <Text style={{color:'#000000', fontSize:17}}>Day</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginHorizontal: 5, marginBottom: 40}}>
          <View style={styles.cicleView}><Text style={styles.textincircle}>6</Text><Text style={styles.textincircle}>Wed</Text></View>
          <View style={styles.cicleView}><Text style={styles.textincircle}>7</Text><Text style={styles.textincircle}>Thr</Text></View>
          <View style={styles.cicleView}><Text style={styles.textincircle}>8</Text><Text style={styles.textincircle}>Fri</Text></View>
          <View style={styles.cicleView}><Text style={styles.textincircle}>9</Text><Text style={styles.textincircle}>Sat</Text></View>
          <View style={styles.cicleView}><Text style={styles.textincircle}>10</Text><Text style={styles.textincircle}>Sun</Text></View>
          <View style={styles.cicleView}><Text style={styles.textincircle}>11</Text><Text style={styles.textincircle}>Mon</Text></View>
        </View>
      </ScrollView>
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
  );
};

const styles = StyleSheet.create({
  cicleView : {
    width: 75,
    height: 75,
    borderRadius: 75/2,
    backgroundColor: '#93B5C6',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  textincircle : {
    color: '#ffffff'
  }
}
)

export default Home;