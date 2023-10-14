import React from 'react';
import{
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
}from "react-native";

const Transfer =({navigation, route})=>{
   const money = route.params;
    function renderbank(){

        return(
            <View style={{}}>
                <View  
                 style={{padding:15,
                 flexDirection:'row',
                 width:50,
                 height:50,
                 marginLeft:79,
                 justifyContent:'center'}}
                 >
                <View>
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช', money)}}
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
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช', money)}}
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
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช', money)}}
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
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช', money)}}
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
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช', money)}}
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
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช', money)}}
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
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช', money)}}
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
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช', money)}}
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
                <TouchableOpacity onPress={() => {navigation.navigate('เลขบช', money)}}
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
                  <View style={{bottom: -160,justifyContent: 'center', alignItems:'center', borderWidth:1, width: 200, height: 50, borderRadius: 50, backgroundColor: '#79AC78'}}>
                    <Text style={{color: 'white'}}>ย้อนกลับ</Text>
                  </View>
                </TouchableOpacity>
            </View>
        )
    }
    return(
        <SafeAreaView style={{flex: 1, alignItems:'center', backgroundColor: 'white'}}>
            {renderbank()}
        </SafeAreaView>
    )
}

export default Transfer;