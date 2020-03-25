import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';

const Stack = createStackNavigator();

function MyStack() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName = 'Login'
                headerMode='none'
            >
                <Stack.Screen
                    name='Login'
                    component={Login} 
                />

                <Stack.Screen
                    name='Main'
                    component={Main} 
                />

                <Stack.Screen
                    name='Register'
                    component={Register}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack;