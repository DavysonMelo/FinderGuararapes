import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';

import styles from './styles';

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

export default Home;