import { View, Text, ImageBackground, StyleSheet, Dimensions,Image } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen')

import SliderData from '../assets/data/SliderData'

export default function Slider() {

    const [index,setIndex] = React.useState(0);
    React.useEffect(()=>{
        setTimeout(()=>{
            if(index+1<=SliderData.length-1){
                setIndex(index+1)
            }
            else{
                setIndex(0)
            }
        },4000)
        
    },[index])

    return (
        <View style={styles.container}>
            <View>
                <Text style={{color:'white',fontFamily:'Medium',fontSize:20}}>{SliderData[index].text[0] }</Text>
                <Text style={{color:'#27cccb',fontFamily:'Medium',fontSize:25}}>{SliderData[index].text[1] }</Text>
                <Text  style={{color:'white',fontFamily:'Medium',fontSize:20}}>{SliderData[index].text[2] }</Text>
            </View>
            <Image
                source={ SliderData[index].image }
                style={{width:width*0.4,height:width*0.4,resizeMode:'contain',}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height / 4,
        marginBottom: 20,
        backgroundColor: 'black',
        padding:10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
    }
})