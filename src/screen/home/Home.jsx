
import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { ScrollView , FlatList} from 'react-native';
import axios from 'axios';

const Home = () => {
  const navigation = useNavigation();
  const [selectedData, setSelectedData] = useState([]);
  const [dateData, setDateData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/12datenext')
      .then((res) => {
        setDateData(res.data.next12Days);
      })
      .catch(e => {
        console.error('Error', e);
      });
  }, []);

  function newData(chose) {
    axios.get(`http://localhost:8000/work_date/${chose}`)
      .then((res) => {
        Promise.all(res.data.work_list.map(_id => 
          axios.get(`http://localhost:8000/works/${_id}`)
        ))
        .then(responses => {
          const workData = responses.map(response => response.data);
          setSelectedData(workData);
        })
        .catch(error => {
          console.error('Error fetching work data:', error);
        });
      })
      .catch(e => {
        console.error('Error', e);
      });
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
              <Text style={{color:'#000000', fontSize:17}}>Day</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {dateData.map(day => (
                  <TouchableOpacity key={day} onPress={() => {newData(day[0])}}>
                    <View style={{flexDirection: 'row', marginHorizontal: 5,}}>
                      <View style={styles.cicleView}>
                        <Text style={styles.textincircle}>{day[1].slice(0, 3)}</Text>
                        <Text style={styles.textincircle}>{day[0].slice(8,10)}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
              ))}
              </ScrollView>
          </>
        }
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {navigation.navigate('รายละเอียดงาน',{ item })}}>
            <View style={{alignItems:'center',flexDirection: 'row', margin:10, borderBottomWidth:1}}>
              <View style={{
                height: 60,
                width: 60,
                borderRadius: 30, 
                overflow: 'hidden'
              }}>
                <Image 
                  source={{uri : item.image}} 
                  style={{flex: 1, height: null, width: null}}
                  resizeMode='contain'
                />
              </View>
              <Text style={{margin:10, flexGrow:2}}>ชื่อ : {item.name}{'\n'}เวลา : {item.start_time} - {item.end_time}{'\n'}ตำแหน่ง : {item.type_of_work}</Text>
              <Text>{item.hourly_income} เครดิต/ชั่วโมง</Text>
            </View>
          </TouchableOpacity>
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