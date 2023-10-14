import React , {useState, useContext, useEffect}from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { FlatList} from 'react-native';
import { Authcontext } from '../../context/Authcontext';
import axios from 'axios';
import { YOURAPI } from '../../constants/editendpoint';
import { useFocusEffect } from '@react-navigation/native';

const Income = ({ navigation }) => {
  const [money, setmoney] = useState([]);
  const {userInfo} = useContext(Authcontext)
  const [dataDeatail, setDataDeatail] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://${YOURAPI}/users/${userInfo.user_id}`);
          setmoney(response.data.credit);
          const Listex = await axios.get(`http://${YOURAPI}/users/${userInfo.user_id}/money_exchange`)
          const dataListex = Listex.data
          const promises = dataListex.map(id => axios.get(`http://${YOURAPI}/money_exchange/${id}`));
          const responses = await Promise.all(promises);
          const mylistex = responses.map(res => res.data);
          setDataDeatail(mylistex);
        } catch (error) {
          console.error('Error', error);
        }
      };
      fetchData();
    }, [userInfo.user_id])
  );
  

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView style={{backgroundColor: 'white', margin: 15,}}>
        <View style={{padrding:10}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.circle}>
              <Text style={styles.text}>ยอดเงินคงเหลือ</Text>
              <Text style={styles.textnum}>{(money?.toLocaleString() || "")}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate('โอนเงิน', money)}} style={{marginHorizontal:13}}>
          <View style = {styles.butt}>
            <Text style = {styles.textbutton}>Transfer</Text>
          </View>
        </TouchableOpacity>
        <Text style={{marginTop:10, marginLeft:10, marginBottom:10, color:'black',fontSize: 20}}>รายการล่าสุด</Text>
        <FlatList
          data={dataDeatail}
          contentContainerStyle={{ paddingBottom: 350}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={{flexDirection: 'row',marginBottom:10, backgroundColor: '#D7E5CA', alignItems:'center', borderRadius: 20, justifyContent: 'center', padding: 5}}>
              <View style={{flexGrow: 2, padding: 10}}>
                <Text>{item.date.slice(0, 10)}</Text>
                <Text>{item.date.slice(11, 19)}</Text>
              </View>
              <View style={{marginRight: 20}}>
                <Text>{item.credit?.toLocaleString() || ""}</Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 200, // กำหนดความกว้างของวงกลม
    height: 200, // กำหนดความสูงของวงกลม
    borderRadius: 100, // ค่าความโค้งของขอบวงกลมเท่ากับครึ่งหนึ่งของความกว้างหรือความสูง
    backgroundColor: '#fafafa', // สีพื้นหลังของวงกลม
    borderWidth: 4,
    borderColor: '#618264',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black', // สีข้อความ
    fontSize: 12, // ขนาดตัวอักษร
    textAlign: 'center', // จัดตำแหน่งข้อความกลาง
  },
  textnum: {
    color: 'black', // สีข้อความ
    fontSize: 35, // ขนาดตัวอักษร
    textAlign: 'center', // จัดตำแหน่งข้อความกลาง
  },
  butt: {
    width: 90, // กำหนดความกว้างของวงกลม
    height: 45, // กำหนดความสูงของวงกลม
    backgroundColor: '#79AC78',
    alignSelf: 'flex-start',
    margin:10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbutton: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
});
export default Income;