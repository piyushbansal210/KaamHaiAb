import { View, Text, StyleSheet, FlatList, Dimensions, Image, Pressable } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen')

import PortFolioData from '../assets/data/Portfolio'

const Items = [
    "Brochure",
    "Creatives",
    "Ecommerce",
    "Videos",
    "All",
]

import LOGO from '../assets/images/companylogo.png'

export default function PortFolio() {
    const [item, setItem] = React.useState("")
    const [data, setData] = React.useState(PortFolioData)

    const getData = () => {
        if (item !== "All") {
            const showData = PortFolioData.filter(itemData => itemData.theme === item)
            setData(showData)
        }
        else setData(PortFolioData)
    }

    React.useEffect(() => {
        console.log(item)
        if (item === "") setItem("All")

        getData()
    }, [item])

    const PortfolioHeader = () => {
        return (
            <View>
                <View style={{ backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={LOGO}
                        style={{ width: width / 4, height: width / 4, resizeMode: 'contain', }}
                    />
                </View>
                <Text style={{ marginHorizontal: 10, fontFamily: 'Medium', fontSize: 30, marginTop: 10, color: 'black' }}>Our Products</Text>
                <FlatList
                    data={Items}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <Pressable style={styles.button} onPress={() => setItem(item)}>
                            <Text style={styles.buttonText}>{item}</Text>
                        </Pressable>
                    )}
                />
            </View>
        )
    }


    return (
        <View style={styles.container}>

            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: 'orange', margin: 10, elevation: 8 }}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                    </View>

                )}
                ListHeaderComponent={PortfolioHeader}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#27cccb',
        flex: 1,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Medium',
        fontSize: 20
    },
    image: {
        width: width - 20,
        height: width - 50,

    }
})