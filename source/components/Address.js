import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Address() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Webroot Technologies</Text>
            <Text style={styles.text}>2nd Floor</Text>
            <Text style={styles.text}>Building: Netsmartz House</Text>
            <Text style={styles.text}>Plot No. 10, Rajiv Gandhi IT Park,</Text>
            <Text style={styles.text}>Chandigarh, 160101</Text>

            <View style={styles.innerContainer}>
                <Text style={styles.phone}>Phone: </Text>
                <Text style={styles.number}>+91-9888882551</Text>
            </View>
            <View style={styles.outerContainer}>
                <Text style={styles.phone}>Email: </Text>
                <Text style={styles.number}>info@webroottech.com</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    suggestion: {
        fontFamily: 'Medium',
        fontSize: 22
    },
    text: {
        fontFamily: 'Medium',
        fontSize: 18,
        marginTop:3
    },
    innerContainer: {
        flexDirection: 'row',
        marginTop:10
    },
    outerContainer:{
        flexDirection: 'row',
    },
    phone: {
        fontFamily: 'Medium',
        fontSize: 18,
    },
    number: {
        fontFamily: 'Medium',
        fontSize: 18,
        color:'orange'
    }
})