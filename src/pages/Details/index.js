import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import BackButton from "../../components/backButton";
import HeaderContext from "../../components/context";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const userTarget = route.params.target;
  const { toggleView } = useContext(HeaderContext);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      toggleView
    );
    return () => backHandler.remove();
  }, []);

  function handleBack() {
    toggleView();
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.back}>
        <Feather name="chevron-left" size={32} color="#009dff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Image source={{ uri: userTarget.photos }} style={styles.photos} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>
            {`${userTarget.name}, ${userTarget.age}`}
          </Text>

          <Text style={styles.title}>Bio:</Text>
          <Text style={styles.bio}>{userTarget.bio}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
