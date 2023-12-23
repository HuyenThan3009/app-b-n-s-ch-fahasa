import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { data } from '../../data'
import { Image } from 'react-native';
export default function Sach({ navigation }) {
  const { Book } = data;
  return (
    <View>
      <ScrollView >
        {Book.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => navigation.navigate('ChiTietSp', { product: item })}>
            <View style={styles.flex}>
              <Image
                source={item.img}
              />
              <View>
                <Text style={{
                  fontSize:13,
                  fontWeight:500
                }}>
                  {item.name}
                </Text>
                <View style={{ flexDirection: 'row' , gap:20 ,marginTop:10,marginBottom:5}}>
                  <View>
                    <Text style={styles.text}>
                      Nhà Cung Cấp: {item.supplier}
                    </Text>
                    <Text style={styles.text}>
                      Nhà Xuất Bản: {item.ublishing}
                    </Text>
                  </View>
                  <View >
                    <Text style={styles.text}>
                      Tác Giả: {item.author}
                    </Text>
                    <Text style={styles.text}>
                      Hình Thức Bìa: {item.cover}
                    </Text>
                    <Text style={{display:'none'}}>
                      Hình Thức Bìa: {item.des}
                    </Text>
                  </View>
                </View>
                <Text style={{
                  color: 'red',
                  fontWeight: '500'
                }}>
                  {item.price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 10,
    padding:10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    width:'90%'
  },
  text: {
    fontWeight: '500',
    fontSize: 10,
    color: '#D3CACA',
  }
})