import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Bar from './Bar'

const Title = [
    {
        id: 1,
        text: 'MARKETING',
        percentage: '94%',
        color:'#ffe724'
    },
    {
        id: 2,
        text: 'CREATIVE',
        percentage: '90%',
        color:'#27cccb'
    },
    {
        id: 3,
        text: 'ADVERTISEMENTS',
        percentage: '82%',
        color:'#000'
    },
]

export default function Progress() {
    return (
        <View style={styles.progress}>
            {
                Title.map(item=>{
                    return <Bar item={item} key={item.id}/>
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    progress: {
        margin:15,
        marginTop:30,
    }
})