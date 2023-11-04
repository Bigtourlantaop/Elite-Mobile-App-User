import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import { Authcontext } from '../../context/Authcontext';
import { YOURAPI } from '../../constants/editendpoint';

const Filter = ({navigation}) => {
  const [state, setState] = useState([]);
  const {userInfo} = useContext(Authcontext)
  useEffect(() => {
    axios.get(`http://${YOURAPI}/users/${userInfo.user_id}`)
    .then(res => {
      const mydata = res.data.field_of_interested
      setState(mydata)
    })
  }, [])

  const handlePress = () => {
    axios.patch(`http://${YOURAPI}/users/${userInfo.user_id}/update_field_of_interested`, state)
    .then(res => {
      navigation.goBack()
    })
  }

  console.log(state);
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20, alignItems: 'center'}}>
      <Text style={{fontSize: 18, fontWeight: '500'}}>เลือกตำแหน่งงานที่สนใจ(แจ้งเตือนเมื่อมีงาน)</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, alignSelf: 'baseline'}}>
        <Text style={{marginRight: 10}}>พนักงานเสิร์ฟ</Text>
        <CheckBox
          value={state.type1}
          onValueChange={value =>
            setState({
              ...state,
              type1: value,
            })
          }
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, alignSelf: 'baseline'}}>
        <Text style={{marginRight: 10}}>พนักงานทำความสะอาด</Text>
        <CheckBox
          value={state.type2}
          onValueChange={value =>
            setState({
              ...state,
              type2: value,
            })
          }
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, alignSelf: 'baseline'}}>
        <Text style={{marginRight: 10}}>ผู้ช่วยเชฟ</Text>
        <CheckBox
          value={state.type3}
          onValueChange={value =>
            setState({
              ...state,
              type3: value,
            })
          }
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, alignSelf: 'baseline'}}>
        <Text style={{marginRight: 10}}>พนักงานต้อนรับ</Text>
        <CheckBox
          value={state.type4}
          onValueChange={value =>
            setState({
              ...state,
              type4: value,
            })
          }
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, alignSelf: 'baseline'}}>
        <Text style={{marginRight: 10}}>พนักงานล้างจาน</Text>
        <CheckBox
          value={state.type5}
          onValueChange={value =>
            setState({
              ...state,
              type5: value,
            })
          }
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, alignSelf: 'baseline'}}>
        <Text style={{marginRight: 10}}>พนักงานส่งอาหาร</Text>
        <CheckBox
          value={state.type6}
          onValueChange={value =>
            setState({
              ...state,
              type6: value,
            })
          }
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, alignSelf: 'baseline'}}>
        <Text style={{marginRight: 10}}>พนักงานครัวร้อน</Text>
        <CheckBox
          value={state.type7}
          onValueChange={value =>
            setState({
              ...state,
              type7: value,
            })
          }
        />
      </View>
      <TouchableOpacity onPress={() => {handlePress()}}>
        <View style={{
          margin: 5,
          width: 84,
          height: 44,
          borderRadius: 20 ,
          backgroundColor: '#FFA722',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50
        }}>
          <Text>ยืนยัน</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Filter