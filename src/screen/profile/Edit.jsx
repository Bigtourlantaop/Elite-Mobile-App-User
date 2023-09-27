import { View, Text, TouchableOpacity, Image, SafeAreaView, ImageBackground, TextInput, ScrollView, StyleSheet, Alert} from 'react-native'
import {React, useState} from 'react'
import DropDownsex from '../../components/DropdownSex'
import DatePicker from 'react-native-date-picker'
import {launchImageLibrary} from 'react-native-image-picker';


const Edit = ({navigation}) => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [doblabel, setDoblabel] = useState('Date of Birth')
  const [selectImage, setselectImage] = useState(null)

  const choseImage = () => {
    let options ={
      storageOptions:{
        path: "image"
      }
    }
    launchImageLibrary(options, response => {
      setselectImage(response.assets[0].uri)
    })
  }

  return (
    <SafeAreaView style={{flex:1, marginHorizontal:20}}>
      <ScrollView showsVerticalScrollIndicator = {false}>
        <TouchableOpacity onPress={() => {navigation.navigate('resume')}}>
          <View style={{flexDirection:'row-reverse', marginLeft: 10, marginTop:20}}>
            <Text style={{color: '#000000'}}>เพิ่มเรซูเม</Text>
          </View>
        </TouchableOpacity>
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
          <Text style={{fontSize: 30, color: '#000', fontWeight: '500'}}>Van der sar</Text>
        </View>
        <View style={{alignItems: 'center',marginVertical: 15, borderBottomWidth: 1, flexDirection: 'row'}}>
          <Image source={require('../../assets/image/FooterIcon/People.png')} style={{height:30, width:40, marginRight: 5}}></Image>
          <TextInput placeholder='First Name' autoCorrect= {false} style={{fontSize:15}}></TextInput>
        </View>
        <View style={{alignItems: 'center',marginVertical: 15, borderBottomWidth: 1, flexDirection: 'row'}}>
          <Image source={require('../../assets/image/FooterIcon/People.png')} style={{height:30, width:40, marginRight: 5}}></Image>
          <TextInput placeholder='Last Name' autoCorrect= {false} style={{fontSize:15}}></TextInput>
        </View>
        <View style={{alignItems: 'center',marginVertical: 15, borderBottomWidth: 1, flexDirection: 'row'}}>
          <Image source={require('../../assets/image/FooterIcon/People.png')} style={{height:30, width:40, marginRight: 5}}></Image>
          <TextInput placeholder='Nickname' autoCorrect= {false} style={{fontSize:15}}></TextInput>
        </View>
        <View style={{alignItems: 'center',marginVertical: 15, borderBottomWidth: 1, flexDirection: 'row'}}>
          <Image source={require('../../assets/image/PhoneIcon.png')} style={{height:30, width:40, marginRight: 5}}></Image>
          <TextInput placeholder='Phone' autoCorrect= {false} style={{fontSize:15}} keyboardType='number-pad'></TextInput>
        </View>
        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <View style={{width: '50%'}}>
            <Text>Sex</Text>
            <DropDownsex></DropDownsex>
          </View>
          <View style={{width: '50%'}}>
            <Text>Age</Text>
            <TextInput placeholder='อายุ' style={styles.dropdown} keyboardType='number-pad'></TextInput>
          </View>
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
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
        <View style={{alignItems: 'center',marginVertical: 15, borderBottomWidth: 1, flexDirection: 'row'}}>
          <Image source={require('../../assets/image/Email.png')} style={{height:30, width:40, marginRight: 5}}></Image>
          <TextInput placeholder='Email' autoCorrect= {false} style={{fontSize:15}} keyboardType='email-address'></TextInput>
        </View>
        <View style={{alignItems: 'center',marginVertical: 15, borderBottomWidth: 1, flexDirection: 'row'}}>
          <Image source={require('../../assets/image/line.png')} style={{height:30, width:30, marginRight: 5}}></Image>
          <TextInput placeholder='Line ID' autoCorrect= {false} style={{fontSize:15}}></TextInput>
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
        <TouchableOpacity onPress={() => {navigation.goBack()}} style={styles.Savebut}>
          <Text style={{color: '#ffffff'}}>บันทึก</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
