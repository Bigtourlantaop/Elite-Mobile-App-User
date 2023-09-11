import React from 'react';
import{
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
}from "react-native";

const handlePress = () => {
  if (onPress){
    navigation.navigate('เลขบช');
  }
  }

const Transfer =({navigation})=>{
   
    function renderbank(){

        return(
            <View>
                <View style={{alignItems:'center',justifyContent:'center',width:210,height:210,borderRadius:110,backgroundColor:'#73768D',marginTop:30}}>
                  <View style={{alignItems:'center',justifyContent:'center',width:200,height:200,borderRadius:100,backgroundColor:'#E1F1FF',}}>
                    <Text style={{fontSize:16,color:'#000'}}>ยอดเงินคงเหลือ</Text>
                    <Text style={{fontSize:50,color:'#000'}}>1,000</Text>
                  </View>
                </View>
                <View  
                 style={{padding:15,
                 flexDirection:'row',
                 width:50,
                 height:50,
                 marginLeft:79,
                 justifyContent:'center'}}
                 >
                <View>
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช')}}
                    style={{
                        padding:15,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                >  
                    <Image
                    source={require("../../assets/image/image_Scb.png")} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช')}}
                    style={{
                        padding:15,
                        marginLeft:45,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                >  
                    <Image
                    source={require("../../assets/image/image_Kbank.png")} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช')}}
                    style={{
                        padding:15,
                        marginLeft:45,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                >  
                    <Image
                    source={require("../../assets/image/image_KTB.png")} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช')}}
                    style={{
                        padding:15,
                        marginLeft:45,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                >  
                    <Image
                    source={require("../../assets/image/image_ibank.png")} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                </View>
                <View  
                 style={{
                 padding:15,
                 marginTop:50,
                 flexDirection:'row',
                 width:50,
                 height:50,
                 marginLeft:79,
                 justifyContent:'center'}}
                 >
                <View>
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช')}}
                    style={{
                        padding:15,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                >  
                    <Image
                    source={require("../../assets/image/image_Aomsin.png")} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช')}}
                    style={{
                        padding:15,
                        marginLeft:45,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                >  
                    <Image
                    source={require("../../assets/image/image_Krungsri.png")} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช')}}
                    style={{
                        padding:15,
                        marginLeft:45,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                >  
                    <Image
                    source={require("../../assets/image/image_TTb.png")} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช')}}
                    style={{
                        padding:15,
                        marginLeft:45,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                >  
                    <Image
                    source={require("../../assets/image/image_TGS.png")} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                </View>
                <View  
                 style={{padding:15,
                 flexDirection:'row',
                 width:50,
                 height:50,
                 marginLeft: -63,
                 justifyContent:'center'}}
                 >
                <View>
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช')}}
                    style={{
                        padding:15,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        marginTop:50,
                        justifyContent:'center'
                    }}
                >  
                    <Image
                    source={require("../../assets/image/image_UOB.png")} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={{bottom: -160,justifyContent: 'center', alignItems:'center', borderWidth:1, width: 200, height: 50, borderRadius: 50, backgroundColor: 'blue'}}>
                    <Text style={{color: 'white'}}>ย้อนกลับ</Text>
                  </View>
                </TouchableOpacity>
            </View>
        )
    }
    return(
        <SafeAreaView style={{flex: 1, alignItems:'center'}}>
            {renderbank()}
        </SafeAreaView>
    )
}

export default Transfer;




// Texas
// import { View, Text, StyleSheet, Image,Button,Alert } from 'react-native'
// import React from 'react'

// const handleButtonPress = () => {
//     Alert.alert('Button ถูกคลิก', 'แล้วคลิกหาพ่อง!');
//   };
// const Splash = () => {
//   return (
//     <View style={{ height: "100%"}}>
//       <View style={{flex: 0.06, backgroundColor:"white"}}>
//         <View style={styles.container}>
//           <View style={styles.centeredView}>
//             <Text style={{color:"black",fontSize: 22,}}>  Transfer to Bank Account</Text>
//           </View>
//         </View>
//       </View>
//       <View style={{flex: 0.01,backgroundColor:"lightgrey"}}>
//         <Text style={{ color: "black" }}> </Text>
//       </View>
//       <View style={{ flex: 0.11, backgroundColor:"white"}}>
//         <View style={{ flex: 1, alignItems: 'flex-start' }}>
//           <View style={{ marginLeft: 10 }}>
//             <Text style={{ color: "black",fontSize: 20}}>Enter Transfer Amount(THB)</Text>
//             <Text style={{ color: "black",fontSize: 20}}>Transferable Balance: xxxxx THB</Text>
//           </View>
//         </View>
//       </View>
//       <View style={{ flex: 0.17, backgroundColor:"white"}}>
//         <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
//           <View style={{ marginRight: 10, marginBottom: 10 }}>
//             <Text style={{ color: "black",fontSize: 45}}>xx,xxx.xx THB</Text>
//         </View>
//       </View>
//       </View>
//       <View style={{ flex: 0.17, backgroundColor:"white"}}>
//         <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Text style={{ color: "black",fontSize: 20}}>convience Fee</Text>
//           <Text style={{ color: "black",fontSize: 20}}>xx.xx THB</Text>
//         </View>
//         <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Text style={{ color: "black",fontSize: 20}}>Total</Text>
//           <Text style={{ color: "black",fontSize: 20}}>xxx.xx THB</Text>
//         </View>
//       </View>
//       <View style={{flex: 0.03,backgroundColor:"lightgrey"}}>
//         <Text style={{ color: "black" }}> </Text>
//       </View>
//       <View style={{flex: 0.10,backgroundColor:"white"}}>
//         <View style={{ flex: 1, alignItems: 'flex-start' }}>
//           <View style={{ marginLeft: 15 }}>
//             <Text style={{ color: "black",fontSize: 30 }}>Send to</Text>
//           </View>
//         </View>
//       </View>
//       <View style={{flexDirection: 'row',flex: 0.20,backgroundColor:"white"}}>
//         <View style={{flex: 0.32,backgroundColor:"white"}}>
//           <View style={{ marginLeft: 15 }}>
//             <Image source={require('../img/person.png')} style={{ width: 100, height:100}} />
//           </View>
//         </View>
//         <View style={{flex: 0.5,backgroundColor:"white"}}>
//           <View style={{ marginLeft: 10 }}>
//             <Text style={{ color: "black",fontSize: 15 }}>Elite Project............opop</Text>
//             <Text style={{ color: "black",fontSize: 15 }}>mainnn</Text>
//             <Text style={{ color: "black",fontSize: 15 }}>0621369417</Text>
//           </View>
//         </View>
//         <View style={{flex: 0.18,backgroundColor:"white"}}>
//           <View style={{ marginLeft: 3 }}>
//             <Text style={{ color: "orchid",fontSize: 15 }}>Change</Text>
//           </View>
//         </View>
//       </View>
//       <View style={{flex: 0.03,backgroundColor:"lightgrey"}}>
//         <Text style={{ color: "black" }}> </Text>
//       </View>
//       <View style={{flex: 0.12,backgroundColor:"white"}}>
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Button title="คลิกดูงับ" color = "plum" onPress={handleButtonPress}/>
//         </View>
//       </View>

//     </View>
//   )
// }
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     centeredView: {
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
// });

// export default Splash