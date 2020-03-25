import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../components/Profile';
import PhotoUploader from '../components/PhotoUploader';
import ProfileSettings from '../components/ProfileSettings';
import UpdateUser from '../components/UpdateUser';

const Stack = createStackNavigator();

function MyStack({navigation}) {

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