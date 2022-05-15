import { View, Text ,Image,StyleSheet,Dimensions} from 'react-native'
import React from 'react'

const {width, height} =Dimensions.get('screen')

export default function Imagetext(props) {
  return (
    <View style={styles.container}>
      <Image source={props.item.image} style={{width: 100,height: 100}}/>
      <Text style={styles.text}>{props.item.context}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:25
    },
    image:{
        width:width/3
    },
    text:{
        fontFamily:'Regular',
        fontSize:20,
        marginTop:5
    }
})