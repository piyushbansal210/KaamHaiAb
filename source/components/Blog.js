import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen')

export default function Blog(props) {

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.item.image }}
        style={styles.image}
      />
      <View style={{marginHorizontal: 10,marginBottom:10}}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.content} numberOfLines={2}>{props.item.content}</Text>
        <Text style={styles.continue}>Continue Reading ...</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#f4f4f4',
    backgroundColor:'#f4f4f4'
  },
  image: {
    width: '100%',
    height: width / 1.5,
    resizeMode: 'cover'
  },
  title: {
    fontFamily: 'Medium',
    fontSize: 20,
    marginTop: 7
  },
  content: {
    fontFamily: 'Regular',
    fontSize: 18,
    marginTop: 7
  },
  continue:{
    fontFamily: 'Regular',
    fontSize: 18,
    marginTop: 7,
    color:'orange'
  }
})