import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Register_Screen = ({navigation}) => {

    return (
        <SafeAreaView style={{flex:1, justifyContent:'center'}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:25}}>
              <View style={{alignItems:'center', margin: 40}}>
                <Image source={require('../../assets/image/Worklife.png')} style={{}}></Image>
              </View>
              <Text style={{fontSize:50, color:'black', marginBottom:40}}>Register</Text>
              <TextInput 
              placeholder="Full name" 
              style={styles.input} 
              keyboardType="default" />
              <TextInput 
              placeholder="Email" 
              style={styles.input} 
              keyboardType="email-address" />
              <TextInput 
              placeholder="Password" 
              style={styles.input} 
              secureTextEntry={true} />
              <TextInput 
              placeholder="Confirm Password" 
              style={styles.input} 
              secureTextEntry={true} />
              <TouchableOpacity onPress={() => {}} style={styles.RegisBut}>
                <Text style={{color: 'white', fontSize:23}}>Register</Text>
              </TouchableOpacity>
              <View style = {{flexDirection: 'row', justifyContent:'center', marginTop: 20}}>
                <Text>Already registered? </Text>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <Text style={{color:'blue', marginBottom: 25}}>Login</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
    RegisBut:{
        backgroundColor: '#071952',
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:15,
        alignItems: 'center'
    }

});

export default Register_Screen;