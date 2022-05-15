import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Projects() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
          <Text style={styles.number}>149</Text>
          <Text style={styles.define}>Projects</Text>
      </View>
      <View style={styles.innerContainer}>
          <Text style={styles.number}>149</Text>
          <Text style={styles.define}>Clients</Text>
      </View>
      <View style={styles.innerContainer}>
          <Text style={styles.number}>12</Text>
          <Text style={styles.define}>Years</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom:20
  },
  number:{
    fontFamily:'Medium',
    fontSize:30,
    color:'#27cccb'
  },
  innerContainer:{
    alignItems: 'center',
  },
  define:{
    fontFamily:'Medium',
    fontSize:24,
  }
})