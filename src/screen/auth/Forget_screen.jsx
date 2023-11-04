import React, { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { Authcontext } from "../../context/Authcontext";
import axios from "axios";
import { YOURAPI } from "../../constants/editendpoint";

const Forget_screen = ({navigation}) => {
    const [name, setName] = useState(null)
    const [state1, setState1] = useState(1)
    const [user_color, setUsercolor] = useState("black")

    const forgot_user = (user_name) => {
        axios.patch(`http://${YOURAPI}/users/forgot/${user_name}`)
        .then(response => {
            console.log('PATCH done', response.data);
            navigation.navigate('Login')
          })
        .catch(error => {
          console.error('PATCH error', error);
          setUsercolor('red')
        });
      };

    return (
        <SafeAreaView style={{flex:1 ,marginHorizontal:15}}>
            <View style={{alignItems:'center', margin: 10}}>
                <Image source={require('../../assets/image/Forgotpass.png')} style={{width: 180,height: 180, resizeMode: 'stretch'}}></Image>
            </View>
            <View style={{alignItems:"left", marginTop:0, marginBottom: 20}}>
                <Text style={{fontSize:40}}>Forgot password?</Text>
            </View>
            <View style={{justifyContent: 'center',marginVertical: 15}}>
                <Text style={{fontSize:24, marginBottom:20, color: "grey"}}>ใส่ชื่อผู้ใช้เพื่อรับอีเมลแจ้งเตือนแสดงรหัสผ่านของท่าน</Text>
                <Text style={{fontSize:24, marginBottom:5, color: user_color}}>ชื่อผู้ใช้</Text>
                <TextInput placeholder='username' autoCorrect= {false} style={{fontSize:22, borderWidth:1, height:60, borderRadius:15, padding:10, borderColor: user_color}} onChangeText={text => setName(text)}></TextInput>
            </View>
            {state1 === 0 ? (
                <View style={{alignItems: 'left'}}>
                    <Text style = {{color: 'red', fontSize: 20}}>ชื่อผู้ใช้ไม่ถูกต้อง</Text>
                </View>) : (
                    <>
                    </>
                )}
            <TouchableOpacity onPress={() => {forgot_user(name)}}>
                <View style={styles.loginbut}>
                    <Text style={{fontSize:24, color:'#ffffff'}}>ยืนยัน</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setState1(0), setUsercolor("red")}}>
                <View style={styles.loginbut}>
                    <Text style={{fontSize:24, color:'#ffffff'}}>change state</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setState1(1), setUsercolor("black")}}>
                <View style={styles.loginbut}>
                    <Text style={{fontSize:24, color:'#ffffff'}}>change state</Text>
                </View>
            </TouchableOpacity>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    loginbut:{
        backgroundColor: '#000000',
        height: 55,
        borderWidth: 1,
        borderRadius:15,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
    },
});

export default Forget_screen;