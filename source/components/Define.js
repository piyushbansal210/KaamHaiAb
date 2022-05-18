import { View, Text, Pressable ,StyleSheet} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


export default function Define(props) {

  return (
    <View style={[styles.container,{backgroundColor:props.item.color}]}>
      <Text style={styles.title}>{props.item.title}</Text>
      <Text style={styles.context}>{props.item.context}</Text>
      <Pressable style={styles.button} onPress={()=>props.navigation.navigate('Service',{serviceName:props.item.title})}>
          <Text style={[styles.butonText]}>Learn More</Text>
          <AntDesign name="arrowright" size={18} color="black" />
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffe724',
        marginHorizontal:15,
        padding:15,
        
    },
    title:{
        fontFamily:'Medium',
        fontSize:22
    },
    context:{
        fontFamily:'Regular',
        fontSize:16,
        marginRight:20,
        marginTop:6,
        
    },
    butonText:{
        fontFamily:'Regular',
        fontSize:16,
        marginRight:5
    },
    button:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop:6
    }

})
