import { Text, StyleSheet, View, Image, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { data } from '../../data';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  
  const { Categories, Products } = data
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={{
      flex: 1
    }}>
      <View style={styles.header}>
        <View style={{
          marginTop: 50,
          backgroundColor: 'white'
        }}>
          <Image
            style={styles.imgbanner}
            source={require('../img/banner/bannerSale.png')}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 15
        }}>
          <TouchableOpacity onPress={openDrawer} >
            <Image
              source={require('../img/icon/menu.png')}
            />
          </TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 10,
            padding: 5,
            gap: 5
          }}>
            <Image
              source={require('../img/icon/search_icon.png')}
            />
            <SafeAreaView>
              <TextInput
                style={styles.input}
                placeholder="Tìm kiếm"
                keyboardType="default"
              />
            </SafeAreaView>
          </View>
          <Image
            source={require('../img/icon/barcode.png')}
          />
        </View>
      </View>
      <View style={{
        flex: 1
      }}>
        <View style={styles.banner}>
          <Image
            style={{
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require('../img/banner/bannerHome.png')}
          />
        </View>
        <View style={styles.danhmuc}>
          <Text style={{
            color: '#BBAFAF',
            marginTop: 5,
            marginLeft: 5
          }}>Danh Mục</Text>
          <ScrollView
            horizontal // Đặt ScrollView ngang
            contentContainerStyle={styles.scrollViewContent}
          >
            {Categories.map((item) => (
              <View style={styles.categoryItem} key={item.id}>
                <TouchableOpacity onPress={() => navigation.navigate('Sách')}>
                  <Image
                    style={styles.categoryImage}
                    source={item.img}
                  />
                  <Text style={styles.categoryText}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
        <Text style={{
          marginLeft: 20,
          color: '#FA3232',
          fontSize: 22,
        }}>Sản Phẩm Mới Nhất</Text>
        <ScrollView>
          <View style={styles.sanpham}>
            <View style={styles.container}>
              {Products.map((item) => (
                <TouchableOpacity style={styles.touchable} key={item.id}>
                  <View style={styles.item}>
                    <Image
                      style={styles.ProductsImage}
                      source={item.img}
                    />
                    <Text style={{
                      fontWeight: '500',
                      textAlign: 'center'
                    }}>
                      {item.name}
                    </Text>
                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      gap: 30,

                    }}>
                      <Text style={{
                        color: 'red'
                      }}>
                        {item.prices}
                      </Text>
                      <Text style={{
                        color: 'red'
                      }}>
                        {item.sale}
                      </Text>
                    </View>
                    <Text style={{
                      color: '#DFD3D3',
                      alignSelf: 'stretch'
                    }}>
                      {item.pricesStock}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#C92127',
    paddingBottom: 10
  },
  banner: {
    backgroundColor: 'white',
  },
  danhmuc: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  sanpham: {
    margin: 20,
    backgroundColor: 'back'
  },
  imgbanner: {
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    width: 230
  },
  Categories: {
    alignSelf: 'center',
  },
  scrollViewContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryItem: {
    padding: 10,
    marginRight: 10,
  },
  categoryImage: {
    alignSelf: 'center',
  },
  categoryText: {
    textAlign: 'center',
  },
  sanpham: {
    // Phong cách cho View tổng của tất cả sản phẩm
    flex: 1,
    justifyContent: 'center',
  },
  ProductsImage: {
    width: 150,
    height: 150
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10
  },
  item: {
    width: 150,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  touchable: {
    // Phong cách cho TouchableOpacity (nút sản phẩm)
    alignItems: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'center', // Căn giữa theo chiều dọc
  },
})



