import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  AsyncStorage,
  Alert,
  StatusBar
} from "react-native";

import api from "../../services/api";

import AuthContext from '../../components/auth';

import LoadingModal from "../../components/LoadingModal";
import logo from "../../assets/logo.png";

import { LinearGradient } from 'expo-linear-gradient';

import styles from "./styles";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailBorder, setEmailBorderColor] = useState("#fff");
  const [passBorder, setPassBorderColor] = useState("#fff");

  const [modalVisible, setModalVisibility] = useState(false);

  const { signIn } = useContext(AuthContext);

  /*useEffect(() => {
    async function handleAuthorizedUser() {
      try {
        const item = await AsyncStorage.getItem("user");

        if (item) {
          navigation.navigate("Main", item);
        }
      } catch (error) {
        console.log("Erro async storage", error);
      }
    }
    handleAuthorizedUser();
  }, []);*/

  async function handleLogin() {
    //try {
      if (email === "") {
        setModalVisibility(false);
        setEmailBorderColor("#c20a0a");
        Alert.alert("Ei pow!", "O campo de email não pode ficar vazio.", [
          { text: "Ah, beleza" },
        ]);
      } else if(password === ""){
        setModalVisibility(false);
        setPassBorderColor("#c20a0a");
        Alert.alert("Ei pow!", "O campo de senha não pode ficar vazio.", [
          { text: "Ah, beleza" },
        ]);
      } else {
        setModalVisibility(true);

        const authorized = await signIn(email, password);

        //const error = user.error;

        /*if(error !== undefined || error !== null){
          Alert.alert("Eita!", "Esse usuário não foi encontrado", [
            { text: "Ah, beleza" },
          ]);
          setModalVisibility(false);
          return;
        }*/

        if (!authorized) {
          setModalVisibility(false);
          setEmailBorderColor("#c20a0a");
          setPassBorderColor("#c20a0a");
          Alert.alert(
            "Poxa :(",
            "Esse usuário não foi encontrado, verifica teu email e senha."
          );
        }
      }
    /*} catch (error) {
      setModalVisibility(false);
      setEmailBorderColor("#c20a0a");
      setPassBorderColor("#c20a0a");
      Alert.alert(
        "Poxa :(",
        "Esse usuário não foi encontrado, verifica teu email e senha."
      );
      console.log("Login error", error);
    }*/
  }

  function handleSignUp() {
    navigation.navigate("Register");
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container} behavior="padding" enabled>
        <LoadingModal visible={modalVisible} />
        <LinearGradient
          colors={['#c72e5e', '#f57f29']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
        <Image style={styles.logo} source={logo} />
        <View style={{ ...styles.emailContainer, borderBottomColor: emailBorder }}>
          <TextInput
            style={styles.emailInput}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            textContentType="emailAddress"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        
        <View style={{ ...styles.passwordContainer, borderBottomColor: passBorder }}>
          <TextInput
            style={styles.passwordInput}
            textContentType="password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.singUpText}>Não possui uma conta?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.registerButtonText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Login;
