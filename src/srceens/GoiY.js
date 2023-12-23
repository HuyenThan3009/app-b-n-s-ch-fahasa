import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function GoiY() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,marginTop:-20,backgroundColor:'white'}}>
      <Image
        source={require('../img/icon/goiy.png')}
      />
      <Text style={{ textAlign: 'center',marginTop:20 }}>Để xem được gợi ý dành riêng cho bạn. Vui lòng
        xem ít nhất ba sản phẩm</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})