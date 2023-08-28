import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Loginpage = ({navigation}) => {

    return (
        <SafeAreaView style={{flex:1, justifyContent:'center'}}>
            <View style={{paddingHorizontal:25}}>
                <View style={{alignItems: 'center', marginBottom:50}}>
                    <Text style={{fontSize:90, color: '#222831'}}>E lite</Text>
                </View>
            <TextInput 
            placeholder="Email" 
            style={styles.input} 
            keyboardType="email-address" />
            <TextInput 
            placeholder="Password" 
            style={styles.input} 
            secureTextEntry={true} />
            <TouchableOpacity onPress={() => {}} style={styles.loginbut}>
                <Text style={{color: 'white'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Register')}} style={{marginTop:35}}>
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={{marginTop:20}}>
                <Text>Forget Password?</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:15,
    },
    loginbut:{
        backgroundColor: '#071952',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:15,
        alignItems: 'center'
    }

});

export default Loginpage;