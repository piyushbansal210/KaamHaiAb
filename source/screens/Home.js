import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import Standout from '../assets/data/Standout'
import Expertise from '../assets/data/Expertise'
import DEFINE from '../assets/data/Define'
import ImageData from '../assets/data/Image'
import Who from '../assets/data/Whoweare'
import BlogData from '../assets/data/Blog';

import WORLD from '../assets/images/world.png'

import Define from '../components/Define'
import Discover from '../components/Discover'
import Imagetext from '../components/Imagetext'
import MakeAppointment from '../components/MakeAppointment'
import Progress from '../components/Progress'
import Testimonial from '../components/Testimonial'
import BlogCarousel from '../components/BlogCarousel'
import Blog from '../components/Blog'

import LOGO from '../assets/images/companylogo.png'

const { width, height } = Dimensions.get('screen')

export default function Home({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} >
      <View style={{backgroundColor:'black',alignItems:'center',justifyContent: 'center',marginBottom:20}}>
        <Image
          source={LOGO}
          style={{width:width/4, height:width/4,resizeMode:'contain',}}
        />
      </View>

      {
        DEFINE.map(item => {
          return <Define item={item} key={item.id} />
        })
      }

      <Discover Standout={Standout} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={WORLD}
        />

      </View>
      <Discover Standout={Expertise} />
      <View style={styles.infoImage}>
        {
          ImageData.map(item=>{
            return <Imagetext item={item} key={item.id}/>
          })
        }
      </View>
      <MakeAppointment/>
      <Discover Standout={Who} />
      <Progress/>
      <Testimonial/>
      <BlogCarousel/>
      
      <View
        style={{height:20}}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: width / 1.1,
    height: width / 1.8,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  imageContainer:{ 
    alignItems: 'center' ,
    marginTop:15
  },
  infoImage:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:25
  }
})