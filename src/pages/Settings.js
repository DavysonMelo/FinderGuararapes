import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './Profile';
import PhotoUploader from './PhotoUploader';
import ProfileSettings from './ProfileSettings';
import UpdateUser from './UpdateUser';

const Stack = createStackNavigator();

function MyStack() {

    return(
        <Stack.Navigator
            initialRouteName ='Profile'
            headerMode='none'
        >
            <Stack.Screen
                name='Profile'
                component={Profile} 
            />

            <Stack.Screen
                name='ProfileSettings'
                component={ProfileSettings}
                options={{
                    headerLeft: 'nonde'
                }}
            />

            <Stack.Screen
                name='PhotoUploader'
                component={PhotoUploader}
            />
            <Stack.Screen
                name='UpdateUser'
                component={UpdateUser}
            />
        </Stack.Navigator>
    )
}

export default MyStack;