import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';

import Back from 'react-native-vector-icons/Ionicons';

function ProfileSettings({ navigation }) {

    const [user, setUser] = useState('');

    function handleBack() {
        navigation.navigate('Profile');
    }

    useEffect(() => {
        async function getUser(){
            const item = await AsyncStorage.getItem('user');
            const parsedItem = JSON.parse(item);
            console.log(parsedItem);
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },

    header:{
        zIndex: 1,
        width: '100%',
        height: 46,
        position: 'absolute',
        backgroundColor: '#f5f5f5'
    },

    btnBack: {
        marginTop: 30,
        marginLeft: 10,
        flexDirection:'row'
    },

    backText: {
        marginLeft: 2,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#61a8fa'
    },
});