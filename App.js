  import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigator from './src/srceens/Navigator';
import ChiTietSp from './src/srceens/ChiTietSp';
import DangKi from './src/srceens/DangKi';
import DangNhap from './src/srceens/DangNhap'
import Sach from './src/srceens/Sach'
import Icon from 'react-native-vector-icons/FontAwesome'
import ThanhToan from './src/srceens/ThanhToan';
import Forgot_Password from './src/srceens/Forgot_Password';
const Stack = createNativeStackNavigator();
export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DangNhap" component={DangNhap} options={{ headerShown: false }} />
        <Stack.Screen name="Navigator" component={Navigator} options={{ headerShown: false }} />
        <Stack.Screen name="ChiTietSp" component={ChiTietSp} options={{
          headerShown: true,
          headerTitle: 'Chi tiết sản phẩm',
          headerStyle: { backgroundColor: '#C92127' },
          headerTintColor: 'white',
          // headerLeft: () => (
          //   <Icon
          //     name="arrow-left"
          //     size={20}
          //     color="white"
          //     // onPress={() => navigation.navigate("Trang Chủ")}
          //     style={{ marginLeft: 10 }}
          //   />
          // ),
        }} />
        <Stack.Screen name="DangKi" component={DangKi} options={{ headerShown: false }} />
        <Stack.Screen name="Sách" component={Sach} options={{
          headerShown: true,
          headerTitle: 'Sách',
          headerStyle: { backgroundColor: '#C92127' },
          headerTintColor: 'white',
          // headerLeft: () => (
          //   <Icon
          //     name="arrow-left"
          //     size={20}
          //     color="white"
          //     onPress={() => navigation.navigate("Trang Chủ")}
          //     style={{ marginLeft: 10 }}
          //   />
          // ),
        }} />
        <Stack.Screen name="ThanhToan" component={ThanhToan} options={{
          headerShown: true,
          headerTitle: 'Thanh toán',
          headerStyle: { backgroundColor: '#C92127'},
          headerTintColor: 'white',
          // headerLeft: () => (
          //   <Icon
          //     name="arrow-left"
          //     size={20}
          //     color="white"
          //     // onPress={() => navigation.navigate("Trang Chủ")}
          //     style={{ marginLeft: 10 }}
          //   />
          // ),
        }} />
         <Stack.Screen name="Forgot_Password" component={Forgot_Password}
        options={{
          headerShown: true,
          headerTitle: 'Quên mật khẩu',
          headerStyle: { backgroundColor: '#C92127' },
          headerTintColor: 'white',
          // headerLeft: () => (
          //   <Icon
          //     name="arrow-left"
          //     size={20}
          //     color="white"
          //     // onPress={() => navigation.navigate("DangNhap")}
          //     style={{ marginLeft: 10 }}
          //   />
          // ),
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
