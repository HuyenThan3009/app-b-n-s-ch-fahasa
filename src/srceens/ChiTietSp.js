import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ChiTietSp({ navigation, route }) {
  const { product } = route.params;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCartFromStorage();
  }, []);

  const loadCartFromStorage = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData !== null) {
        setCart(JSON.parse(cartData));
      }
    } catch (error) {
      console.error('Lỗi khi tải giỏ hàng từ AsyncStorage:', error);
    }
  };

  const saveCartToStorage = async (updatedCart) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Lỗi khi lưu giỏ hàng vào AsyncStorage:', error);
    }
  };

  const addToCart = () => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      saveCartToStorage(updatedCart);
      Alert.alert(
        'Thông báo',
        'Sản phẩm đã được thêm vào giỏ hàng',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Giỏ Hàng');
            },
          },
        ]
      );
      console.log('Sản phẩm đã được thêm vào giỏ hàng:');
    } else {
      // const updatedCart = cart.map((item) =>
      //   item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      // );
      // setCart(updatedCart);
      // saveCartToStorage(updatedCart);
      Alert.alert(
        'Thông báo',
        'Sản phẩm đã có trong giỏ hàng',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Giỏ Hàng');
            },
          },
        ]
      );
      // console.log('Số lượng sản phẩm đã được tăng:', product);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.container}>
          <Image
            style={styles.imgLogo}
            source={product.img}
          />
          <Text>
            {product.name}
          </Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <Text>
              {product.price}
            </Text>
            <Image
              source={require('../img/icon/heart.png')}
            />
          </View>
          <Text style={styles.text}>
            Nhà cung cấp: {product.supplier}
          </Text>
          <Text style={styles.text}>
            Tác giả: {product.author}
          </Text>
          <Text style={styles.text}>
            Nhà xuất bản: {product.ublishing}
          </Text>
          <Text style={styles.text}>
            Hình thức bìa: {product.cover}
          </Text>
        </View>
        <View style={styles.des}>
          <Text style={{
            marginBottom: 10,
            fontWeight: '500'
          }}>
            Thông tin sản phẩm
          </Text>
          <Text style={{
            marginBottom: 80
          }}>
            {product.des}
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.buy} onPress={addToCart}>
        <Text style={{
          color: 'white',
          fontWeight: '500',
          fontSize: 16
        }}>
          Thêm vào giỏ hàng
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  imgLogo: {
    width: '100%',
    height: 400,
    marginBottom: 20
  },
  container: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  text: {
    fontWeight: '500',
    fontSize: 12,
    color: '#D3CACA',
  },
  des: {
    margin: 10
  },
  buy: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'red',
    alignItems: 'center'
  }
});
