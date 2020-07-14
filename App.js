import React, { Component,useState,useEffect } from 'react';
import { View, Text ,TextInput,TouchableOpacity, ViewBase,StyleSheet,Dimensions} from 'react-native';
import {Block,Morph,VectorIcon}from './src/components'
import  axios from 'axios'

const App =()=> {
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const [isSignIn,setIsSignIn] = useState(false)
    const{width,height} = Dimensions.get('window')

    const SLIDE_HEIGHT = 0.61 * height

    const styles = StyleSheet.create({
      titleContainer:{
          backgroundColor:'red',
          height:100,
          justifyContent:'center',
          transform:[
            {translateY:(SLIDE_HEIGHT-100)/2},
            {translateX:-width/2+60},
            {rotate:"90deg"}
          ]
      }
    })
    useEffect(()=>{
      console.log('hhahaha state change')
    },[])
    
    // const SingIn=()=>{
    //   axios.post('http://localhost:3000/auth/login', {
    //     username: username,
    //     password: password
    //   })
    //   .then(function (response) {
    //     console.log('result',response.data.row);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // }
    return (
      <View style={{
       flex:1,
       backgroundColor:'pink'
      }}>
      {/* <TextInput 
        placeholder='username'
        style={{width:300,height:50,borderWidth:1,borderRadius:5}}
        onChangeText={(t)=>{setUsername(t)}}
        autoCapitalize={'none'}
      />
      <TextInput 
        placeholder='password'
        style={{width:300,height:50,borderWidth:1,borderRadius:5}}
        onChangeText={(t)=>{setPassword(t)}}
        autoCapitalize={'none'}

      />
      <TouchableOpacity onPress={()=>SingIn()}>
        <Morph radius={5} style={{width:100,height:50,marginTop:20}}>
          <Text>Sing In </Text>
        </Morph>
      </TouchableOpacity> */}
          <View style={styles.titleContainer}>
            <Text 
            style={{fontSize:80,
            lineHeight:80,
            textAlign:'center',
            color:'white'
            }}>Toafn dz </Text>
          </View>
        
      </View>
    );
  }




export default  App