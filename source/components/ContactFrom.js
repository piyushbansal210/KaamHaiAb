import { View, Text, StyleSheet, TextInput, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Formik, } from 'formik';
import * as Yup from 'yup';

const { width, height } = Dimensions.get('screen')


const DisplayingErrorMessagesSchema = Yup.object().shape({
  Name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  Email: Yup.string().email('Invalid email').required('Required'),
  CompanyName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  PhoneNumber: Yup.string().min(8, 'Invalid Mobile Number').max(15, 'Invalid Mobile Number').required('Required'),
  Comment: Yup.string().min(2, 'Too Short!'),
});

export default function ContactFrom() {

  const submitToFirebase = (values)=>{
    console.log(values)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.contact}>Contact Form</Text>
      <Formik
        initialValues={{
          Name: "",
          Email: "",
          CompanyName: "",
          PhoneNumber: "",
          Comment: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={values => {
          // same shape as initial values
          submitToFirebase(values)
        }}
      >
        {({  handleChange, handleBlur, handleSubmit, values ,errors}) => (
          <View>

            <TextInput
              placeholder={"Comment"}
              style={styles.comment}
              multiline={true}
              onBlur={handleBlur('Comment')}
              value={values.Comment}
              onChangeText={handleChange('Comment')}
            />
            {errors.Comment && <Text style={styles.errorText}>*{errors.Comment}</Text>}
            <TextInput
              placeholder={"Name"}
              style={styles.formShort}
              onBlur={handleBlur('Name')}
              value={values.Name}
              onChangeText={handleChange('Name')}
            />
            {errors.Name && <Text style={styles.errorText}>*{errors.Name}</Text>}
            <TextInput
              placeholder={"Email"}
              style={styles.formShort}
              onBlur={handleBlur('Email')}
              value={values.Email}
              onChangeText={handleChange('Email')}
            />
            {errors.Email && <Text style={styles.errorText}>*{errors.Email}</Text>}
            <TextInput
              placeholder={"Company Name"}
              style={styles.formShort}
              onBlur={handleBlur('CompanyName')}
              value={values.CompanyName}
              onChangeText={handleChange('CompanyName')}
            />
            {errors.CompanyName && <Text style={styles.errorText}>*{errors.CompanyName}</Text>}
            <TextInput
              placeholder={"Phone Number"}
              style={styles.formShort}
              onBlur={handleBlur('PhoneNumber')}
              value={values.PhoneNumber}
              onChangeText={handleChange('PhoneNumber')}
            />
            {errors.PhoneNumber && <Text style={styles.errorText}>*{errors.PhoneNumber}</Text>}
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>SUBMIT YOUR IDEA</Text>
            </Pressable>
          </View>
        )}

      </Formik>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginBottom: 40
  },
  contact: {
    fontSize: 22,
    fontFamily: 'Medium',
    marginBottom: 10
  },
  formShort: {
    fontSize: 18,
    fontFamily: 'Regular',
    backgroundColor: '#f4f4f4',
    marginTop: 10,
    padding: 8
  },
  comment: {
    fontSize: 18,
    fontFamily: 'Regular',
    backgroundColor: '#f4f4f4',
    marginTop: 10,
    height: height / 5,
    padding: 8,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#000',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Medium',
    padding: 8,
  },
  errorText:{
    fontFamily:'Regular',
    color: 'red',
    fontSize: 16
  }

})