import { View, Text, StyleSheet, Button, Pressable,Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

import TestimonialData from '../assets/data/Testimonial'

import { Entypo } from '@expo/vector-icons';

const {width, height}=Dimensions.get('screen')

export default function Testimonial() {
    const [testimonial, setTestimonial] = useState(TestimonialData.length);
    const [index, setIndex] = useState(0);


    function indexes(method) {
        
        if (method === "plus") {
            if (index + 1 > testimonial - 1) {
                setIndex(0)
            }
            else {
                setIndex(index + 1)
            }
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.testimonial}>Testimonial</Text>
            <View style={styles.test}>
                <View style={{ flex: 1, }}>
                    <Text style={styles.testimonialContext}>{TestimonialData[index].text}</Text>
                    <Text style={styles.testimonialContextName}>{TestimonialData[index].name}</Text>
                </View>

                <Pressable onPress={() => indexes('plus')} style={{marginTop:-10}}>
                    <Entypo name="chevron-small-right" size={28} color="black" />
                </Pressable>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 8,
    },
    testimonial: {
        fontFamily: 'Medium',
        fontSize: 25
    },
    testimonialContext: {
        fontFamily: 'Regular',
        fontSize: 18
    },
    testimonialContextName: {
        fontFamily: 'Medium',
        fontSize: 18,
        color: '#27cccb',
        marginTop:10
    },
    test: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        height:height/7
    }
})