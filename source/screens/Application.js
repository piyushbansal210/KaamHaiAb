import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper';
const { width, height } = Dimensions.get('screen')
import * as DocumentPicker from "expo-document-picker";

import { Formik, } from 'formik';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  Name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  Email: Yup.string().email('Invalid email').required('Required'),
  PhoneNumber: Yup.string().min(8, 'Invalid Mobile Number').max(15, 'Invalid Mobile Number').required('Required'),
  CoverLetter: Yup.string().min(3, 'Too Short!').required('Required'),
});


export default function Application({ route }) {
  const [checked, setChecked] = React.useState(false);
  const [fileName, setFileName] = React.useState('No File Selected');
  const [fileUri,setFileUri] = React.useState('');
  const Job = route.params.jobName;


  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    setFileName(result.name)
    setFileUri(result.uri)
  };

  function sendToFireBase(values){
    console.log(values)
  }



  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Formik
        initialValues={{
          Name: "",
          Email: "",
          PhoneNumber: "",
          CoverLetter: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={values => {
          // same shape as initial values
          if(checked === true  && fileUri.length>0) {
            sendToFireBase(values)
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.container}>
            <Text style={{ fontFamily: 'Demi', color: '#000', fontSize: 30 }}>Apply  For This Position</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.formTitle}>Full Name</Text>
              <TextInput
                style={styles.input}
                onBlur={handleBlur('Name')}
                value={values.Name}
                onChangeText={handleChange('Name')}
              />
              {errors.Name && <Text style={styles.errorText}>*{errors.Name}</Text>}
            </View>
            <View>
              <Text style={styles.formTitle}>Email Address</Text>
              <TextInput
                style={styles.input}
                onBlur={handleBlur('Email')}
                value={values.Email}
                onChangeText={handleChange('Email')}
              />
              {errors.Email && <Text style={styles.errorText}>*{errors.Email}</Text>}
            </View>
            <View>
              <Text style={styles.formTitle}>Phone Number</Text>
              <TextInput
                style={styles.input}
                onBlur={handleBlur('PhoneNumber')}
                value={values.PhoneNumber}
                onChangeText={handleChange('PhoneNumber')}
              />
              {errors.PhoneNumber && <Text style={styles.errorText}>*{errors.PhoneNumber}</Text>}
            </View>
            <View>
              <Text style={styles.formTitle}>Cover Letter</Text>
              <TextInput
                multiline={true}
                style={styles.cover}
                onBlur={handleBlur('CoverLetter')}
                value={values.CoverLetter}
                onChangeText={handleChange('CoverLetter')}
              />
              {errors.CoverLetter && <Text style={styles.errorText}>*{errors.CoverLetter}</Text>}
            </View>

            <View>
              <Text style={styles.formTitle}>Upload Document</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={styles.button} onPress={() => pickDocument()}>
                  <Text style={styles.buttonText}>Select File</Text>
                </TouchableOpacity>
                <Text numberOfLines={2} style={[styles.buttonText, { color: '#717171', marginLeft: 10, flex: 1, fontSize: 17 }]}>{fileName}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={[styles.buttonText, { color: '#717171', marginLeft: 10, flex: 1 }]}>By using this form you agree with the storage and handling of your data by this website. </Text>
            </View>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#000", marginTop: 25, marginBottom: 7 }]} onPress={handleSubmit}>
              <Text style={[styles.buttonText, { color: 'white' }]}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderWidth: 0.8,
    borderColor: '#C1BCBB',
    padding: 10
  },
  inputContainer: {
    marginTop: 10
  },
  formTitle: {
    fontFamily: 'Medium',
    fontSize: 18,
    color: '#717171',
    marginBottom: 6,
    marginTop: 6
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
  errorText:{
    fontFamily:'Regular',
    color: 'red',
    fontSize: 16
  }
})