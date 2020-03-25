import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

function Profile({ navigation }){

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

    return(
        <SafeAreaView style={styles.container}>
            {
                !user ? <Text style={{alignSelf: 'center'}}>Loading...</Text> 
                    : <><Image style={styles.photos} source={{uri: user.photos}}/>
                    <Text style={styles.title}>{`${user.name}, ${user.age}`}</Text></>
            }
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.settings} onPress={() => navigation.navigate('ProfileSettings', { userString })}>
                    <View style={styles.btnCfg}>
                        <Icon name='md-settings' size={35} color='#ccc'/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.media}>
                <View style={styles.btnMedia}>
                    <Icon name='md-camera' size={40} color='#fff' style={{alignSelf: 'center', marginTop: 10}}/>
                    <Icon name='md-add-circle' size={25} color='#fff' style={styles.plus}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.edit}>
                    <View style={styles.btnEdit}>
                        <Icon name='md-create' size={35} color='#ccc'/>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Profile;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20
    },

    photos: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 30
    },

    title: {
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#a2a2a2'
    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },

    media: {
        borderRadius: 35,
        marginTop: 80,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius:10,
    },

    edit: {
        alignItems: 'center'
    },

    settings: {
        alignItems: 'center'
    },

    btnMedia: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        borderRadius: 35,
        backgroundColor: '#ef790e',
    },

    btnCfg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },

    btnEdit: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },

    plus: {
        position: 'absolute',
        marginTop: 42,
        marginLeft: 48,
    }
});