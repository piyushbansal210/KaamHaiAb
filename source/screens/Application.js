import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper';
const { width, height } = Dimensions.get('screen')
import * as DocumentPicker from "expo-document-picker";
import Modal from "react-native-modal";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { db, storage } from '../../Firebase'

import { Formik, } from 'formik';
import * as Yup from 'yup';
import { addDoc, doc, setDoc, collection } from "firebase/firestore";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  Name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(),
  Email: Yup.string().email('Invalid email').required(),
  PhoneNumber: Yup.string().min(8, 'Invalid Mobile Number').max(15, 'Invalid Mobile Number').required(),
  CoverLetter: Yup.string().min(3, 'Too Short!').required()
});


export default function Application({ route }) {

  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [fileName, setFileName] = React.useState('')
  const [fileUri, setFileUri] = React.useState('')
  const [job, setJob] = React.useState('')
  const [checked, setChecked] = React.useState(false)
  React.useEffect(() => {
    setJob(route.params.jobName)
  }, [])

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    setFileName(result.name)
    setFileUri(result.uri)
  };




  const postImage = async (name, values) => {
    const link = name+" / "+values.Email
    console.log(values.Email)
    const uri = fileUri;
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = ref(storage, 'resume/' + link);
    const uploadTask = uploadBytesResumable(storageRef, blob);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          savePostData(downloadURL,values)
        });
      }
    );


  }

  const savePostData = (downloadURL,values) => {
    values.link  = downloadURL

    addDoc(collection(db,'resume'),values)
    .then(()=>{
      toggleModal()
    })
    .catch(err =>console.log(err))
  }

  function sendToFireBase(values) {
    const name = values.Name
    postImage(name, values)
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
          if (checked === true && fileUri.length > 0) {
            sendToFireBase(values)
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.container}>
            <Modal isVisible={isModalVisible} style={{}}>
              <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
                <Text style={{ fontFamily: 'Medium', fontSize: 25 }}>Your Appointment Has been Submitted</Text>

                <TouchableOpacity onPress={() => toggleModal()} style={{
                  backgroundColor: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: 10,
                  marginTop: 20
                }}>
                  <Text style={{ fontFamily: 'Medium', fontSize: 20, color: 'white' }}>Close</Text>
                </TouchableOpacity>
              </View>
            </Modal>
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
  errorText: {
    fontFamily: 'Regular',
    color: 'red',
    fontSize: 16
  }
})