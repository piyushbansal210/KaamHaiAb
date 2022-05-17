import { View, Text, StyleSheet,ScrollView,Image ,Dimensions } from 'react-native'
import React from 'react'
import BlogItem from '../components/BlogItem'

import Blogdata from '../assets/data/BlogData'
import LOGO from '../assets/images/companylogo.png'

const { width, height } = Dimensions.get('screen')

export default function Blog() {
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      
      <View style={{ backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={LOGO}
                        style={{ width: width / 4, height: width / 4, resizeMode: 'contain', }}
                    />
                </View>
      <Text style={styles.header}> Our Blog</Text>
      <View>
        {
          Blogdata.map((item)=>{
            return <BlogItem key={item.id} data={item}/>
          })
        }
        
      </View>
      <View style={{height:20}}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    margin: 15,
    fontFamily: 'Medium',
    fontSize: 30
  }
})