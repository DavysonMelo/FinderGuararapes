import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../components/Home';
import Settings from './Settings';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Matches from '../components/Matches';
const Tab = createMaterialTopTabNavigator();

function Main(){

    return(
            <Tab.Navigator

                tabBarOptions={{
                    activeTintColor: "#ef790e",
                    inactiveTintColor: "#7f7f7f",
                    showIcon: true,
                    labelStyle: {
                        display: "none"
                    },
                    indicatorStyle: {
                        height: 0.5,
                        backgroundColor:"#ef790e"
                    },
                    
                    style:{
                        paddingTop: 30,
                        shadowOpacity: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        shadowRadius: 0,
                        elevation: 0,
                        backgroundColor: '#f5f5f5'
                    }
                }}
                initialRouteName='Home'
            >
                <Tab.Screen
                    name= 'Settings' component={Settings}
                    options={{
                        tabBarIcon: ({color})=>(
                            <Icon name='user' size={21} color={color}/>
                        )
                    }}
                />
                <Tab.Screen
                    name= 'Home' component={Home}
                    options={{
                        tabBarIcon: ({color})=>(
                            <Icon name='fire' size={25} color={color}/>
                        )
                    }}
                />
                <Tab.Screen
                    name= 'Matches' component={Matches} 
                    options={{
                        tabBarIcon: ({color})=>(
                            <Icon name='heart' size={24} color={color}/>
                        )
                    }}
                />
            </Tab.Navigator>
    )
}

export default Main;