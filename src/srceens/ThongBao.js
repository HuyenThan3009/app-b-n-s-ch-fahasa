import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class ThongBao extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <Text>Bạn chưa có thông báo mới nào</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})