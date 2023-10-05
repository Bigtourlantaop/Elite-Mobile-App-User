import { View, Text, TouchableOpacity, Image, SafeAreaView, ImageBackground, TextInput, ScrollView, StyleSheet, Alert, TouchableOpacityBase} from 'react-native'
import {React, useState, useContext} from 'react'
import DropDownsex from '../../components/DropdownSex'
import DatePicker from 'react-native-date-picker'
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import { Authcontext } from '../../context/Authcontext';
import { useNavigation } from '@react-navigation/native';
import { YOURAPI } from '../../constants/editendpoint';


const Edit = ({route}) => {
  const navigation = useNavigation()
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [doblabel, setDoblabel] = useState('Date of Birth')
  const [selectImage, setselectImage] = useState(null)
  const {userInfo} = useContext(Authcontext)
  const initialFormData= route.params
  const [Data, setData] = useState(initialFormData)

  const handleInputChange = (name, value) => {
    if (name === 'age'){
      value = parseInt(value);
    }
    console.log(Data)
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

  const handleFormSubmit = () => {
    const formData = new FormData();

    if (selectImage !== null){
      formData.append('file', {
      uri : selectImage,
      type: "image",
      name: selectImage.split("/").pop()
     })
    }

    formData.append('data', JSON.stringify(Data)); 
    axios.patch(`http://${YOURAPI}/users/${userInfo.user_id}`, formData)
      .then(response => {
        console.log('Data sent successfully:', response.data);
        navigation.navigate('Profileinside');
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };
  
  const choseImage = () => {
    let options ={
      storageOptions:{
        path: "image"
      }
    }
    launchImageLibrary(options, response => {
      if (response && response.assets){
        setselectImage(response.assets[0].uri);
      }
    })
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView style={{flex:1, marginHorizontal: 20}}>
        <ScrollView showsVerticalScrollIndicator = {false}>
          <View style={{flexDirection: 'row'}}>
              <View style={{marginTop:20, flexGrow: 2}}>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                  <Text>ย้อนกลับ</Text>
                </TouchableOpacity>
              </View>
            <TouchableOpacity onPress={() => {navigation.navigate('resume')}}>
              <View style={{marginLeft: 10, marginTop:20}}>
                <Text style={{color: '#000000'}}>เพิ่มเรซูเม</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center', marginTop: 20}}>
            <TouchableOpacity onPress={() => {choseImage()}}>
              <ImageBackground 
                source={selectImage ? {uri:selectImage} : require('../../assets/image/ProfileIcon.png')}
                style={{
                  height: 135,
                  width: 135,
                  opacity: 0.4,
                  borderRadius: 87.5, 
                  overflow: 'hidden' 
                }}
                resizeMode='cover'
              >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('../../assets/image/camera.png')} style={{height: 50, width: 100}} resizeMode='contain'></Image>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center',marginVertical: 15, flexDirection: 'row'}}>
            <Text style={{fontSize: 17, marginRight: 10}}>First Name</Text>
            <Image source={require('../../assets/image/FooterIcon/People.png')} style={{height:30, width:40, marginRight: 5}}></Image>
            <TextInput 
            placeholder='First Name' 
            autoCorrect= {false}
            style={{fontSize:15, borderBottomWidth: 1, height: 30, width: 250}}
            value={Data.first_name} 
            onChangeText={text => handleInputChange('first_name', text)}></TextInput>
          </View>
          <View style={{alignItems: 'center',marginVertical: 15, flexDirection: 'row'}}>
            <Text style={{fontSize: 17, marginRight: 10}}>Last Name</Text>
            <Image source={require('../../assets/image/FooterIcon/People.png')} style={{height:30, width:40, marginRight: 5}}></Image>
            <TextInput 
            placeholder='Last Name' 
            autoCorrect= {false} 
            style={{fontSize:15, borderBottomWidth: 1, height: 30, width: 250}}
            value={Data.last_name}
            onChangeText={text => handleInputChange('last_name', text)}></TextInput>
          </View>
          <View style={{alignItems: 'center',marginVertical: 15, flexDirection: 'row'}}>
            <Text style={{fontSize: 17, marginRight: 10}}>Nick Name</Text>
            <Image source={require('../../assets/image/FooterIcon/People.png')} style={{height:30, width:40, marginRight: 5}}></Image>
            <TextInput 
            placeholder='Nickname' 
            autoCorrect= {false} 
            style={{fontSize:15, borderBottomWidth: 1, height: 30, width: 250}}
            value={Data.nick_name}
            onChangeText={text => handleInputChange('nick_name', text)}></TextInput>
          </View>
          <View style={{alignItems: 'center',marginVertical: 15, flexDirection: 'row'}}>
            <Text style={{fontSize: 17, marginRight: 10}}>Telephone</Text>
            <Image source={require('../../assets/image/PhoneIcon.png')} style={{height:30, width:40, marginRight: 5}}></Image>
            <TextInput 
            placeholder='Phone' 
            autoCorrect= {false} 
            style={{fontSize:15, borderBottomWidth: 1, height: 30, width: 250}} 
            keyboardType='number-pad'
            value={Data.tel}
            onChangeText={text => handleInputChange('tel', text)}></TextInput>
          </View>
          <View style={{height: 45,borderBottomWidth: 1,marginVertical: 15,alignItems: 'center',flexDirection: 'row'}}>
            <Image source={require('../../assets/image/Calender.png')} style={{height:35, width:35, marginRight: 5}}></Image>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Text style={{fontSize: 15}}>{doblabel}</Text>
            </TouchableOpacity>
          </View>
          <DatePicker
            modal
            open={open}
            date={date}
            mode='date'
            maximumDate={new Date('2023-12-31')}
            minimumDate={new Date('1873-12-31')}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
              setDoblabel(date.toDateString());
              handleDateChange(date.toISOString());
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
          <View style={{flexDirection:'row', alignItems: 'center'}}>
            <View style={{width: '40%'}}>
              <Text style={{fontSize: 17}}>Sex</Text>
              <DropDownsex 
              onValueChange={handleGenderChange}
              value={Data.gender}>
              </DropDownsex>
            </View>
            <View style={{width: '60%'}}>
              <Text style={{fontSize: 17}}>Age(Chose Date of Birth)</Text>
              <View style={styles.dropdown}>
                <Text>{Data.age}</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center',marginVertical: 15, flexDirection: 'row'}}>
            <Text style={{fontSize: 17, marginRight: 10}}>Email</Text>
            <Image source={require('../../assets/image/Email.png')} style={{height:30, width:40, marginRight: 5}}></Image>
            <TextInput 
            placeholder='Email' 
            autoCorrect= {false} 
            style={{fontSize:15, borderBottomWidth: 1, height: 30, width: 300}} 
            keyboardType='email-address'
            value={Data.email}
            onChangeText={text => handleInputChange('email', text)}></TextInput>
          </View>
          <View style={{alignItems: 'center',marginVertical: 15, flexDirection: 'row'}}>
            <Text style={{fontSize: 17, marginRight: 10}}>Line Id</Text>
            <Image source={require('../../assets/image/line.png')} style={{height:30, width:30, marginRight: 5}}></Image>
            <TextInput 
            placeholder='Line ID' 
            autoCorrect= {false} 
            style={{fontSize:15, borderBottomWidth: 1, height: 30, width: 300}}
            value={Data.line_id}
            onChangeText={text => handleInputChange('line_id', text)}></TextInput>
          </View>
          <View style={{marginVertical: 15}}>
            <Text style={{fontSize: 15}}>ที่อยู่ปัจจุบัน</Text>
            <View style={{borderWidth: 10, alignItems: 'center', margin: 15, borderColor: '#EEEEEE'}}>
              <Image source={require('../../assets/image/Maps.png')} style={{width: '100%', height:250, margin: 15}}></Image>
              <View style={{flexDirection: 'row'}}>
                <Text style={{flexGrow:1}}>แก้ไข</Text>
                <Text>ImgGo</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={handleFormSubmit} style={styles.Savebut}>
            <Text style={{color: '#ffffff'}}>บันทึก</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Edit

const styles = StyleSheet.create({
  dropdown: {
    margin: 10,
    height: 40,
    width: 75,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    },
    Savebut:{
      backgroundColor: '#000000',
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:15,
      alignItems: 'center',
      justifyContent: 'center'
  },
  }
)
