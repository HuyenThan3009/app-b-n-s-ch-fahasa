import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import Fontisto from 'react-native-vector-icons/Fontisto'
export default function Forgot_Password() {
  return (
    <View style={{flex:1,padding:20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
       <View style={{height:Height/2,width:Width/1.2}}>
       <Text style={{fontSize:18,fontWeight:'bold',paddingBottom:20,marginLeft:10}}>Email của bạn</Text>
    <View style={{flexDirection:'row',alignItems:'center',borderRadius:20,padding:15,borderWidth:1,borderColor:'#ccc',marginBottom:40}}>
        <Fontisto name='email' style={{fontSize:25,marginRight:10}} />
    <TextInput
    placeholder='Vui lòng nhập Email'
    style={{fontSize:16,width:'100%'}}
    
    />
    </View>
    <View>
          <TouchableOpacity style={{ width: '100%', backgroundColor: '#C92127', marginTop: 20, padding: 15, borderRadius: 20 }}>
            <Text style={{ fontSize: 16, textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Quên mật khẩu</Text>
          </TouchableOpacity>
        </View>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({})