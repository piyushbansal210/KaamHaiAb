import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView, Image } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen')

export default function Quote() {

    return (
        <ScrollView>
            <View style={{ backgroundColor: '#27cccb', padding: 0, alignItems: 'center', justifyContent: 'center', margin: 15 }}>
                <Text style={{ fontFamily: 'Demi', color: '#000', fontSize: 30, margin: 15, color: 'white' }}>Your Contact Details</Text>

            </View>
            <Image
                style={{width:width-30, height:width-30,margin:15}}
                source={{ uri: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }}
            />
            <View style={styles.container}>

                <View style={styles.inputContainer}>
                    <Text style={styles.formTitle}>Full Name</Text>
                    <TextInput
                        placeholder="Full Name"
                        style={styles.input}
                    />
                </View>
                <View style={styles.top}>
                    <Text style={styles.formTitle}>Email Address</Text>
                    <TextInput
                    placeholder="Email Address"
                        style={styles.input}
                    />
                </View>
                <View style={styles.top}>
                    <Text style={styles.formTitle}>Phone Number</Text>
                    <TextInput
                    placeholder="Phone Number"
                        style={styles.input}
                    />
                </View>
                <View style={styles.top}>
                    <Text style={styles.formTitle}>Companies Name</Text>
                    <TextInput
                    placeholder="Companies Name"
                        style={styles.input}
                    />
                </View>
                <View style={styles.top}>
                    <Text style={styles.formTitle}>Service Required</Text>
                    <TextInput
                    placeholder="Service Required"
                        style={styles.input}
                    />
                </View>
                <View style={styles.top}>
                    <Text style={styles.formTitle}>Comments</Text>
                    <TextInput
                    placeholder="Comments"
                        multiline={true}
                        style={styles.cover}
                    />
                </View>

            </View>
            <View style={{backgroundColor:'#ff675f',margin:15,padding:10,alignItems: 'center',justifyContent:'center'}}>
                <Text style={{color:'#fff',fontFamily:'Medium',fontSize:22}}>SUBMIT</Text>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 15,
    },
    inputContainer: {
        marginTop: 10,
    },
    formTitle: {
        fontFamily: 'Medium',
        fontSize: 18,
        color: '#717171',
        marginVertical:6
    },
    input: {
        backgroundColor: '#f4f4f4',
        fontFamily: 'Regular',
        fontSize: 17,
        padding: 8
    },
    cover: {
        backgroundColor: '#f4f4f4',
        fontFamily: 'Regular',
        fontSize: 17,
        padding: 8,
        height: height / 4,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#27cccb',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Medium',
        fontSize: 20
    },
    top:{
        marginTop:6
    }
})