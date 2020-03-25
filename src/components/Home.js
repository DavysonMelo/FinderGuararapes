import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';

import api from '../services/api';

import logo from '../../assets/logo.png';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';

function Home({ navigation }){
    const [id, setId] = useState('');
    const [users, setUsers] = useState([]);
    const age = 25;

    useEffect(() => {
        async function getUserId(){
            try{
                const _id = await AsyncStorage.getItem('id');
                const user = await AsyncStorage.getItem('user');
                setId(_id);
                loadUsers();
            }catch(error){
                console.log('Get user error', error);
            }
        }
        getUserId();
    }, [id]);

    async function loadUsers() {
        try{
            const response = await api.get(`/user/find?_id=${id}`);

            const user = response.data;

            const { interest } = user;
            
            const res = await api.get(`/users/search?gender=${interest}&age=${age}`);
            setUsers(res.data);

        }catch(error){
            console.log('Load users error', error);
        }
    }

    async function handleLogout() {
        await AsyncStorage.clear()

        navigation.navigate('Login');
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={async() => handleLogout()}>
                <Image style={styles.logo} source={logo}/>
            </TouchableOpacity>
            <View style={styles.cardsContainer}>
                { 
                    users.length === 0
                    ? <Text style={styles.empty}>Buscando...</Text>
                    : (
                        users.map((user, index) => (
                            <View key={user._id} style={[styles.card, { zIndex: users.length - index }]}>
                                <Image style={styles.avatar} source={{uri: user.photos}}/>
                                <View style={styles.footer}>
                                    <Text style={styles.name}>{user.name}</Text>
                                    <Text style={styles.bio} numberOfLines={3}>{user.bio}</Text>
                                </View>
                            </View>
                        ))
                    )
                }
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={dislike}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={like}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: 175,
        height: 45,
        resizeMode: 'contain'
    },
    empty: {
        alignSelf: 'center',
        color: '#999',
        fontSize: 24,
        fontWeight: 'bold'
    },
    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        maxHeight: 400,
    },
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginHorizontal: 5,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    avatar: {
        flex: 1,
        height: 500
    },
    footer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    name:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 15
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
});

export default Home;