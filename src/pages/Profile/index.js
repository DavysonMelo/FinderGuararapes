import React, {useState, useEffect, useContext} from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import blankProfile from '../../assets/blank-profile-picture.png';

import styles from './styles';

import HeaderContext from "../../components/context";

function Profile({ navigation }){
    const { toggleView } = useContext(HeaderContext);
    const [user, setUser] = useState();
    const [userString, setUserString] = useState('');

    useEffect(() => {
        async function getUser(){
            try{
                const item = await AsyncStorage.getItem('user');
                setUserString(item);
                const parsedItem = JSON.parse(item);
                setUser(parsedItem);

            }catch(error){
                console.log('Get user error');
            }
        }
        getUser();
    }, []);
    
    function openScreen(screen) {
        toggleView();
        navigation.navigate(screen, { userString })
    }

    return(
        <SafeAreaView style={styles.container}>
            {
                !user ? <Text style={{alignSelf: 'center'}}>Loading...</Text> 
                    : <><Image
                      style={styles.photos}
                      source={user.photos !== '' 
                        ? {uri: user.photos} : blankProfile}
                      />
                    <Text style={styles.title}>{`${user.name}, ${user.age}`}</Text></>
            }
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.settings}
                    onPress={() => openScreen('ProfileSettings')}
                >
                    <View style={styles.btnCfg}>
                        <Icon name='md-settings' size={35} color='#ccc'/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.media}
                    onPress={() => openScreen('PhotoUploader')}
                >
                <View style={styles.btnMedia}>
                    <Icon name='md-camera' size={40} color='#fff' style={{alignSelf: 'center', marginTop: 10}}/>
                    <Icon name='md-add-circle' size={25} color='#fff' style={styles.plus}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.edit}
                    onPress={() => openScreen('UpdateUser')}
                >
                    <View style={styles.btnEdit}>
                        <Icon name='md-create' size={35} color='#ccc'/>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Profile;