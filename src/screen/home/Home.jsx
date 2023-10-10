
import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { ScrollView , FlatList} from 'react-native';
import axios from 'axios';
import { YOURAPI } from '../../constants/editendpoint';

const Home = () => {
  const navigation = useNavigation();
  const [selectedData, setSelectedData] = useState([]);
  const [dateData, setDateData] = useState([]);

  useEffect(() => {
    axios.get(`http://${YOURAPI}/12datenext`)
      .then((res) => {
        setDateData(res.data.next12Days);
      })
      .catch(e => {
        console.error('Error', e);
      });
  }, []);

  function newData(chose) {
    axios.get(`http://${YOURAPI}/work_date/${chose}`)
      .then((res) => {
        Promise.all(res.data.work_list.map(_id => 
          axios.get(`http://${YOURAPI}/works/${_id}`)
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
                  resizeMode='contain'
                />
              </View>
              <View style={{margin: 10,width: 275, paddingHorizontal: 5}}>
                <Text style={{fontSize: 20, fontWeight: '500'}}>{item.name}</Text>
                <Text style={{fontSize: 17}}>เวลาทำงาน : {item.start_time} - {item.end_time}</Text>
                <View style={{alignItems: 'center',flexDirection: 'row', borderWidth: 1, width: 89, height: 63, borderRadius: 20, marginTop: 5, padding: 5, backgroundColor: '#79AC78', borderColor: '#B0D9B1'}}>
                  <Text style={{position: 'relative', fontSize: 20, fontWeight: '600', color: '#ffffff'}}>{item.hourly_income}</Text>
                  <View style={{position: 'relative', marginLeft: 2}}>
                    <Text>เครดิต{'\n'}/ชั่วโมง</Text>
                  </View>
                  <View style={{borderRadius: 20, height: 40, width: 120, borderWidth: 1, marginLeft: 15, padding: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#79AC78', borderColor: '#B0D9B1'}}>
                    <Text style={{color: 'white'}}>{item.type_of_work}</Text>
                  </View>
                </View>
              </View>
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