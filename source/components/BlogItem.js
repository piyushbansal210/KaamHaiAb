import { View, Text,StyleSheet ,Dimensions,Image,Pressable} from 'react-native'
import React from 'react'

import BlogData from '../assets/data/BlogData'
const {width, height}=Dimensions.get('screen')

export default function BlogItem({data,navigation}) {
  
  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate('BlogDisplay')}>
      <Image source={{uri:data.image}} style={styles.image} onProgress={()=>navigation.navigate('BlogDisplay')}/>
      <Text style={styles.text}>{data.title}</Text>
    </Pressable>
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