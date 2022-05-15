import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Bar(props) {
  console.log(props.item.percentage)
  return (
    <View style={styles.container}>
      <View style={styles.textPrcentage}>
        <Text style={styles.scheme}>{props.item.text}</Text>
        <Text style={styles.schemePercentage}>{props.item.percentage}</Text>
      </View>
      <View style={styles.innerBar}>
        <View
          style={[styles.outerBar,{backgroundColor:props.item.color,width:props.item.percentage}]}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom:18
  },
  textPrcentage: {
    flexDirection: 'row'
  },
  scheme: {
    flex: 1,
    fontFamily: 'Medium',
    fontSize:17
  },
  innerBar: {
    height: 10,
    backgroundColor: '#f4f4f4',
    marginTop:6
  },
  schemePercentage:{
    fontFamily: 'Medium',
    fontSize:17
  },
  outerBar:{
    height: 10,
    backgroundColor: 'orange',
    width:'94%',
  }
})