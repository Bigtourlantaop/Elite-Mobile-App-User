import React from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Loginpage = ({navigation}) => {

    return (
        <ImageBackground source={require('../../assets/image/Background_Login.png')} style={{flex:1, justifyContent:'center'}}>
            <View style={{backgroundColor:'white', margin:35, borderRadius:30, }}>
                <View style={{paddingHorizontal:25}}>
                    <View style={{alignItems: 'center', margin:20}}>
                        <Text style={{fontSize:90, color: '#000000'}}>E lite</Text>
                    </View>
                    <TextInput 
                    placeholder="Email" 
                    style={styles.input} 
                    keyboardType="email-address"
                    />
                    <TextInput 
                    placeholder="Password" 
                    style={styles.input} 
                    secureTextEntry={true} 
                    />
                    <TouchableOpacity onPress={() => {}} style={styles.loginbut}>
                        <Text style={{color: '#ffffff'}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate('Register')}} style={{marginVertical:10}}>
                    <Text style={{color: '#000000'}}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={{marginVertical:10}}>
                    <Text style={{color: '#000000'}}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius:15,
        borderColor: '#000000',
        borderWidth: 3,
    },
    loginbut:{
        backgroundColor: '#000000',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:15,
        alignItems: 'center'
    }

});

export default Loginpage;