import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function ContactDetails() {
  return (
    <View style={styles.container}>
        <View style={{alignItems: 'center',marginBottom:10}}>

      <Text style={{fontFamily:'Regular',fontSize:25,marginTop:6,color:'#27cccb'}}>ContactDetails</Text>
        </View>
      <Text style={styles.textContainer}><Text style={{color:'#27cccb'}}>Company Name</Text> – Webroot Technologies (Best android and IOS app development Company in Chandigarh)</Text>
      <Text style={styles.textContainer}><Text style={{color:'#27cccb'}}>Company Address</Text> – 2nd Floor, Netsmartz House, Plot No. 10, Rajiv Gandhi IT Park, Chandigarh, 160101</Text>
      <Text style={styles.textContainer}><Text style={{color:'#27cccb'}}>Phone Number</Text> – 9888882551</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:15,
    },
    textContainer:{
        fontFamily:'Regular',
        fontSize:16,
        marginTop:6,
        lineHeight:20
        
    }
})