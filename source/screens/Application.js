import { View, Text, StyleSheet, Dimensions, TextInput,ScrollView } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper';
const { width, height } = Dimensions.get('screen')

export default function Application() {

  const [checked, setChecked] = React.useState(false);

  return (
    <ScrollView>

    <View style={styles.container}>
      <Text style={{ fontFamily: 'Demi', color: '#000', fontSize: 30 }}>Apply  For This Position</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.formTitle}>Full Name</Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.formTitle}>Email Address</Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.formTitle}>Phone Number</Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.formTitle}>Cover Letter</Text>
        <TextInput
          multiline={true}
          style={styles.cover}
        />
      </View>
      <View>
        <Text style={styles.formTitle}>Upload Document</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Select File</Text>
          </View>
          <Text style={[styles.buttonText, { color: '#717171', marginLeft: 10 ,flex:1}]}>No File Selected</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',marginTop:10}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={[styles.buttonText, { color: '#717171', marginLeft: 10,flex:1 }]}>By using this form you agree with the storage and handling of your data by this website. </Text>
      </View>
      <View  style={[styles.button,{backgroundColor:"#000",marginTop:25,marginBottom:7}]}>
        <Text  style={[styles.buttonText,{color:'white'}]}>SUBMIT</Text>
      </View>
    </View>
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
  }
})