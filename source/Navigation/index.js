import React from 'react';
import { StatusBar as SB } from 'expo-status-bar';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Dimensions, Text, View, Image } from 'react-native'
const { width, height } = Dimensions.get('screen')

import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';
import PortFolio from '../screens/PortFolio';
import Blog from '../screens/Blog';
import Jobs from '../screens/Jobs';
import Contact from '../screens/Contact';

const Drawer = createDrawerNavigator();

import LOGO from '../assets/images/companylogo.png'

const CustomDrawer = (props) => {
    console.log(props)
    return (
        <View style={{ backgroundColor: 'black', flex: 1, }}>

            <View style={{ alignItems: 'center' }}>
                <Image
                    source={LOGO}
                    style={{ width: width / 2, height: width / 2, resizeMode: 'contain', }}
                />
            </View>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{
                }}
            >
                <DrawerItemList {...props}

                />
            </DrawerContentScrollView>
        </View>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerActiveBackgroundColor: '#27cccb',
                    drawerActiveTintColor: 'white',
                    drawerInactiveTintColor: 'white',
                    drawerLabelStyle: {
                        fontFamily: 'Medium',
                        fontSize: 20,
                        marginLeft: -10
                    },
                    headerTintColor: "white",
                    // leftButtonIconStyle:{
                    //     tintColor:'white',
                    // }
                }}
                drawerContent={props => <CustomDrawer {...props} />}
            >
                <Drawer.Screen name="Home" component={Home}
                    options={{
                        drawerIcon: ({ color }) => (<FontAwesome5 name="home" size={24} color={color} />),
                        headerTitleStyle:{
                            fontFamily:'Medium',
                            fontSize:25
                        },
                        headerStyle: {
                            backgroundColor: 'black',
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        
                    }}
                />
                <Drawer.Screen name="About Us" component={AboutUs}
                    options={{
                        drawerIcon: ({ color }) => (<FontAwesome5 name="info-circle" size={24} color={color} />),
                        headerTitleStyle:{
                            fontFamily:'Medium',
                            fontSize:25
                        },
                        headerTitle:"About Us",
                        headerStyle: {
                            backgroundColor: 'black',
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                    }}
                />
                <Drawer.Screen name="Portfolio" component={PortFolio}
                    options={{
                        drawerIcon: ({ color }) => (<FontAwesome5 name="suitcase" size={24} color={color} />),
                        headerTitleStyle:{
                            fontFamily:'Medium',
                            fontSize:25
                        },
                        headerStyle: {
                            backgroundColor: 'black',
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                    }}
                />
                <Drawer.Screen name="Blog" component={Blog}
                    options={{
                        drawerIcon: ({ color }) => (<FontAwesome5 name="microblog" size={24} color={color} />),
                        headerTitleStyle:{
                            fontFamily:'Medium',
                            fontSize:25
                        },
                        headerTitle:"Blogs",
                        headerStyle: {
                            backgroundColor: 'black',
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                    }}
                />
                <Drawer.Screen name="Career" component={Jobs}
                    options={{
                        drawerIcon: ({ color }) => (<Foundation name="torso-business" size={24} color={color} />),
                        headerTitleStyle:{
                            fontFamily:'Medium',
                            fontSize:25
                        },
                        headerStyle: {
                            backgroundColor: 'black',
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                    }}
                />
                <Drawer.Screen name="Contact" component={Contact}
                    options={{
                        drawerIcon: ({ color }) => (<AntDesign name="contacts" size={24} color={color} />),
                        headerTitleStyle:{
                            fontFamily:'Medium',
                            fontSize:25
                        },
                        headerTitle:"Contact Us",
                        headerStyle: {
                            backgroundColor: 'black',
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}