import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import BlogItem from '../components/BlogItem'

import Blogdata from '../assets/data/BlogData'

export default function Blog() {
  return (
    <ScrollView syle={styles.container}>
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