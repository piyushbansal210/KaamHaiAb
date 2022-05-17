import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Opening from '../assets/data/Opening'
import Discover from '../components/Discover'

import OPENING from '../assets/images/jobs.jpg'
import JobPortal from '../components/JobPortal'

const { width, height } = Dimensions.get('screen')

export default function Jobs() {
    return (
        <ScrollView style={{backgroundColor:'white'}}>
            
            <Discover Standout={Opening} styleHeader={{ fontSize: 30 }} />
            <Image
                source={OPENING}
                style={styles.image}
            />
            <View style={styles.portal}>
                <JobPortal />
            </View>
            <View style={{marginBottom:20}}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: width - 20,
        height: width - 20,
        margin: 10
    },
    portal:{
        margin:10
    }
})