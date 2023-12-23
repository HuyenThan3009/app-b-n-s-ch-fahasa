import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableWithoutFeedback, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import SelectDropdown from 'react-native-select-dropdown'
import Foundation from 'react-native-vector-icons/Fontisto'
import { Dimensions } from 'react-native';
import { Keyboard } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
// import RNPickerSelect from 'react-native-picker-select';
const data_bank = ["Thanh toán khi nhận hàng", "bidv", "techcombank", "MB", "VNPay"]


export default function ThanhToan({navigation}) {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Tel, setTel] = useState("");
  const [bank, setBank] = useState("");
  const logout = async () => {
    try {
      // await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('cart');
    } catch (error) {
      // Xử lý lỗi khi xóa thông tin người dùng
      console.error('Lỗi khi đăng xuất:', error);
    }
  };
  const handle_pay = () => {
    if (Name && Address && Tel && bank) {
      Alert.alert("Đặt hàng thành công!")
      logout();
      navigation.navigate("Trang Chủ");
    }
    else {
      Alert.alert("Vui lòng điền đầy đủ thông tin")
    }

  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container_pay}>
        <View style={styles.input_pay}>
          <Text style={styles.lable_pay}>Họ và tên</Text>
          <View style={styles.input_user}>
            <AntDesign name={'user'} style={{ fontSize: 20 }} />
            <TextInput
              value={Name}
              onChangeText={setName}
              placeholder='Nhập họ và tên'
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.input_pay}>
          <Text style={styles.lable_pay}>Địa chỉ</Text>
          <View style={styles.input_user}>
            <Fontisto name={'map-marker-alt'} style={{ fontSize: 20 }} />
            <TextInput
            value={Address}
            onChangeText={setAddress}
              placeholder='Nhập địa chỉ'
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.input_pay}>
          <Text style={styles.lable_pay}>Số điện thoại</Text>
          <View style={styles.input_user}>
            <Ionic name={'call-outline'} style={{ fontSize: 20 }} />
            <TextInput
            value={Tel}
            onChangeText={setTel}
              placeholder='Nhập số điện thoại'
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.user_select}>
          <SelectDropdown
            data={data_bank}
            onSelect={(selectedItem, index) => {
             setBank(selectedItem)
            }}

            buttonStyle={{ width: '100%', borderColor: '#ccc', borderWidth: 1, borderRadius: 20 }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />
        </View>
        <View>
          <TouchableOpacity style={{ width: '100%', backgroundColor: '#C92127', marginTop: 20, padding: 15, borderRadius: 20 }} onPress={handle_pay}>
            <Text style={{ fontSize: 16, textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container_pay: {
    flex: 1,
    padding: 20
  },
  input_user: {
    flexDirection: 'row',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center'

  },
  input_pay: {
    marginTop: 20,
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
    padding: 5,
    width: '90%'
  },
  lable_pay: {
    fontSize: 16,
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  user_select: {
    marginTop: 20
  },
})