import React, {useState, useEffect, useContext} from 'react';
import { Text, TextInput, View, ScrollView, TouchableOpacity, AsyncStorage, BackHandler } from 'react-native';

import styles from './styles';

import BackButton from '../../components/backButton';

import HeaderContext from '../../components/context';

function UpdateUser({ navigation }) {
    const { toggleView } = useContext(HeaderContext);

    const [user, setUser] = useState('');
    const [visibility, setVisibility] = useState('none');
    const [buttonVisibility, setButtonVisibility] = useState('flex');

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            toggleView
        );

        async function getUser(){
            const item = await AsyncStorage.getItem('user');
            const parsedItem = JSON.parse(item);
            setUser(parsedItem);
        }
        getUser();

        return () => backHandler.remove();
    }, []);

    function handleBack() {
        toggleView();
        navigation.goBack();
    }

    navigation.setOptions({
        headerLeft: () => (
            <BackButton onPress={handleBack}/>
        )
    });

    return(
        <View style={styles.container}>
            {
                !user ? <View />
                : <ScrollView
                    style={styles.form}
                    showsVerticalScrollIndicator={false}
                  >
                    <Text style={styles.title}>Email:</Text>

                    <TextInput
                      style={styles.input}
                      placeholder={user.email}
                      placeholderTextColor="#525252"
                    />

                    <Text style={styles.title}>Bio:</Text>

                    <TextInput
                      style={[styles.input, {height: 82}]}
                      placeholder={user.bio}
                      placeholderTextColor="#525252"
                      multiline={true}
                    />

                    <Text style={styles.title}>Instagram:</Text>

                    <TextInput
                      style={styles.input}
                      placeholder={user.instagram}
                      placeholderTextColor="#525252"
                    />

                    <TouchableOpacity
                      style={[styles.button, {display: buttonVisibility }]}
                      onPress={() => 
                        {
                          setVisibility('flex'),
                          setButtonVisibility('none')
                        }
                      }
                    >
                      <Text style={styles.buttonText}>Alterar senha</Text>
                    </TouchableOpacity>

                    <View style={{ display: visibility }}>
                      <Text style={styles.title}>Alterar senha:</Text>
                      <TextInput
                        style={styles.password}
                        placeholder='Senha antiga'
                        placeholderTextColor="#525252"
                        secureTextEntry={true}
                      />
                      <TextInput
                        style={styles.password}
                        placeholder='Nova senha'
                        placeholderTextColor="#525252"
                        secureTextEntry={true}
                      />
                      <TextInput
                        style={styles.password}
                        placeholder='Confirmar nova senha'
                        placeholderTextColor="#525252"
                        secureTextEntry={true}
                      />

                      <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => {
                          setVisibility('none')
                          setButtonVisibility('flex')
                        }
                      }
                      >
                        <Text style={styles.buttonText}>Cancelar</Text>
                      </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>

                  </ScrollView>
            }
        </View>
    )
}

export default UpdateUser;