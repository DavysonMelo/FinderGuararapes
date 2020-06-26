import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  BackHandler
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

import api from "../../services/api";

import io from "socket.io-client";

import Searching from "../../components/Searching";

import AuthContext from '../../components/auth';

import defaultAvatar from "../../assets/blank-profile-picture.png";

import HeaderContext from "../../components/context";

import styles from "./styles";


function Home({ navigation }) {
  const { toggleView } = useContext(HeaderContext);
  //const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);
  const age = 25;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );
    async function getUser() {
        /*const item = await AsyncStorage.getItem("user");
        const parsedItem = JSON.parse(item);*/
        //setUser(parsedItem);
        //loadUsers(parsedItem._id, parsedItem.interest);
        loadUsers(user._id, user.interest);
    }
    getUser();
    return () => backHandler.remove();
  }, []);

  async function loadUsers(userId, interest) {
    try {

      const res = await api.get(`/users/search?gender=${interest}&age=${age}`, {
        headers: {
          id: userId,
        },
      });
      setUsers(res.data);
    } catch (error) {
      console.log("Load users error", error);
    }
  }

  function handleInfo(target) {
    toggleView();
    navigation.navigate("Detail", { target });
  }

  async function handleLike() {
    const [{ _id }, ...rest] = users;
    console.log(user._id);
    try {
      await api.post(`/user/${_id}/likes`, null, {
        headers: {
          user: user._id,
        },
      });
      setUsers(rest);
    } catch (error) {
      console.log("Like error", error);
    }
  }

  function handleDislike() {
    const [targetUser, ...rest] = users;
    setUsers([...rest, targetUser]);
  }

  function handleBackButton() {
    return true;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {users.length === 0 ? (
          <Searching />
        ) : (
          users.map((user, index) => (
            <View
              key={user._id}
              style={[styles.card, { zIndex: users.length - index }]}
            >
              <Image
                style={styles.avatar}
                source={
                  user.photos == "" ? defaultAvatar : { uri: user.photos }
                }
              />
              <View style={styles.footer}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.bio} numberOfLines={3}>
                  {user.bio}
                </Text>
                <TouchableOpacity
                  style={styles.info}
                  onPress={() => handleInfo(user)}
                >
                  <Feather name="info" color="#585858" size={23} />
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDislike}>
          <Feather name="x" color="#b5b5b5" size={32} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLike}>
          <FontAwesome name="heart" color="#F50000" size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
