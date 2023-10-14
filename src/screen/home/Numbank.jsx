import React, {useContext, useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Authcontext } from '../../context/Authcontext';
import axios from 'axios';
import { YOURAPI } from '../../constants/editendpoint';

const Numbank = ({navigation, route}) => {
  const check_num = route.params
  const [credit,setcredit] = useState(0);
  const {userInfo} = useContext(Authcontext)
  const [modalVisible, setModalVisible] = useState(false);

  const handlecreditChange = (value) => {
    value=parseInt(value);
    setcredit(value);
  };

  const acceptCredit = () =>{
    const inputValue = parseInt(credit)
    if (inputValue > check_num){
        setModalVisible(true);
    } else {
        axios.patch(`http://${YOURAPI}/users/${userInfo.user_id}/withdraw/${credit}`, credit)
        .then(response => {
            console.log('credit sent successfully:', response.data);
            navigation.navigate('รายได้list');

        })
        .catch(error => {
            console.error('Error sending data:', error);
        });
        };
    }

  return (
    <SafeAreaView style={style.body}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>ยอดเงินไม่เพียงพอ</Text>
            <Text style={{color: 'red', marginBottom: 10}}>ยอดคงเหลือ {check_num}</Text>
            <TouchableOpacity
              style={[style.button, style.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible)}}>
              <Text style={style.textStyle}>ปิด</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <View style={style.view2}>
            <Text style={style.text}>เลขที่บัญชี</Text>
            <View style={style.input1}>
                <Text style={{fontSize: 20}}>xxx-x-x5419-x</Text>
            </View>
        </View>
        
        <View style={style.view2}>
            <Text style={style.text}>จำนวนเงิน</Text>
            <TextInput style={style.input2} 
            placeholder='ใส่จำนวนเงิน'
            keyboardType='number-pad'
            onChangeText={handlecreditChange}
            ></TextInput>
        </View>
        
        <View style={style.view2}>
            <View style={style.GreenBut}>
                <TouchableOpacity style={style.GreenBut} onPress={acceptCredit}>
                    <Text style={style.text_button}>ยืนยัน</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={style.view2}>
            <View style={style.GreenBut}>
                <TouchableOpacity style={style.button_red} onPress={() => {navigation.goBack()}}>
                    <Text style={style.text_button}>ย้อนกลับ</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    </SafeAreaView>
  )

}

const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
    },
    view_h: {
        flexDirection: 'row',
        alignContent: 'center',
        height: 50,
    },
    view1: {
        paddingTop: 15,
        paddingLeft: 15,
        
    },
    view2: {
        padding: 15
    },
    view3: {
        padding: 15,
        paddingBottom: 60
    },
    text: {
        color: '#000000',
        fontSize: 24,
        marginBottom: 15,
    },
    text1: {
        color: '#000000',
        fontSize: 24,
    },
    input1: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 23,
        textAlign: 'left',
        fontSize: 20,
        padding: 15,
        justifyContent: 'center'
    },
    input2: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#555',
        textAlign: 'right',
        fontSize: 20,
        padding: 15,
    },
    input3: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        textAlign: 'left',
        fontSize: 20,
        padding: 15,
    },
    text_button: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30
    },
    GreenBut: {
        width: '100%',
        height: 60,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#00ff7f',
        borderRadius: 12,
    },
    button_red: {
        width: '100%',
        height: 60,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: 12,
    },
    image: {
        width: 50,
        height: 50,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        width: 200,
        height: 150,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
}
)


export default Numbank