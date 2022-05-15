import { View, Text, Image, ImageBackground, StyleSheet, Dimensions,TextInput } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen')

export default function MakeAppointment() {
    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }}
            style={styles.image}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.appointment}>Make An Appointment</Text>
                <Text style={styles.context}>Feel free to contact us, We will be happy in assisting you through the process.</Text>
                <View style={{marginTop:13}}>    
                    <View style={styles.textBox}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Name"
                        />
                        <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        />
                    </View>
                    <View style={styles.textBox}>
                        <TextInput
                        style={styles.textInput}
                        placeholder="Phone"
                        />
                        <TextInput
                        style={styles.textInput}
                        placeholder="Country"
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>SEND</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {},
    image: {
        width: width,
        height: height / 2.7,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer:{
        backgroundColor:'#f5f5f5',
        width:'95%',
        height:'90%',
        padding:20
    },
    appointment:{
        fontFamily:'Medium',
        fontSize:24,
        marginTop:5
    },
    context:{
        fontFamily:'Regular',
        fontSize:20,
        marginTop:8
    },
    textInput:{
        flex:1,
        borderColor:'#dedede',
        borderWidth:1,
        margin:2,
        fontFamily:'Regular',
        fontSize:18,
        paddingHorizontal:10,
        paddingVertical:4
    },
    textBox:{
        flexDirection:'row',
        marginTop:2
    },
    button: {
        backgroundColor:'#27cccb',
        alignItems: 'center',
        height:'12%',
        justifyContent: 'center',
        marginTop:20
    },
    buttonText:{
        color:'#f5f5f5',
        fontFamily:'Medium',
    }
})