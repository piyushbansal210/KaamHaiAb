import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import CreateProject from '../components/CreateProject'
import Projects from '../components/Projects'
import Discover from '../components/Discover'
import Progress from '../components/Progress'

import Vision from '../assets/data/Vision'
import Mission from '../assets/data/Mission'
import Team from '../components/Team'

const { height, width } = Dimensions.get('screen')

const client = [
  {
    id: 1,
    image: require('../assets/images/Clients/1.png'),
  },
  {
    id: 2,
    image: require('../assets/images/Clients/2.png'),
  },
  {
    id: 3,
    image: require('../assets/images/Clients/3.png'),
  },
  {
    id: 4,
    image: require('../assets/images/Clients/4.png'),
  },
  {
    id: 5,
    image: require('../assets/images/Clients/1.png'),
  },
  {
    id: 6,
    image: require('../assets/images/Clients/6.png'),
  },
  {
    id: 7,
    image: require('../assets/images/Clients/7.png'),
  },
  {
    id: 8,
    image: require('../assets/images/Clients/8.png'),
  },
]

export default function AboutUs() {
  return (
    <ScrollView>
      <View style={styles.what}>
        <Text style={styles.whatText}>WHAT DO WE DO?</Text>
      </View>
      
      <CreateProject />
      <Projects />
      <View style={{backgroundColor:'#f4f4f4'}}>
        <Text style={{marginHorizontal:15,fontFamily:'Medium',fontSize:22,marginTop:15}}>SKILLS</Text>
        <Progress />
      </View>
      
      <Discover Standout={Vision} />
      <Text style={styles.client}>OUR CLIENTS</Text>
      <View style={styles.clientImageContainer}>
        {
          client.map((item) => {
            return (
              <View key={item.id}>
                <Image source={item.image} style={styles.imageClient}  />
              </View>
            )
          })
        }
      </View>
      <Discover Standout={Mission} />
      <View style={styles.teamContainer}>
        <Text style={styles.team}>MEET OUR TEAM</Text>
      </View>
      <View style={styles.teamData}>
        <Team />
      </View>
        <View style={{height:20}}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageClient: {
    height: width / 3,
    width: width / 2.5,
    margin: 2,
    resizeMode: 'contain',
  },
  client: {
    fontFamily: 'Medium',
    fontSize: 22,
    margin: 15,
    marginTop: 25,

  },
  clientImageContainer: {
    alignItems: 'center',
    backgroundColor: '#C1BCBB'
  },
  teamContainer: {
    margin: 15,
    alignItems: 'center',
  },
  team: {
    fontFamily: 'Medium',
    fontSize: 30
  },
  teamData:{
    marginHorizontal:15,
    
  },
  what:{
    alignItems: 'center',
    backgroundColor:'black',
    paddingVertical:10
    
  },
  whatText:{
    fontFamily:'Demi',
    fontSize: 30,
    color:'white'
  }
})