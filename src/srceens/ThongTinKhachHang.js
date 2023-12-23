import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function ThongTinKhachHang({ navigation }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Lấy thông tin người dùng từ AsyncStorage khi màn hình được tải
    AsyncStorage.getItem('user')
      .then((userData) => {
        if (userData) {
          setUser(JSON.parse(userData));
        }
      })
      .catch((error) => {
        // Xử lý lỗi khi lấy dữ liệu từ AsyncStorage
      });
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('cart');
      navigation.navigate('DangNhap')
    } catch (error) {
      // Xử lý lỗi khi xóa thông tin người dùng
      console.error('Lỗi khi đăng xuất:', error);
    }
  };
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.centeredContainer}>
        {user ? (
          <View style={styles.userInfoContainer}>
            <View style={{
              backgroundColor: '#fff',
              borderRadius:100,
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 3,
            }}>
              <Image
                style={styles.imgLogo}
                source={user.img}
              />
            </View>
            <Text>Họ và Tên: {user.name}</Text>
            <Text>Email: {user.email}</Text>
          </View>
        ) : (
          <View>
            <Text>Người dùng chưa đăng nhập</Text>
          </View>
        )}
        <TouchableOpacity onPress={logout}>
          <Text>Đăng Xuất</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -200,
    backgroundColor:'white'
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  imgLogo: {
    borderRadius: 100,
    width: 150,
    height: 150,

  },
});
