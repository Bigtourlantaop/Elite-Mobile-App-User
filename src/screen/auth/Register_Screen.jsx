import React, { useState } from "react";
import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-date-picker";
import DropDownsex from "../../components/DropdownSex";
import axios from "axios";
import { YOURAPI } from "../../constants/editendpoint";

const Register_Screen = ({navigation}) => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [doblabel, setDoblabel] = useState('Date of Birth')
  const handleInputChange = (name, value) => {
    if (name === 'age'){
      value = parseInt(value);
    }
    setData({
      ...Data,
      [name]: value
    });
  };
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  const handleGenderChange = (value) => {
    setData({
      ...Data,
      gender: value
    });
  };

  const handleDateChange = (date) => {
    setData({
      ...Data,
      birth_date: date.slice(0,10),
      age: calculateAge(date.slice(0,10))
    });
  };
  const [Data, setData] = useState({
      username: "ชื่อผู้ใช้",
      password: "รหัสผ่าน",
      first_name: "ชื่อจริง",
      last_name: "นามสกุล",
      nick_name: "ชื่อเล่น",
      gender: "เพศ",
      age: 0,
      birth_date: "วันเกิด",
      tel: "เบอร์โทร",
      email: "email",
      line_id: "line_ID",
      point: 0,
      address: "ที่อยู่",
      credit: 0,
      resume: "ปยอ",
      list_of_money_exchange: [],
      list_of_work: [],
      field_of_interested: {},
      notification: [],
      feedback: {}
  })

    const isDataValid = (data) => {
      return data.username !== 'ชื่อผู้ใช้' &&  data.password !== 'รหัสผ่าน'
      && data.first_name !== 'ชื่อจริง' && data.last_name !== 'นามสกุล' && data.nick_name !== "ชื่อเล่น"
      && data.gender !== "เพศ" && data.age !== 0 && data.birth_date !== "วันเกิด" && data.tel !=="เบอร์โทร" && data.email !== "email" && data.line_id !== "line_ID" && data.address !== "ที่อยู่"}
      
    const handleFormSubmit = () => {
      if (isDataValid (Data)){
        axios.post(`http://${YOURAPI}/users`, Data)
      .then(response => {
        console.log('Data sent successfully:', response.data);
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
      } else {
        alert('กรุณากรอกข้อมูลให้ครบ');
      }
    }

    return (
      <KeyboardAvoidingView style={{flex: 1}}enabled={true} behavior={'padding'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView style={{flex:1, justifyContent:'center'}}>
              <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:25}}>
                <View style={{alignItems:'center', margin: 40}}>
                  <Image source={require('../../assets/image/Worklife.png')} style={{}}></Image>
                </View>
                <Text style={{fontSize:50, color:'black', marginBottom:40}}>Register</Text>
                <Text style={{fontSize: 15}}>UserName</Text>
                <TextInput 
                placeholder="Username" 
                style={styles.input}
                keyboardType="default"
                autoCorrect= {false} 
                secureTextEntry = {false} 
                onChangeText={text => handleInputChange('username', text)}/>
                <Text style={{fontSize: 15}}>Password</Text>
                <TextInput 
                placeholder="Password" 
                style={styles.input} 
                autoCorrect= {false} 
                keyboardType="default"
                onChangeText={text => handleInputChange('password', text)}/>
                <Text style={{fontSize: 15}}>Firstname</Text>
                <TextInput 
                placeholder="First name" 
                style={styles.input} 
                autoCorrect= {false} 
                keyboardType="default" 
                onChangeText={text => handleInputChange('first_name', text)}/>
                <Text style={{fontSize: 15}}>Lastname</Text>
                <TextInput 
                placeholder="Last name" 
                style={styles.input} 
                autoCorrect= {false} 
                keyboardType="default" 
                onChangeText={text => handleInputChange('last_name', text)}/>
                <Text style={{fontSize: 15}}>Email</Text>
                <TextInput 
                placeholder="Email" 
                style={styles.input} 
                autoCorrect= {false} 
                keyboardType="email-address" 
                onChangeText={text => handleInputChange('email', text)}/>
                <Text style={{fontSize: 15}}>Nickname</Text>
                <TextInput 
                placeholder="Nickname" 
                style={styles.input} 
                autoCorrect= {false} 
                keyboardType="default" 
                onChangeText={text => handleInputChange('nick_name', text)}/>
                <Text style={{fontSize: 15}}>วันเกิด</Text>
                <View style={styles.input1}>
                  <Image source={require('../../assets/image/Calender.png')} style={{height:30, width:30, marginRight: 5}}></Image>
                  <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text style={{fontSize: 15}}>{doblabel}</Text>
                  </TouchableOpacity>
                </View>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode='date'
                  maximumDate={new Date()}
                  minimumDate={new Date('1873-12-31')}
                  onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                    const mydate = date.toDateString();
                    setDoblabel(mydate);
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    const test = `${year}-${month}-${day}`
                    handleDateChange(test);
                  }}
                  onCancel={() => {
                    setOpen(false)
                  }}
                />
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                  <Text style={{fontSize: 15}}>Sex</Text>
                  <DropDownsex
                  onValueChange={handleGenderChange}
                  value={Data.gender}>
                  </DropDownsex>
                </View>
                <Text style={{fontSize: 15}}>LineId</Text>
                <TextInput 
                placeholder="LineID" 
                style={styles.input} 
                autoCorrect= {false} 
                keyboardType="default" 
                onChangeText={text => handleInputChange('line_id', text)}/>
                <Text style={{fontSize: 15}}>เบอร์โทร</Text>
                <TextInput 
                placeholder="เบอร์โทร" 
                style={styles.input} 
                autoCorrect= {false} 
                keyboardType="number-pad"
                onChangeText={text => handleInputChange('tel', text)}/>
                <Text style={{fontSize: 15}}>ที่อยู่ปัจจุบัน</Text>
                <TextInput 
                placeholder="ที่อยู่" 
                style={styles.input} 
                autoCorrect= {false} 
                keyboardType="default"
                onChangeText={text => handleInputChange('address', text)}/>
                <TouchableOpacity onPress={() => {handleFormSubmit()}} style={styles.RegisBut}>
                  <Text style={{color: 'white', fontSize:23}}>Register</Text>
                </TouchableOpacity>
                <View style = {{flexDirection: 'row', justifyContent:'center', marginTop: 20}}>
                  <Text>Already registered? </Text>
                  <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                      <Text style={{color:'blue', marginBottom: 25}}>Login</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:15,
    },
    input1: {
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:15,
      flexDirection: 'row',
      alignItems: 'center'
  },
    RegisBut:{
        backgroundColor: '#071952',
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:15,
        alignItems: 'center'
    }

});

export default Register_Screen;