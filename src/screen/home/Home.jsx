
import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { ScrollView , FlatList} from 'react-native';
import axios from 'axios';
import { YOURAPI } from '../../constants/editendpoint';
import { TextInput } from 'react-native-gesture-handler';
import filter from 'lodash.filter';

const Home = () => {
  const navigation = useNavigation();
  const [selectedData, setSelectedData] = useState([]);
  const [dateData, setDateData] = useState([]);
  const [daydate, setDaydate] = useState("เลือกวันด้านล่าง")
  const [searchQuery, setSearchQuery] = useState("")
  const [fulldata, setFulldata] = useState([])

  useEffect(() => {
    axios.get(`http://${YOURAPI}/12datenext`)
      .then((res) => {
        setDateData(res.data.next12Days);
      })
      .catch(e => {
        console.error('Error', e);
      });
  },[]);

  function newData(chose) {
    setDaydate(chose)
    axios.get(`http://${YOURAPI}/work_date/${chose}`)
      .then((res) => {
        Promise.all(res.data.work_list.map(_id => 
          axios.get(`http://${YOURAPI}/works/${_id}`)
        ))
        .then(responses => {
          const workData = responses.map(response => response.data);
          setSelectedData(workData);
          setFulldata(workData)
        })
        .catch(error => {
          console.error('Error fetching work data:', error);
        });
      })
      .catch(e => {
        console.error('Error', e);
      });
  }

  const handleSearch = (text) => {
    setSearchQuery(text)
    const formattedQuery = text.toLowerCase()
    const filteredData = filter(fulldata, (job) => {
      return contains(job, formattedQuery)
    })
    setSelectedData(filteredData)
  }
  const contains = ({name, type_of_work}, text) => {
    if (
      name.includes(text) || type_of_work.includes(text)
    ){
      return true
    }
    return false
  }
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <FlatList
        data={selectedData}
        contentContainerStyle={{ paddingBottom: 100, justifyContent: 'flex-start'}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text>No jobs available for this day</Text>
          </View>
        )}
        ListHeaderComponent={
          <>
            <View style={{margin:10, padding:5}}>
              <Text style={{color:'#000000', fontSize:17}}>Day : {daydate}</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {dateData.map(day => (
                  <TouchableOpacity key={day} onPress={() => {newData(day[0])}}>
                    <View style={{flexDirection: 'row', marginHorizontal: 5, marginBottom: 5}}>
                      <View style={styles.cicleView}>
                        <Text style={styles.textincircle}>{day[1].slice(0, 3)}</Text>
                        <Text style={styles.textincircle}>{day[0].slice(8,10)}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
              ))}
            </ScrollView>
            <TextInput placeholder='ค้นหาชื่อร้าน หรือ ค้นหาตำแหน่งงาน' clearButtonMode='always'
            style={{paddingHorizontal: 20, paddingVertical: 15, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, marginHorizontal: 10}}
            autoCorrect={false}
            autoCapitalize='none'
            value={searchQuery}
            onChangeText={text => handleSearch(text)}
            ></TextInput>
          </>
        }
        renderItem={({ item }) => (
          <>
            <TouchableOpacity onPress={() => {navigation.navigate('รายละเอียดงาน',{ item })}}>
              <View style={{alignItems:'center',flexDirection: 'row', margin:10, backgroundColor: '#D0E7D2', borderRadius: 10, paddingHorizontal: 5}}>
                <View style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40, 
                  overflow: 'hidden'
                }}>
                  <Image 
                    source={{uri : item.image}} 
                    style={{flex: 1, height: null, width: null}}
                  />
                </View>
                <View style={{margin: 10,width: 275, paddingHorizontal: 5}}>
                  <Text style={{fontSize: 20, fontWeight: '500'}}>{item.name}</Text>
                  <Text style={{fontSize: 17}}>เวลาทำงาน : {item.start_time} - {item.end_time}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center',flexDirection: 'row', borderWidth: 1, width: 87, height: 63, borderRadius: 20, marginTop: 5, padding: 5, backgroundColor: '#79AC78', borderColor: '#B0D9B1'}}>
                      <Text style={{fontSize: 20, fontWeight: '600', color: '#ffffff'}}>{item.hourly_income}</Text>
                      <View style={{marginLeft: 2}}>
                        <Text>เครดิต{'\n'}/ชั่วโมง</Text>
                      </View>
                    </View>
                    <View style={{borderRadius: 20, height: 40, width: 120, borderWidth: 1, padding: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#79AC78', borderColor: '#B0D9B1', marginLeft: 5}}>
                      <Text style={{color: 'white'}}>
                      {(() => {
                          switch(item.type_of_work) {
                            case 'type1':
                              return 'พนักงานเสิร์ฟ';
                            case 'type2':
                              return 'พนักงานทำความสะอาด';
                            case 'type3':
                              return 'ผู้ช่วยเชฟ';
                            case 'type4':
                              return 'พนักงานต้อนรับ';
                            case 'type5':
                              return 'พนักงานล้างจาน';
                            case 'type6':
                              return 'พนักงานส่งอาหาร';
                            case 'type7':
                              return 'พนักงานครัวร้อน';
                            default:
                              return item.type_of_work;
                          }
                        })()}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </>
        )}
      />
    </SafeAreaView>
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

export default Home;