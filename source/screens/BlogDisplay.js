import { View, Text, Image, StyleSheet, Dimensions,ScrollView } from 'react-native'
import React from 'react'

import BlogInfo from '../assets/data/BlogInfo'
const { width, height } = Dimensions.get('screen')
import Service from '../assets/data/Service'
import Discover from '../components/Discover'
import ContactDetails from '../components/ContactDetails'

export default function BlogDisplay() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ }}>
            <Text style={{fontSize:30,fontFamily:'Medium',color:'#27cccb',marginHorizontal: 15, marginBottom:20,marginTop:10}}>{BlogInfo[0].title}</Text>
            <Image
                source={{uri: BlogInfo[0].image}}
                style={styles.imageContainer}
            />
            <Text style={styles.textContainer}>{BlogInfo[0].context}</Text>
            <View>
                <Discover Standout={Service} styleHeader={{color:'#27cccb',fontSize:25}} styleContainer={{alignItems:'center'}}/>
            </View>
            <View>
                <ContactDetails/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: width - 30,
        height: width - 30,
        marginHorizontal: 15, 
    },
    textContainer:{
        fontFamily: 'Regular',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 20,
        marginHorizontal: 15, 
    }
})