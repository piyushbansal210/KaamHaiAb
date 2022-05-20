import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Formik, } from 'formik';
import * as Yup from 'yup';
import Modal from "react-native-modal";
const { width, height } = Dimensions.get('screen')

const DisplayingErrorMessagesSchema = Yup.object().shape({
    Name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    Email: Yup.string().email('Invalid email').required('Required'),
    PhoneNumber: Yup.string().min(8, 'Invalid Mobile Number').max(15, 'Invalid Mobile Number').required('Required'),
    Country: Yup.string().min(3, 'Too Short!').required('Required'),
});

import { db } from '../../Firebase';
import { addDoc, doc, setDoc, collection } from "firebase/firestore";



export default function MakeAppointment() {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <Formik
            initialValues={{
                Name: "",
                Email: "",
                PhoneNumber: "",
                Country: "",
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={values => {
                // same shape as initial values
                addDoc(collection(db, 'Appointment'), values)
                    .then(() => {
                        toggleModal()
                    })
                    .catch((err) => {
                        alert(err)
                    })
            }}
        >

            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }}
                    style={styles.image}
                >
                    <Modal isVisible={isModalVisible} style={{}}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
                            <Text style={{ fontFamily: 'Medium', fontSize: 25 }}>Your Appointment Has been Submitted</Text>

                            <TouchableOpacity onPress={() => toggleModal()} style={{
                                backgroundColor: '#27cccb',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                padding: 10,
                                marginTop:20
                            }}>
                                <Text style={{ fontFamily: 'Medium', fontSize: 20,color:'white'}}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <View style={styles.innerContainer}>
                        <Text style={styles.appointment}>Make An Appointment</Text>
                        <Text style={styles.context}>Feel free to contact us, We will be happy in assisting you through the process.
                            <Text style={{ color: '#27cccb' }}>  *Your Data is only send when all Boxes turn yellow</Text> </Text>
                        <View style={{ marginTop: 13 }}>
                            <View style={styles.textBox}>

                                <TextInput
                                    style={[styles.textInput, { backgroundColor: errors.Name ? 'white' : 'white' }]}
                                    placeholder="Name"
                                    onBlur={handleBlur('Name')}
                                    value={values.Name}
                                    onChangeText={handleChange('Name')}
                                />

                                <TextInput
                                    style={[styles.textInput, { backgroundColor: errors.Email ? 'white' : 'white' }]}
                                    placeholder="Email"
                                    onBlur={handleBlur('Email')}
                                    value={values.Email}
                                    onChangeText={handleChange('Email')}
                                />

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                {errors.Name && <Text style={styles.errorText}>*{errors.Name}</Text>}
                                {errors.Email && <Text style={styles.errorText}>*{errors.Email}</Text>}
                            </View>
                            <View style={styles.textBox}>
                                <TextInput
                                    style={[styles.textInput, { backgroundColor: errors.PhoneNumber ? 'white' : 'white' }]}
                                    placeholder="Phone"
                                    onBlur={handleBlur('PhoneNumber')}
                                    value={values.PhoneNumber}
                                    onChangeText={handleChange('PhoneNumber')}
                                />

                                <TextInput
                                    style={[styles.textInput, { backgroundColor: errors.Country ? 'white' : 'white' }]}
                                    placeholder="Country"
                                    onBlur={handleBlur('Country')}
                                    value={values.Country}
                                    onChangeText={handleChange('Country')}
                                />

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            {errors.PhoneNumber && <Text style={styles.errorText}>*{errors.PhoneNumber}</Text>}
                            {errors.Country && <Text style={styles.errorText}>*{errors.Country}</Text>}
                        </View>
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>SEND</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {},
    image: {
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        backgroundColor: 'white',
        // width: '95%',
        // height: '90%',
        padding: 20,
        flex: 1,
        margin: 10
    },
    appointment: {
        fontFamily: 'Medium',
        fontSize: 24,
        marginTop: 5
    },
    context: {
        fontFamily: 'Regular',
        fontSize: 20,
        marginTop: 8
    },
    textInput: {
        flex: 1,
        borderColor: '#dedede',
        borderWidth: 1,
        margin: 2,
        fontFamily: 'Regular',
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    textBox: {
        flexDirection: 'row',
        marginTop: 2
    },
    button: {
        backgroundColor: '#27cccb',
        alignItems: 'center',
        height: '12%',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 5
    },
    buttonText: {
        color: '#f5f5f5',
        fontFamily: 'Medium',
    },
    errorText: {
        fontFamily: 'Regular',
        color: 'red',
        fontSize: 16
    }
})