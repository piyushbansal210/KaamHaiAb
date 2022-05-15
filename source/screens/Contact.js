import { View, Text, StyleSheet,Dimensions ,LogBox,ScrollView} from 'react-native'
import React from 'react'

const {width, height}= Dimensions.get('screen')

import Suggestion from '../components/Suggestion'

import MapView from 'react-native-maps';
import Address from '../components/Address'
import ContactFrom from '../components/ContactFrom';

LogBox.ignoreAllLogs();

export default function Contact() {
    return (
        <ScrollView>
            <Suggestion/>
            <Address/>
            <ContactFrom/>
            <MapView style={styles.map} 
                initialRegion={{
                    latitude: 30.6975401,
                    longitude: 76.8551066,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
              
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        margin:15,
        width:width-30,
        height: width-30,
    },
})