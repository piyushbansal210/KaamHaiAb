import { View, Text,StyleSheet ,Dimensions,Image} from 'react-native'
import React from 'react'

import BlogData from '../assets/data/BlogData'
const {width, height}=Dimensions.get('screen')

export default function BlogItem({data}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:data.image}} style={styles.image}/>
      <Text style={styles.text}>{data.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        marginHorizontal:20,
        elevation:6,
        marginVertical:12
    },
    image:{
        width:width-40,
        height:width/1.8
    },
    text:{
        fontFamily:'Medium',
        fontSize:22,
        marginHorizontal:5,marginVertical:15,
    }
})