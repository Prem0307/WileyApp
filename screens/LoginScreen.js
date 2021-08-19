import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet,KeyboardAvoidingView,ToastAndroid,Alert} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component{
  constructor(){
    super()
    this.state={
      emailId:'',
      password:''
    }
  }
  login=async(email,password)=>{
    if(email&&password){
      try{
        const response=await firebase.auth().signInWithEmailAndPassword(email,password)
        if(response){
          this.props.navigation.navigate('Transaction')
        }
      }
      catch(error){
        switch(error.code){
          case 'auth/user-not-found':
          Alert.alert('User doesnot exist')
          console.log('doesnotexist')
          break;
          case 'auth/invalid-email':
          Alert.alert("Incorrect email password")
           console.log('incorrect')
          break;
        }
      }
    }
    else{
      Alert.alert('Enter Email Password')
       console.log('Enter email and pasword')
    }
  }
  render(){
    return(
      <KeyboardAvoidingView>
      <View>
      <Image
      style={{width:200,height:200}}
      source={require('../assets/booklogo.jpg')}/>
      <Text style={{textAlign:'center',fontSize:30}}>Wiley</Text>
      </View>
      <View>
      <TextInput
      style={styles.loginBox}
      placeholder='abc@gmail.com'
      keyboardType='email-address'
      onChangeText={(text)=>{
        this.setState({
          emailId:text
        })
      }}
      />
        <TextInput
      style={styles.loginBox}
      placeholder='Enter your password'
      keyboardType='email-address'
      onChangeText={(text)=>{
        this.setState({
          password:text
        })
      }}
      />
      </View>
      <View>
      <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
      onPress={()=>{
        this.login(this.state.emailId,this.state.password)
      }}>
      <Text style={{textAlign:'center'}}>Login</Text>
      </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    )
  
  }
}
const styles=StyleSheet.create({
  loginBox:{
    width:300,
    height:40,
    borderWidth:1.5,
    fontSize:20,
    margin:10,
    paddingLeft:10
  }
})