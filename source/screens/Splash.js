import { View, Text,Image,Dimensions } from 'react-native'
import React from 'react'
import { StatusBar as SB } from 'expo-status-bar';

const {width, height} = Dimensions.get('screen')

import LOGO from '../assets/images/companylogo.png'

export default function Splash() {
  return (
    <View style={{flex:1,backgroundColor:'black',alignItems: 'center', justifyContent: 'center'}}>
        <SB style="auto" backgroundColor='black' />
      <Image
        source={LOGO}
        style={{width:width/1.6,height:width/1.6,resizeMode:'contain'}}
      />
      
    </View>
  )
}