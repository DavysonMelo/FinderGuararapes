import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  BackHandler } from 'react-native';

  import PhotoFrame from '../../components/PhotoFrame';

import styles from './styles';

import BackButton from '../../components/backButton';

import HeaderContext from '../../components/context';

function PhotoUploader({ navigation }) {
    const { toggleView } = useContext(HeaderContext);

    const [user, setUser] = useState('');

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
          <View style={styles.frames}>
            <PhotoFrame source={{ uri: "https://scontent.frec28-1.fna.fbcdn.net/v/t1.0-9/p960x960/44645676_1753563688088412_7277520258540240896_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=1zHfusOyBIgAX-Ez00o&_nc_ht=scontent.frec28-1.fna&_nc_tp=6&oh=4c314f26bff3e76bbff9791a631b57b5&oe=5E915ABF" }} />
            <PhotoFrame />
            <PhotoFrame />
            <PhotoFrame />
            <PhotoFrame />
            <PhotoFrame />
            <PhotoFrame />
            <PhotoFrame />
            <PhotoFrame />
          </View>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PhotoUploader;