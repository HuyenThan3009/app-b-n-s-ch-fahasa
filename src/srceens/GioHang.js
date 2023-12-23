import React, { useEffect, useState, useRef } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export default function GioHang({navigation}) {
  const [cart, setCart] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const scrollViewRef = useRef(null);

  const getCartFromStorage = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData !== null) {
        const cartItems = JSON.parse(cartData);
        setCart(cartItems);
      }
    } catch (error) {
      console.error('Lỗi khi lấy danh sách sản phẩm từ giỏ hàng:', error);
    }
  };

  const saveCartToStorage = async (updatedCart) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Lỗi khi lưu giỏ hàng vào AsyncStorage:', error);
    }
  };

  const incrementQuantity = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCart(updatedCart);
    saveCartToStorage(updatedCart);
  };

  const decrementQuantity = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCart(updatedCart.filter((cartItem) => cartItem.quantity > 0));
    saveCartToStorage(updatedCart.filter((cartItem) => cartItem.quantity > 0));
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
    saveCartToStorage(updatedCart);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getCartFromStorage();
    setRefreshing(false);
  };

  useEffect(() => {
    getCartFromStorage();
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  },);

  return (
    <View style={{ flex: 1,backgroundColor:'#fff' }}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {cart.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image style={styles.cartItemImage} source={item.img} />
            <View>
              <Text>{item.name}</Text>
              <Text>Giá: {item.price}</Text>
              <Text>Số lượng: {item.quantity}</Text>
              <TouchableOpacity onPress={() => incrementQuantity(item)}>
                <Text>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => decrementQuantity(item)}>
                <Text>-</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeFromCart(item)}>
                <Text>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
     <View style={{flexDirection:'row',justifyContent:'center',marginBottom:20,backgroundColor:'#fff'}}>

     <TouchableOpacity style={styles.btn_thanh_toan} onPress={()=>navigation.navigate('ThanhToan')}>
        <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>
          Thanh toán ngay
        </Text>
      </TouchableOpacity>
     </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cartItemImage: {
    // width: 80,
    height: 80,
    marginRight: 10,
  },
  btn_thanh_toan:{
    backgroundColor:'#C92127',
    height:45,
    width:Width/1.2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  }
});
