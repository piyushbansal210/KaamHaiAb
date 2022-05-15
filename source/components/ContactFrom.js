import { View, Text,StyleSheet ,TextInput,Dimensions} from 'react-native'
import React from 'react'

const {width,height}= Dimensions.get('screen')

export default function ContactFrom() {
  return (
    <View style={styles.container}>
      <Text style={styles.contact}>Contact Form</Text>
      <TextInput
        placeholder={"Comment"}
        style={styles.comment}
        multiline={true}
      />
      <TextInput
        placeholder={"Name"}
        style={styles.formShort}
      />
      <TextInput
        placeholder={"Email"}
        style={styles.formShort}
      />
      <TextInput
        placeholder={"Company Name"}
        style={styles.formShort}
      />
      <TextInput
        placeholder={"Phone Number"}
        style={styles.formShort}
      />
      <View style={styles.button}>
          <Text style={styles.buttonText}>SUBMIT YOUR IDEA</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        margin:15,
        marginBottom:40
    },
    contact:{
        fontSize:22,
        fontFamily:'Medium',
        marginBottom:10
    },
    formShort:{
        fontSize:18,
        fontFamily:'Regular',
        backgroundColor:'#f4f4f4',
        marginTop:10,
        padding:8
    },
    comment:{
        fontSize:18,
        fontFamily:'Regular',
        backgroundColor:'#f4f4f4',
        marginTop:10,
        height:height/5,
        padding:8,
        textAlignVertical: 'top',
    },
    button:{
        backgroundColor:'#000',
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color:'white',
        fontSize:18,
        fontFamily:'Medium',
        padding:8,
    }
})