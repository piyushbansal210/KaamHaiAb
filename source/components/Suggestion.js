import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Suggestion() {
  return (
    <View style={styles.container}>
      <Text style={styles.suggestion}>SEND US A SUGGESTION</Text>
      <Text style={styles.text}>Send in your suggestions and improvements on our work because our team would be more than happy to make sure that we create a moment for you the next time since we are in a habit of placing our critics closer than our appreciators.</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    margin:15
  },
  suggestion:{
    fontFamily:'Medium',
    fontSize:22
  },
  text:{
    fontFamily:'Regular',
    fontSize:18,
    marginTop:10,
    lineHeight:20
  }
})