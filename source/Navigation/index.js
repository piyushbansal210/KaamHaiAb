import React from 'react';
import { StatusBar as SB } from 'expo-status-bar';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
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
import Service from '../screens/Service';
import BlogDisplay from '../screens/BlogDisplay'
import Application from '../screens/Application';
import Quote from '../screens/Quote'

const Drawer = createDrawerNavigator();

import LOGO from '../assets/images/companylogo.png'

const CustomDrawer = (props) => {
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

const Stack = createStackNavigator();

function ServiceHome(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Service" component={Service} />
            <Stack.Screen name="Quote" component={Quote} />
        </Stack.Navigator>
    )
}

function BlogFull(){
    return(
        <Stack.Navigator
            initialRegion={Blog}
        screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Blog" component={Blog}   />
            <Stack.Screen name="BlogDisplay" component={BlogDisplay} />
        </Stack.Navigator>
    )
}

function CareerFull(){
    return(
        <Stack.Navigator
            initialRegion={Jobs}
        screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Jobs" component={Jobs}   />
            <Stack.Screen name="Application" component={Application} />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerStyle: {
                        width:width*0.7
                    },
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
                <Drawer.Screen name="Home" component={ServiceHome}
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
                <Drawer.Screen name="About" component={AboutUs}
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
                <Drawer.Screen name="Blog" component={BlogFull}
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
                <Drawer.Screen name="Career" component={CareerFull}
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