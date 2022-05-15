import { View, Text,StyleSheet,Image,Dimensions } from 'react-native'
import React from 'react'
const {width, height}= Dimensions.get('screen')

import TeamData from '../assets/data/Team'

export default function Team() {
    const [index,setIndex]=React.useState(0);
    React.useEffect(()=>{
        setTimeout(()=>{
            if(index+1<=TeamData.length-1){
                setIndex(index+1)
            }
            else{
                setIndex(0)
            }
        },5000)
        
    },[index])

    return (
        <View style={{alignItems: 'center',borderWidth:1,borderColor:'#C1BCBB'}}>
            <Image
                source={{uri:TeamData[index].image}}
                style={styles.image}
            />
            <Text style={styles.name}>{TeamData[index].name}</Text>
            <Text style={styles.position}>{TeamData[index].position}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:width-30,
        height:width-30,
        resizeMode:'cover',
    },
    name:{
        fontFamily:'Regular',
        fontSize:22,
        marginTop:10
    },
    position:{
        fontFamily:'Regular',
        fontSize:22,
        marginBottom:10
    }
})