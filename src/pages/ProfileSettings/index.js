import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';

import Back from 'react-native-vector-icons/Ionicons';

import styles from './Styles';

function ProfileSettings({ navigation }) {

    const [user, setUser] = useState('');

    function handleBack() {
        navigation.navigate('Profile');
    }

    useEffect(() => {
        async function getUser(){
            const item = await AsyncStorage.getItem('user');
            const parsedItem = JSON.parse(item);
            setUser(parsedItem);
        }
        getUser();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.btnBack}
                    onPress={handleBack}
                >
                    <Back name='ios-arrow-back' size={35} color='#61a8fa'/>
                    <Text style={styles.backText}>Voltar</Text>
                </TouchableOpacity>
            </View>
            {
                !user ? <Text>Nada</Text>
                : <Text>{`${user}`}</Text>
            }
        </View>
    )
}

export default ProfileSettings;