import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import JobsData from '../assets/data/Jobs'

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function JobPortal() {

    console.log(JobsData)
    return (
        <View>
            {
                JobsData.map(item => {
                    return (

                            <View key={item.id}  style={styles.container}>
                                <Text style={styles.jobHeader}>{item.job}</Text>
                                <View style={{marginTop:10}}>
                                    <View style={styles.innerBlock}>
                                        <FontAwesome name="shopping-bag" size={22} color="black" />
                                        <Text style={styles.textBlock}>{item.job}</Text>
                                    </View>
                                    <View style={styles.innerBlock}>
                                        <Ionicons name="ios-people" size={22} color="black" />
                                        <Text  style={styles.textBlock}>{item.duration}</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:6}}>
                                    <Text style={{fontFamily:'Medium',fontSize:18,color:'#27cccb',marginRight:7}}>More Details</Text>
                                    <AntDesign name="arrowright" size={20} color="#27cccb" />
                                </View>
                                
                            </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: '#C1BCBB',
        marginBottom: 10,
        padding: 10
    },
    innerBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:4
    },
    jobHeader: {
        fontFamily: 'Medium',
        fontSize: 25,
        color: '#717171'
    },
    textBlock:{
        fontFamily:'Regular',
        fontSize:20,
        marginLeft:10
    }
})