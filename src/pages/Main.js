import React, { useState, useMemo } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'react-native';

import Info from './Info';
import Settings from './Settings';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Matches from './Matches';

const Tab = createMaterialTopTabNavigator();

import HeaderContext from "../components/context";

function Main() {
    const [showHeader, setShowHeader] = useState(true);
    const displayHeader = useMemo(() => (showHeader === true ? 'flex' : 'none'), [
        showHeader
    ]);

    function toggleView() {
        setShowHeader(!showHeader);
    }

    return(
		<>
		    <StatusBar
					barStyle="dark-content"
					backgroundColor="transparent"
					translucent
      	/>
        <HeaderContext.Provider value={{ toggleView }}>
            <Tab.Navigator
                swipeEnabled={showHeader}
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
                        backgroundColor: '#f5f5f5',
                        display: displayHeader,
                    }
                }}
                initialRouteName='Info'
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
                    name= 'Info' component={Info}
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
                            <Icon name='comment-dots' size={24} color={color}/>
                        )
                    }}
                />
            </Tab.Navigator>
        </HeaderContext.Provider>
			</>
    )
}

export default Main;