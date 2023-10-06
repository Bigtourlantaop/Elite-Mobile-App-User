import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

const Jobdetail = ({ route }) => {
  const { name, start_time, end_time ,type_of_work, hourly_income, image, work_description } = route.params.item;
  const myDetail = work_description.detail
  const myQualification = work_description.qualification
  const navigation = useNavigation();

  return (
  <View style={{flex: 1, backgroundColor: 'white'}}>
    <ScrollView style={{marginBottom: 60}}>
      <View style={{flexDirection : 'row', marginBottom: 20, marginTop: 20, justifyContent:'center', alignItems: 'center'}}>
        <Image
          source={{uri : image}}
          style={styles.image}
        />
        <View style={{padding: 10}}>
          <Text style = {{fontSize : 25, flexShrink: 1}} numberOfLines={1}>{name.length > 15 ? name.substring(0, 15) + '...' : name}</Text>
          <Text>   {start_time} - {end_time}</Text>
          <Text style ={{color: 'red' }}>   {type_of_work}</Text>
          <Text>   {hourly_income} เครดิต/ชั่วโมง</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style = {{fontSize : 19}}>รายละเอียดงาน</Text>
        <View style={{marginLeft: 10, marginTop:5, flex: 1}}>
          <Text>{myDetail}</Text>
        </View>
      </View>
        <View style={styles.textContainer}>
          <Text style = {{fontSize : 19}}>คุณสมบัติผู้สมัคร</Text>
          <View style={{marginLeft: 10, marginTop:5}}>
            <Text>{myQualification}</Text>
          </View>
        </View>
      <View style={{ marginVertical:10}}>
        <Button title="ย้อนกลับ" onPress={() => {navigation.goBack()}}></Button>
        <Button title="สมัครงาน" onPress={() => {}}/>
      </View>
    </ScrollView>
  </View>
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
    flex: 1
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
