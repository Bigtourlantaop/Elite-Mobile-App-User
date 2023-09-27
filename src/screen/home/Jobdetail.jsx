import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

const Jobdetail = ({ route }) => {
  const { name, start_time, end_time ,type_of_work, hourly_income } = route.params.item;
  const navigation = useNavigation();

  return (
    <ScrollView style={{marginBottom: 60}}>
      <View style={{flexDirection : 'row' ,marginHorizontal: 10, marginBottom: 20, marginTop: 20, justifyContent:'center'}}>
        <Image
          source={require('../../assets/image/TeeNoi.png')}
          style={styles.image}
        />
        <View style={{padding: 30}}>
          <Text style = {{fontSize : 25}}>{name}</Text>
          <Text>   {start_time} - {end_time}</Text>
          <Text style ={{color: 'red' }}>   {type_of_work}</Text>
          <Text>   {hourly_income} เครดิต/ชั่วโมง</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style = {{fontSize : 19}}>รายละเอียดงาน</Text>
        <View style={{marginLeft: 10, marginTop:5}}>
          <Text>1.ช่วยเหลืองานอื่นๆภายในร้าน เช่น เสิร์ฟอาหาร ล้างจาน เป็นต้น</Text>
          <Text>2.พนักงานครัว ทำงานต่างๆในครัว จัดเตรียมอาหาร</Text>
          <Text>3.ทำงานอื่นๆที่ได้รัมอบหมายจากผู้บังคับบัญชา</Text>
        </View>
      </View>
        <View style={styles.textContainer}>
          <Text style = {{fontSize : 19}}>คุณสมบัติผู้สมัคร</Text>
          <View style={{marginLeft: 10, marginTop:5}}>
            <Text>1.ชาย-หญิง</Text>
            <Text>2.สัญชาติไทย</Text>
            <Text>3.อายุ 18-35 ปี</Text>
            <Text>4.ไม่จำเป็นต้องมีประสบการณ์</Text>
            <Text>5.กระตือรือร้นในการทำงาน รอบคอบ คล่องแคล่ว ซื่อสัตย์</Text>
            <Text>6.มีมนุษย์สัมพันธ์ดี ทำงานร่วมกับผู้อื่นได้</Text>
            <Text>7.มีใจรักในงานบริการ</Text>
            <Text>8.มีบุคลิกดี ทัศนคติดี</Text>
          </View>
        </View>
      <View style={{ marginVertical:10}}>
        <Button title="ย้อนกลับ" onPress={() => {navigation.goBack()}}></Button>
        <Button title="สมัครงาน" onPress={() => {}}/>
      </View>
    </ScrollView>
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
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 25,
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  bottomText: {
    fontSize: 16,
  },
});

export default Jobdetail;
