import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Resgister';

const Stack = createStackNavigator();

function MyStack() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName = 'Login'
            >
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false
                    }} 
                />

                <Stack.Screen
                    name='Main'
                    component={Main}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='Register'
                    component={Register}
                    options={{
                        headerStyle:{
                            backgroundColor: '#f5f5f5',
                            elevation: 0,
                            shadowOpacity: 0,
                            shadowOffset:{
                                height: 0
                            }
                        },
                        headerTitleStyle:{
                            display: 'none'
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack;