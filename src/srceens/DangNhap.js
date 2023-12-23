import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { data } from '../../data';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DangNhap({ navigation }) {
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [userPassword, setUserPassword] = useState('');
  const managePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  const { users } = data
  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.password === userPassword);

    if (user) {
      // Lưu thông tin người dùng vào AsyncStorage
      AsyncStorage.setItem('user', JSON.stringify(user))
        .then(() => {
          alert("Đăng Nhập Thành Công")
          navigation.navigate('Navigator')
        })
        .catch((error) => {
          alert("Lỗi bên hệ thống")
        });
    } else {
      alert("Đăng Nhập Thất Bại Vui Lòng Kiểm Tra Lại Thông Tin !!!")
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Text style={styles.text}>
          Đăng Nhập
        </Text>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.imgLogo}
          source={require('../img/icon/user.png')}
        />

        <SafeAreaView
          style={styles.containerInput}
        >
          <Text>
            Email/Số điện thoại
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập email/số điện thoại  "
            keyboardType="default"
            value={email}
            onChangeText={setEmail}
          />
        </SafeAreaView>

        <SafeAreaView
          style={styles.containerInput}
        >
          <Text>
            Mật khẩu
          </Text>
          <TextInput
            style={styles.input}
            secureTextEntry={hidePassword}
            autoCompleteType="password"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="send"
            placeholder="Nhập mật khẩu"
            value={userPassword}
            onChangeText={(text) => setUserPassword(text)}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.visibilityBtn}
            onPress={managePasswordVisibility}
          >
            <Image
              source={
                hidePassword
                  ? require('../img/icon/view.png')
                  : require('../img/icon/hide.png')
              }
              style={styles.btnImage}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <TouchableOpacity style={styles.btnQuenMatKhau} onPress={()=>navigation.navigate('Forgot_Password')}>
          <Text
            style={styles.btnText}
          >Quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '500'
            }}
          >Đăng Nhập</Text>
        </TouchableOpacity>

        <Image
          style={styles.vector}
          source={require('../img/icon/Vector.png')}
        />
        <Text style={{
          backgroundColor: 'white',
          marginTop: -17,
          padding: 5,
        }}>
          HOẶC
        </Text>

        <TouchableOpacity style={styles.containerLogin} onPress={() => navigation.navigate("Navigator")}>
          <Image
            source={require('../img/icon/facebook.png')}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 18,
            }}
          >Đăng nhập bằng Facebook </Text>
        </TouchableOpacity  >
        <View style={styles.contentDangKi}>
          <Text>
            Bạn chưa có tài khoản?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("DangKi")}>
            <Text
              style={styles.btnText}
            >Đăng kí tài khoản </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.contentBottom}>
          <View style={styles.contentBottom}>
            <Image
              source={require('../img/icon/customer-service1.png')}
            />
            <Text>
              Hỗ Trợ
            </Text>
          </View>
          <View style={styles.contentBottom}>
            <Image
              source={require('../img/icon/united-kingdom.png')}
            />
            <Image
              source={require('../img/icon/vietnam1.png')}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FA"
  },
  text: {
    flex: 1,
    marginTop: 50,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  },
  back: {
    flex: 2,
    backgroundColor: '#C92127',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  content: {
    alignItems: 'center',
    flex: 5,
    backgroundColor: 'blue',
    marginTop: -150,
    margin: 20,
    marginBottom: -10,
    borderRadius: 15,
    backgroundColor: 'white'
  },
  bottom: {
    margin: 20,
  },
  btnLogin: {
    backgroundColor: '#B9AEAE',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#B9AEAE',
    borderRadius: 25,
    width: '90%',
    alignItems: 'center'
  },
  containerLogin: {
    backgroundColor: '#307EF3',
    flexDirection: 'row',
    width: '90%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    marginTop: 20,
    gap: 10
  },
  btnQuenMatKhau: {
    alignSelf: 'flex-end',
    margin: 10,
  },
  btnText: {
    color: '#FFB35C'
  },
  imgLogo: {
    margin: 40,
    width: 100,
    height: 100
  },
  containerInput: {
    width: '90%',
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#858D97',
    padding: 5,
    paddingLeft: 10,
    borderRadius: 30,
    marginTop: 10
  },
  visibilityBtn: {
    position: 'absolute',
    right: 9,
    height: 25,
    width: 25,
    padding: 0,
    marginTop: 36,
    marginRight: 5
  },
  vector: {
    width: '100%',
    marginTop: 50,
  },
  contentDangKi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    gap: 20
  },
  contentBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10
  },
})