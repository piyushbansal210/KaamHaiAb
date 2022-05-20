import { View, Text, StyleSheet, Image, ScrollView, Dimensions,Pressable } from 'react-native'
import React from 'react'

import ServiceData from '../assets/data/ServicesData'

import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen')

export default function Service({route,navigation}) {

  const data = ServiceData.find(service=>service.serviceName === route.params.serviceName)
  return (
    <ScrollView>
      
      <Text style={{ fontFamily: 'Medium', fontSize: 30, color: '#27cccb', margin: 15 }}>{data.serviceTitle}</Text>
      <Text style={{ fontFamily: 'Regular', fontSize: 20, color: '#000', margin: 15, lineHeight: 20 }}>{data.serviceText}</Text>
      <Image
        source={{ uri: data.serviceImage }}
        style={styles.image}
      />

      <View style={{ margin: 15 }}>
        <Text style={{ fontFamily: 'Medium', fontSize: 25, color: '#717171', marginBottom: 10 }}>{data.benefitsTitle}</Text>
        {
          data.benefits.map(item =>
          (
            <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <FontAwesome name="circle-o" size={18} color="black" />
              <Text style={{ fontFamily: 'Regular', fontSize: 20, color: '#000', marginLeft: 3 }}>{item}</Text>
            </View>
          )
          )
        }
      </View>
      <Text style={{ fontFamily: 'Regular', fontSize: 20, color: '#000', marginHorizontal: 15, marginVertical: 6 }}>{data.serviceScope}</Text>
      <View style={{ margin: 15 }}>
        <Text style={{ fontFamily: 'Medium', fontSize: 25, color: '#717171', marginBottom: 10 }}>Why Choose WebRoot Technologies</Text>
        {
          data.chooseWebRoot.map(item => (
            <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <FontAwesome name="circle-o" size={18} color="black" />
              <Text style={{ fontFamily: 'Regular', fontSize: 20, color: '#000', marginLeft: 3 }}>{item}</Text>
            </View>
          ))
        }
      </View>
      <Text style={{ fontFamily: 'Regular', fontSize: 20, color: '#000', margin: 15 }}>{data.serviceConclude}</Text>
      <Pressable onPress={()=>navigation.navigate('Quote')} style={{ backgroundColor: '#ff675f', padding: 10, alignItems: 'center', justifyContent: 'center', margin: 15 }}>
        <Text style={{ fontFamily: 'Medium', color: 'white', fontSize: 20 }}>CLICK HERE TO  KNOW MORE</Text>
      </Pressable>

    </ScrollView>
  )
}
//#ff675f
const styles = StyleSheet.create({
  image: {
    width: width - 30,
    height: width - 30,
    margin: 15
  }
})