import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './Profile';
import PhotoUploader from './PhotoUploader';
import ProfileSettings from './ProfileSettings';
import UpdateUser from './UpdateUser';

const Stack = createStackNavigator();

function SettingsStack() {

    return(
        <Stack.Navigator
            initialRouteName ='Profile'
            
        >
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='ProfileSettings'
                component={ProfileSettings}
                options={{
                    headerStyle:{
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        backgroundColor: '#f5f5f5'
                    },
                    headerTitleStyle:{
                        display: 'none'
                    }
                }}
            />

            <Stack.Screen
                name='PhotoUploader'
                component={PhotoUploader}
                options={{
                    headerStyle:{
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        backgroundColor: '#f5f5f5'
                    },
                    headerTitleStyle:{
                        display: 'none'
                    }
                }}
            />
            <Stack.Screen
                name='UpdateUser'
                component={UpdateUser}
                options={{
                    headerStyle:{
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        backgroundColor: '#f5f5f5'
                    },
                    headerTitleStyle:{
                        display: 'none'
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default SettingsStack;