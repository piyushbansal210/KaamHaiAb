import { View, Text, StyleSheet,FlatList,ScrollView } from 'react-native'
import React, { useEffect ,useState} from 'react'

import Blog from './Blog'

import BlogData from '../assets/data/Blog';


export default function BlogCarousel() {
    const [index,setIndex] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            if(index+1<=BlogData.length-1){
                setIndex(index+1)
            }
            else{
                setIndex(0)
            }
        },5000)
        
    },[index])
    return (
        <View  style={styles.container}>
            <Text  style={styles.blogHeader}>Blogs</Text>
            <Blog item={BlogData[index]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    blogHeader: {
        fontSize: 25,
        fontFamily: 'Medium',
        marginBottom:20
    }
})