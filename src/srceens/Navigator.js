import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home'
import ThongTinKhachHang from './ThongTinKhachHang'
import GoiY from './GoiY'
import ThongBao from './ThongBao'
import GioHang from './GioHang'


const Tab = createBottomTabNavigator();
export default function Navigator({ navigation }) {
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Trang Chủ") {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === "Tài Khoản") {
            iconName = focused ? 'user-circle' : 'user-circle-o';
          } else if (route.name === "Gợi Ý") {
            iconName = focused ? 'star' : 'star-o';
          } else if (route.name === "Thông Báo") {
            iconName = focused ? 'send' : 'send-o';
          } else if (route.name === "Giỏ Hàng") {
            iconName = focused ? 'cart-arrow-down' : 'cart-plus';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
      })}>
      <Tab.Screen name="Trang Chủ" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Tài Khoản" component={ThongTinKhachHang}
        options={{
          headerShown: true,
          headerTitle: 'Thông Tin Khách Hàng',
          headerStyle: { backgroundColor: '#C92127' },
          headerTintColor: 'white',
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={20}
              color="white"
              onPress={() => navigation.navigate("Trang Chủ")}
              style={{ marginLeft: 10 }}
            />
          ),
        }} />
      <Tab.Screen name="Gợi Ý" component={GoiY}
        options={{
          headerShown: true,
          headerTitle: 'Gợi Ý',
          headerStyle: { backgroundColor: '#C92127' },
          headerTintColor: 'white',
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={20}
              color="white"
              onPress={() => navigation.navigate("Trang Chủ")}
              style={{ marginLeft: 10 }}
            />
          ),
        }} />
      <Tab.Screen name="Thông Báo" component={ThongBao}
        options={{
          headerShown: true,
          headerTitle: 'Thông Báo',
          headerStyle: { backgroundColor: '#C92127' },
          headerTintColor: 'white',
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={20}
              color="white"
              onPress={() => navigation.navigate("Trang Chủ")}
              style={{ marginLeft: 10 }}
            />
          ),
        }} />
      <Tab.Screen name="Giỏ Hàng" component={GioHang}
        options={{
          headerShown: true,
          headerTitle: 'Giỏ Hàng',
          headerStyle: { backgroundColor: '#C92127' },
          headerTintColor: 'white',
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={20}
              color="white"
              onPress={() => navigation.navigate("Trang Chủ")}
              style={{ marginLeft: 10 }}
            />
          ),
        }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})