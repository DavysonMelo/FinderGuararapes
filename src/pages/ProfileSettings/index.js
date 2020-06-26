import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  BackHandler,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import BackButton from "../../components/backButton";

import HeaderContext from "../../components/context";

import AuthContext from "../../components/auth";

export default function ProfileSettings() {
  const navigation = useNavigation();
  const { toggleView } = useContext(HeaderContext);

  const { signOut } = useContext(AuthContext);

  const [user, setUser] = useState("");

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      toggleView
    );

    async function getUser() {
      const item = await AsyncStorage.getItem("user");
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
    headerLeft: () => <BackButton onPress={handleBack} />,
  });

  async function handleLogout() {
    //await AsyncStorage.clear();

    //navigation.navigate("Login");

    signOut();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
