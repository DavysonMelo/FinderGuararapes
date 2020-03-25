import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Image, TextInput, TouchableOpacity, Text, AsyncStorage } from 'react-native';

import api from '../services/api';

import LoadingModal from '../components/LoadingModal';
import logo from '../../assets/logo.png';
import { Alert } from 'react-native';

function Login({ navigation }){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [border, setBorderColor] = useState("#fff");

    const [modalVisible, setModalVisibility] = useState(false);

    useEffect(() => {
        async function handleAuthorizedUser(){
            try{
                const id = await AsyncStorage.getItem('id');

                if(id) {
                    navigation.navigate('Main',  { id } );
                }
            }catch(error){
                console.log('Erro async storage', error);
            }
        }
        handleAuthorizedUser();
    }, []);

    async function handleLogin() {

        try{
            if(email === '' && password === ''){
                setModalVisibility(false);
                setBorderColor('#c20a0a');
                Alert.alert(
                    'Ei pow!', 
                    'Os campos não podem ficar vazios.',
                    [
                        {text: 'Ah, beleza'}
                    ]
                    );

            }else{
                setModalVisibility(true);
                const response = await api.post('/login', {email, password});
                
                const { _id } = response.data;

                const item = JSON.stringify(response.data);

                if(_id){
                    
                    await AsyncStorage.setItem('id', _id);
                    await AsyncStorage.setItem('user', item);

                    navigation.navigate('Main', {id: _id });

                    setEmail('');
                    setPassword('');
                    setBorderColor('#FFF');
                    setModalVisibility(false);
                }else{
                    setModalVisibility(false);
                    setBorderColor('#c20a0a');
                    Alert.alert('Poxa :(', 'Esse usuário não foi encontrado, verifica teu email e senha.');
                }
            }

        }catch(error){
            setModalVisibility(false);
            setBorderColor('#c20a0a');
            Alert.alert('Poxa :(', 'Esse usuário não foi encontrado, verifica teu email e senha.');
            console.log('Login error', error);
        }
    }

    function handleSignUp() {
        navigation.navigate('Register');
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
            <LoadingModal visible={modalVisible}/>
            <Image style={styles.logo} source={logo}/>
            <TextInput 
                style={{ ...styles.emailInput, borderColor: border }}
                autoCapitalize='none'
                placeholder='Digite seu e-mail'
                textContentType='emailAddress'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={{ ...styles.passwordInput, borderColor: border }}
                textContentType='password'
                secureTextEntry={true}
                autoCapitalize='none'
                placeholder='Digite sua senha'
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp} style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Cadastre-se</Text>
            </TouchableOpacity>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    logo: {
        width: 200,
        height: 70,
        resizeMode: 'cover'
    },
    emailInput: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        paddingHorizontal: 15
    },
    passwordInput: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 10,
        paddingHorizontal: 15
    },
    loginButton: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#f57f29',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30
    },
    loginButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    registerButton: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#ccc',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30
    },
    registerButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default Login;