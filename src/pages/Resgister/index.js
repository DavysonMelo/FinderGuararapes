import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity, Text, Platform } from 'react-native';

import api from '../../services/api';

import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import LoadingModal from '../../components/LoadingModal';

import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Foundation';
import BackButton from '../../components/backButton';
import { Alert } from 'react-native';

import styles from './styles';

function Register({ navigation }){

    const [mChecked, setMChecked] = useState(false);
    const [fChecked, setFChecked] = useState(false);

    const [maleInterest, setMaleInterest] = useState(false);
    const [femaleInterest, setFemaleInterest] = useState(false);

    const [name, setName] = useState('');
    const [borderName, setBorderName] = useState('#ddd');
    const [email, setEmail] = useState('');
    const [borderEmail, setBorderEmail] = useState('#ddd');
    const [password, setPassword] = useState('');
    const [borderPass, setBorderPass] = useState('#ddd');
    const [confPassword, setConfPassword] = useState('');
    const [borderConf, setBorderConf] = useState('#ddd');
    const [age, setAge] = useState();
    const [borderBirth, setBorderBirth] = useState('#ddd');
    const [bio, setBio] = useState('');
    const [instagram, setInstagram] = useState('');
    const [borderInsta, setBorderInsta] = useState('#ddd');
    const [interest, setInterest] = useState('');
    const [borderInter, setBorderInter] = useState('#ddd');
    const [gender, setGender] = useState('');
    const [borderGender, setBorderGender] = useState('#ddd');

    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState('');
    const [show, setShow] = useState(false);

    const [modalVisible, setModalVisibility] = useState(false);

    function handleBack() {
        navigation.navigate('Login');
    }

    navigation.setOptions({
        headerLeft: () => (
            <BackButton onPress={handleBack}/>
        )
    });
    
    function onChangeDate(event, selectedDate) {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        const actualMonth = currentDate.getMonth() + 1;
        const dString = `${currentDate.getDate()}/${actualMonth}/${currentDate.getFullYear()}`
        setDateString(dString);
        const year = currentDate.getFullYear();
        calculateAge(year, actualMonth);
    }

    function calculateAge(birthYear, month) {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        let userAge = currentYear - birthYear;

        if(month - currentMonth > 0){
            userAge --;
        }
        setAge(userAge);
    }

    function showDatePicker() {
        setShow(true);
    }

    function closeDatePicker() {
        setShow(false);
    }

    function handleEmptyFields() {
        if(name === ''){
            Alert.alert('Atenção', 'Campo de nome precisa ser preenchido');
            setBorderName('#c20a0a');
            return true;
        }else if(email === ''){
            Alert.alert('Atenção', 'Campo de email precisa ser preenchido');
            setBorderEmail('#c20a0a');
            return true;
        }else if(password === ''){
            Alert.alert('Atenção', 'Campo de senha precisa ser preenchido');
            setBorderPass('#c20a0a');
            return true;
        }else if(confPassword === ''){
            Alert.alert('Atenção', 'Necessário preencher o campo de confimação de senha.');
            setBorderConf('#c20a0a');
            return true;
        }else if(dateString === ''){
            Alert.alert('Atenção', 'Selecione sua data de nascimento.');
            setBorderBirth('#c20a0a');
            return true;
        }else if(instagram === ''){
            Alert.alert('Atenção', 'Campo instagram precisa ser preenchido.');
            setBorderInsta('#c20a0a');
            return true;
        }else if(!mChecked && !fChecked){
            Alert.alert('Atenção', 'Necessário selecionar seu sexo.');
            setBorderGender('#c20a0a');
            return true;
        }else if(!maleInterest && !femaleInterest){
            Alert.alert('Atenção', 'Selecione ao menos um interesse.');
            setBorderInter('#c20a0a');
            return true;
        }else{
            return false;
        }
    }

    useEffect(() => {
        checkInterest();
    }, [femaleInterest, maleInterest])

    function checkInterest() {
        if(femaleInterest && !maleInterest){
            setInterest('Female');
        }else if(maleInterest && !femaleInterest){
            setInterest('Male');
        }else if(maleInterest && femaleInterest){
            setInterest('Female, Male');
        }
    }

    function setDefaultValues(){
        setFemaleInterest(false);
        setMaleInterest(false);
        setFChecked(false);
        setMChecked(false);
        setName('');
        setEmail('');
        setPassword('');
        setConfPassword('');
        setDateString('');
        setBio('');
        setInstagram('');
        setModalVisibility(false);
    }

    function changeToDefaultBorder(){
        setBorderName('#ddd');
        setBorderEmail('#ddd');
        setBorderPass('#ddd');
        setBorderConf('#ddd');
        setBorderBirth('#ddd');
        setBorderInsta('#ddd');
        setBorderGender('#ddd');
        setBorderInter('#ddd');
    }

    async function handleSubmit() {
        if(!handleEmptyFields()){
            if(password === confPassword){
                if(age >= 16){
                    setModalVisibility(true);
                    const data = {
                        name,
                        email,
                        password,
                        gender,
                        interest,
                        instagram,
                        age,
                        photos: '',
                        bio
                    }
                    try{
                    const response = await api.post('/user', data);
                    setDefaultValues('#c20a0a');
                    changeToDefaultBorder('#c20a0a');
                    Alert.alert('Top', 'Usuário cadastrado com sucesso!');
                    }catch(error) {
                        console.log('Register error', error);
                    }
                }
            }else{
                setBorderPass();
                setBorderConf();
                Alert.alert('As senhas não correspondem!')
            }
        }
    }

    return (
            <View style={styles.container}>
                <LoadingModal visible={modalVisible}/>

                <ScrollView>
                <View style={styles.form}>

                    <Image style={styles.logo} source={logo}/>
                    
                    <TextInput
                        style={{...styles.input, borderColor: borderName}}
                        autoCapitalize='sentences'
                        placeholder='Nome'
                        autoCorrect={false}
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={{...styles.input, borderColor: borderEmail}}
                        autoCapitalize='none'
                        placeholder='Email'
                        keyboardType='email-address'
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={{...styles.input, borderColor: borderPass}}
                        autoCapitalize='none'
                        placeholder='Senha'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />

                    
                    <TextInput
                        style={{...styles.input, borderColor: borderConf}}
                        autoCapitalize='none'
                        placeholder='Confirme a senha'
                        secureTextEntry={true}
                        value={confPassword}
                        onChangeText={setConfPassword}
                    />
                
                    <View style={{...styles.date, borderColor: borderBirth}}>
                        <TextInput
                            placeholder='Data de nascimento'
                            editable={false}
                            value={dateString}
                        />
                        <TouchableOpacity onPress={showDatePicker}>
                            <Icon style={styles.calendar} name='calendar' size={35} color='#093a83'/>
                        </TouchableOpacity>
                    </View>
                    {show && (
                            <>
                                <TouchableOpacity 
                                    onPress={() => closeDatePicker()}
                                    style={styles.okButton}
                                >
                                    <Text style={styles.okText}>OK</Text>
                                </TouchableOpacity>
                                <DateTimePicker
                                    style={styles.datePicker}
                                    testID="dateTimePicker"
                                    timeZoneOffsetInMinutes={0}
                                    value={date}
                                    mode='date'
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChangeDate}
                                />
                            </>
                        )
                        
                    }

                    <TextInput
                        style={[styles.input, { height: 90 }]}
                        placeholder='Bio'
                        multiline={true}
                        numberOfLines={3}
                        autoCapitalize='sentences'
                        value={bio}
                        onChangeText={setBio}
                    >

                    </TextInput>

                    <TextInput
                        style={{...styles.input, borderColor: borderInsta}}
                        placeholder='Instagram'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={instagram}
                        onChangeText={setInstagram}
                    />
                </View>
                
                <View style={styles.bottom}>

                    <Text style={styles.checkTitle}>Sexo:</Text>
                    <View style={{flexDirection: 'row', borderColor: borderGender}}>
                        <CheckBox
                            containerStyle={{
                                backgroundColor: '#f5f5f5',
                                borderWidth: 0
                            }}
                            center
                            title='Feminino'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={fChecked}
                            onPress={() => {setFChecked(true), setMChecked(false), setGender('Female')}}
                        />
                        <CheckBox
                            containerStyle={{
                                backgroundColor: '#f5f5f5',
                                borderWidth: 0
                            }}
                            center
                            title='Masculino'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={mChecked}
                            onPress={() => {setMChecked(true), setFChecked(false), setGender('Male')}}
                        />
                    </View>
                    
                    <Text style={styles.checkTitle}>Interesse(s):</Text>
                    <View style={{flexDirection: 'row', borderColor: borderInter}}>
                        <CheckBox
                            containerStyle={{
                                backgroundColor: '#f5f5f5',
                                borderWidth: 0
                            }}
                            center
                            title='Homem'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={maleInterest}
                            onPress={() => {maleInterest ? setMaleInterest(false) : setMaleInterest(true)}}
                        />
                        <CheckBox
                            containerStyle={{
                                backgroundColor: '#f5f5f5',
                                borderWidth: 0
                            }}
                            center
                            title='Mulher'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={femaleInterest}
                            onPress={() => {femaleInterest ? setFemaleInterest(false) : setFemaleInterest(true)}}
                        />
                        
                    </View>
                    <TouchableOpacity
                        style={styles.submmit}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.submmitText}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>
                </ScrollView>
            </View>
    )
}

export default Register;