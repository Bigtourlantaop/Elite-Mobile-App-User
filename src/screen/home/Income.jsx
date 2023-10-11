import React , {useState, useContext, useEffect}from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { FlatList} from 'react-native';
import { Authcontext } from '../../context/Authcontext';
import axios from 'axios';
import { YOURAPI } from '../../constants/editendpoint';
import { formatNumberWithCommas } from '../../components/formatNumberWithCommas';

const Income = ({ navigation }) => {
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [data, setData] = useState([]);
  const {userInfo} = useContext(Authcontext)

  const dataDeatail = ([
    {date: '6 ม.ค. 66',
     time: '16.00',
     credit: '+50.00'
    },
    {date: '5 ม.ค. 66',
    time: '16.00',
    credit: '+50.00'
    },
    {date: '4 ม.ค. 66',
    time: '16.00',
    credit: '+50.00'
    },
    {date: '3 ม.ค. 66',
    time: '16.00',
    credit: '+50.00'
    },
    {date: '2 ม.ค. 66',
    time: '16.00',
    credit: '+50.00'
    },
    {date: '6 ม.ค. 66',
    time: '16.00',
    credit: '+50.00'
    },
    {date: '1 ม.ค. 66',
    time: '16.00',
    credit: '+50.00'
    },
    {date: '31 ธ.ค. 66',
    time: '16.00',
    credit: '+50.00'
    },
    {date: '30 ธ.ค. 66',
    time: '16.00',
    credit: '+50.00'
    }
]);

useEffect(() => {
  if (!hasFetchedData) {
    axios.get(`http://${YOURAPI}/users/${userInfo.user_id}`)
      .then((res) => {
        setData(res.data);
        setHasFetchedData(true);
      })
      .catch(e => {
        console.error('Error', e);
      });
  }
}, [hasFetchedData]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView style={{backgroundColor: 'white', margin: 25,}}>
        <View style={{padding:10}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.circle}>
              <Text style={styles.text}>ยอดเงินคงเหลือ</Text>
              <Text style={styles.textnum}>{(data.credit)}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate('โอนเงิน')}} style={{marginHorizontal:13}}>
          <View style = {styles.butt}>
            <Text style = {styles.textbutton}>Transfer</Text>
          </View>
        </TouchableOpacity>
        <Text style={{marginTop:10, marginLeft:10, marginBottom:10, color:'black',fontSize: 20}}>รายการล่าสุด</Text>
        <FlatList
          data={dataDeatail}
          contentContainerStyle={{ paddingBottom: 350}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{flexDirection: 'row',marginBottom:10, backgroundColor: '#D7E5CA', alignItems:'center', borderRadius: 20, justifyContent: 'center', padding: 5}}>
              <View style={{flexGrow: 2, padding: 10}}>
                <Text>{item.date}</Text>
                <Text>{item.time}</Text>
              </View>
              <View style={{marginRight: 20}}>
                <Text>{item.credit}</Text>
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
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  }
});
export default Income;