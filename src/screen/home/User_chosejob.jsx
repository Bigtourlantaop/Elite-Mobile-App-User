import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native';

const User_chosejob = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{ alignItems: 'center', flexDirection: 'row', paddingVertical: 20, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#ffffff' }}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('../../assets/image/3Line.png')}
            style={{ width: 30, height: 20, marginLeft: 10 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 30, fontSize: 15, fontWeight: 'bold', flexGrow: 2, fontSize: 20, color: '#000000' }}> ประกาศจ้างงาน </Text>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('../../assets/image/Filtericon.png')}
            style={{ width: 30, height: 20, marginRight: 20 }}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
      <View style={{margin:10, padding:5}}>
        <Text style={{color:'#000000', fontSize:17}}>Day</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginHorizontal: 5, marginVertical: 15}}>
          <View style={styles.cicleView}><Text style={styles.textincircle}>6</Text><Text style={styles.textincircle}>Wed</Text></View>
          <View style={styles.cicleView}><Text style={styles.textincircle}>7</Text><Text style={styles.textincircle}>Thr</Text></View>
          <View style={styles.cicleView}><Text style={styles.textincircle}>8</Text><Text style={styles.textincircle}>Fri</Text></View>
          <View style={styles.cicleView}><Text style={styles.textincircle}>9</Text><Text style={styles.textincircle}>Sat</Text></View>
          <View style={styles.cicleView}><Text style={styles.textincircle}>10</Text><Text style={styles.textincircle}>Sun</Text></View>
          <View style={styles.cicleView}><Text style={styles.textincircle}>11</Text><Text style={styles.textincircle}>Mon</Text></View>
        </View>
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems:'center',flexDirection: 'row', margin:10, borderBottomWidth:1}}>
          <Image 
          source={require('../../assets/image/TeeNoi.png')}
          style={{ width: 60, height: 80,}}
          resizeMode='contain'
          />
          <Text style={{margin:10, flexGrow:2}}>ชื่อ{'\n'}เวลา{'\n'}ตำแหน่ง</Text>
          <Text>50 เครดิต/ชั่วโมง</Text>
        </View>
        <View style={{alignItems:'center',flexDirection: 'row', margin:10, borderBottomWidth:1}}>
          <Image 
          source={require('../../assets/image/TeeNoi.png')}
          style={{ width: 60, height: 80,}}
          resizeMode='contain'
          />
          <Text style={{margin:10, flexGrow:2}}>ชื่อ{'\n'}เวลา{'\n'}ตำแหน่ง</Text>
          <Text>50 เครดิต/ชั่วโมง</Text>
        </View>
        <View style={{alignItems:'center',flexDirection: 'row', margin:10, borderBottomWidth:1}}>
          <Image 
          source={require('../../assets/image/TeeNoi.png')}
          style={{ width: 60, height: 80,}}
          resizeMode='contain'
          />
          <Text style={{margin:10, flexGrow:2}}>ชื่อ{'\n'}เวลา{'\n'}ตำแหน่ง</Text>
          <Text>50 เครดิต/ชั่วโมง</Text>
        </View>
        <View style={{alignItems:'center',flexDirection: 'row', margin:10, borderBottomWidth:1}}>
          <Image 
          source={require('../../assets/image/TeeNoi.png')}
          style={{ width: 60, height: 80,}}
          resizeMode='contain'
          />
          <Text style={{margin:10, flexGrow:2}}>ชื่อ{'\n'}เวลา{'\n'}ตำแหน่ง</Text>
          <Text>50 เครดิต/ชั่วโมง</Text>
        </View>
        <View style={{alignItems:'center',flexDirection: 'row', margin:10, borderBottomWidth:1}}>
          <Image 
          source={require('../../assets/image/TeeNoi.png')}
          style={{ width: 60, height: 80,}}
          resizeMode='contain'
          />
          <Text style={{margin:10, flexGrow:2}}>ชื่อ{'\n'}เวลา{'\n'}ตำแหน่ง</Text>
          <Text>50 เครดิต/ชั่วโมง</Text>
        </View>
        <View style={{alignItems:'center',flexDirection: 'row', margin:10, borderBottomWidth:1}}>
          <Image 
          source={require('../../assets/image/TeeNoi.png')}
          style={{ width: 60, height: 80,}}
          resizeMode='contain'
          />
          <Text style={{margin:10, flexGrow:2}}>ชื่อ{'\n'}เวลา{'\n'}ตำแหน่ง</Text>
          <Text>50 เครดิต/ชั่วโมง</Text>
        </View>
        <View style={{alignItems:'center',flexDirection: 'row', margin:10, borderBottomWidth:1}}>
          <Image 
          source={require('../../assets/image/TeeNoi.png')}
          style={{ width: 60, height: 80,}}
          resizeMode='contain'
          />
          <Text style={{margin:10, flexGrow:2}}>ชื่อ{'\n'}เวลา{'\n'}ตำแหน่ง</Text>
          <Text>50 เครดิต/ชั่วโมง</Text>
        </View>
        <View style={{alignItems:'center',flexDirection: 'row', margin:10, borderBottomWidth:1}}>
          <Image 
          source={require('../../assets/image/TeeNoi.png')}
          style={{ width: 60, height: 80,}}
          resizeMode='contain'
          />
          <Text style={{margin:10, flexGrow:2}}>ชื่อ{'\n'}เวลา{'\n'}ตำแหน่ง</Text>
          <Text>50 เครดิต/ชั่วโมง</Text>
        </View>
        <View style={{alignItems:'center',flexDirection: 'row', margin:10, borderBottomWidth:1}}>
          <Image 
          source={require('../../assets/image/TeeNoi.png')}
          style={{ width: 60, height: 80,}}
          resizeMode='contain'
          />
          <Text style={{margin:10, flexGrow:2}}>ชื่อ{'\n'}เวลา{'\n'}ตำแหน่ง</Text>
          <Text>50 เครดิต/ชั่วโมง</Text>
        </View>
      </ScrollView>
    </View>
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

export default User_chosejob;